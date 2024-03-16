import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import marca from '../assets/Marcas.webp';
import FooterComp from '../components/footer';
import SvgWsp from '../assets/wsp';


const ShopPage = () => {
    const [productos, setProductos] = useState([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        async function fetchProductos() {
            try {
                // Obtén los datos de la tabla 'Productos' de Supabase
                const { data, error } = await supabase
                    .from('Productos')
                    .select('*')
                    

                if (error) {
                    throw error;
                }

                setProductos(data);
            } catch (error) {
                console.error('Error al obtener datos de Supabase:', error.message);
            }
        }

        fetchProductos();
    }, []);

    const handleFiltroChange = (e) => {
        setFiltro(e.target.value);
    };

    const filteredProductos = productos.filter(producto =>
        producto.nombre.toLowerCase().replace('-', '').includes(filtro.toLowerCase().replace('-', ''))
    );
    
    console.log(filteredProductos);

    const renderProductos = () => {
        
        return filteredProductos.map((producto, index) => (
            <div key={index} className='shop-contain'>
                <img src={producto.imagen || 'https://i.ibb.co/H4wMgPb/IMAGE-DONT-FOUND.webp'} alt={`Producto ${producto.id}`} />
                <div className='shop-data'>     
                    <p className='shop-cod'>{producto.nombre}</p>
                    <p className='shop-marca'>{producto.marca}</p>
                    <p className='shop-id'>{producto.id}</p>
                </div>
                <p className='shop-stock'>En Stock : {producto.stock}</p>
                <a className='shop-lin' href={`https://wa.me/51990320160?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20${producto.nombre}`}>
                    <p>Cotizar Aquí</p>
                    <SvgWsp className='shop-img'/>
                </a>
            </div>
        ));
    };






    return (
        <div className='cont-ada'>
            <img src={marca} className='marcas-img'/>
            <div className='cont-head'>
                <h1>Productos</h1>
                <div className='buscador-cont'>
                    <input type='text' placeholder='Busca el código de la pieza que buscas' value={filtro} onChange={handleFiltroChange}/>
                </div>
            </div>
            
            <div className='cont-dat'>
                {renderProductos()}
            </div>
            <FooterComp/>
        </div>
    );  
}

export default ShopPage;
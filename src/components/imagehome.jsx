/*import {Link} from 'react-router-dom';*/
import SvgSearch from '../assets/search-icon.jsx';

const ImageHome = () => {
    return (
        <div className="image-home">
            <div className="conteiner-home">
                <h1>Venta De Partes De</h1>
                <h1>Maquinaria Pesada</h1>
                <h3>Tractores & Retroexcavadoras & Minicargadora & Aplanadoras y mas ...</h3>

                <div className="boton-search">
                    <SvgSearch/>
                    <input type="text" name="busqueda" id="busqueda" placeholder='Busca tu pieza aqui'/>
                    <button aria-hidden='none' >Buscar</button>
                </div>
            </div>
        </div>
    );  
}   

export default ImageHome;

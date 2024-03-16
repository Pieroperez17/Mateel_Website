import FooterComp from '../components/footer';
import Marcasslot from '../components/marcas';

const NosotrosPage = () => {
    return (
        <div className="aboutus">
            <div  className="about-con">
                <div className="about-a">
                    <h1>¿Quienes Somos?</h1>
                    <p>Somos Mateel, empresa peruana dedicada a la venta de repuestos de maquinaria pesada,nos esforzamos por ofrecer a nuestros clientes la mejor calidad en productos y servicios. Además, ofrecemos envíos a todo el país para que nuestros clientes puedan adquirir nuestros productos desde todo el territorio nacional. Nos aseguramos de que los productos lleguen a su destino en perfectas condiciones y en el menor tiempo posible.</p>
                    <p>Trabajamos con marcas líderes en la industria para garantizar que nuestros clientes tengan acceso a piezas de la mejor calidad. Además, ofrecemos precios competitivos y una excelente atención al cliente para asegurarnos de que nuestros clientes estén satisfechos con su experiencia de compra.</p>
                </div>
            </div>
            <Marcasslot/>
            <FooterComp/>
        </div>
    );  
}

export default NosotrosPage;
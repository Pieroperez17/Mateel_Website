import { Link } from 'react-router-dom'

const FooterComp = () => {

    return (
        <div className='footer'>
            <ul className='footer-nav'>
                <Link to="/" className='linkFoteer'>Inicio</Link>
                <Link to="about-us" className='linkFoteer'>Nosotros</Link>
                <Link to="cuestion" className='linkFoteer'>Preguntas Frecuentes</Link>
                <Link to="shop-mateel" className='linkFoteer'>Productos</Link>
                <Link to="contact-us" className='linkFoteer'>Contactenos</Link>
            </ul>
            <div className='footer-redes'>
                <p>Redes Sociales</p>
                <ul>
                    <a href='https://www.facebook.com/profile.php?id=100064132567878'>Facebook</a>
                    <a href='https://wa.me/51990320160?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20productos.'>WhatsApp</a>
                    <a href="mailto:mattel.eirl@gmail.com?subject=Consulta%20sobre%20tu%20producto">Gmail</a>
                </ul>
            </div>
            <p>©2024 Mateel. Todos los derechos reservados.</p>
        </div>
    );
};

export default FooterComp;
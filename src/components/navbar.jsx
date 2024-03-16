import SvgTractor from '../assets/tractor.jsx'
import { Link } from 'react-router-dom'

const Navbar = () => { 
    return (
        <nav>
            <div className="titulo-logo">
                <SvgTractor/>
                <h1>Mateel</h1>
            </div>
            

            <ul className="lista">
                <li className="nav-button">
                    <Link to="/" className='link'>Inicio</Link>
                </li>
                <li className="nav-button">
                    <Link to="about-us"  className='link'>Nosotros</Link>
                </li>
                <li className="nav-button">
                    <Link to="cuestion"  className='link'>Preguntas Frecuentes</Link>
                </li>
                <li className="nav-button">
                    <Link to="shop-mateel"  className='link'>Productos</Link>
                </li>
                <li className="nav-title-button">
                    <Link to="contact-us"  className='link-button'>Contactenos</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;
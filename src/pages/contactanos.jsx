import icon from '../assets/mateel_logo.webp'
import SvgCorreo from '../assets/correo';
import SvgTelefono from '../assets/telefono';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-head">
                <img src={icon} width={100} height={70} />
            </div>
            <div className="profile-body">
                <h2>Mateel eirl</h2>
                <p>Jr. Manuel Gonzales Prada Nro. 425</p>
                <p>9:00 - 17:00 / Lunes - Sabado</p>
            </div>
        </div>
    );
}

const Contact = () => {
    return (
        <div className="contact-block">
            <div className="contact-article">
                <div className="contact-icon">
                    <SvgCorreo/>
                </div>
                <div className="contact-data">
                    <h4>990 320 160</h4>
                    <p>Lima</p>
                    <h4>934 292 476</h4>    
                    <p>Cañete</p>
                    <h4>994 012 568</h4>
                    <p>Huancayo</p>
                    <h4>960 983 248</h4>
                    <p>Cusco</p>
                    <h4>960 983 248</h4>
                    <p>Pucallpa</p>
                </div>
            </div>
            <div className="contact-article">
                <div className="contact-icon">
                    <SvgTelefono/>
                </div>
                <div className="contact-data">
                    <h4>mattel.eirl@gmail.com</h4>
                    <p>Envianos un E-mail</p>
                </div>
            </div>
        </div>
        )
}



const ContactanosPage = () => {


    return (
        <>
            <h1 className="contact-titel">Contacto MATEEL</h1>
            <div className="contact-container" >
                <div className="box-container">
                    <Profile/>
                    <Contact/>
                </div>
                <div className="box-containerR">
                    <h1>Envianos un mensaje</h1>
                    <form action="https://formsubmit.co/mattel.eirl@gmail.com" method="POST">
                        <h5>Nombre</h5>
                        <input className="box-input" type="text" placeholder="Tu nombre" name="Nombre" />
                        <h5>Correo / Numero Telefonico</h5>
                        <input className="box-input" type="text" placeholder="correoejemplo@gmail.com  / +51 123456789" name="Correo-telefono" />
                        <h5>Descripción</h5>
                        <input className="box-input heid" type="text" placeholder="Escriba la pieza que busca" name="Mensaje"/>
                        <input className="box-buton" type="submit" value="Enviar Mensaje" />
                    </form>
                </div>
            </div>

        </>
    );  
}

export default ContactanosPage;
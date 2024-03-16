import icon from '../assets/mateel_logo.webp'

const LoadingPage = () => {
    return (
        <div className="loading-cont">
            <img src={icon} width={300} height={190}  />
            <h2 className="loading-text" >Pagina Solo Disponible en Laptop o Computadoras</h2>
        </div>
    );  
}

export default LoadingPage;

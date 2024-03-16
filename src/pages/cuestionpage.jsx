import { useState } from 'react';
import SvgFlecha from '../assets/flecha';
import FooterComp from '../components/footer';

const CuestionPage = () => {

    const [datos] = useState([
        {   cuestion: '¿Ofrecen servicios de envío a nivel nacional?', 
            answer: 'Sí, realizamos envíos a nivel nacional. Consulta con nuestro equipo para conocer las opciones de envío disponibles.', 
            id: 1 },
        {   cuestion: '¿En donde se ubican?', 
            answer: 'Contamos con sucursales en Lima ,Pucallpa ,Cañete,Huancayo,Ayacucho,Cusco.',  
            id: 2 },
        {   cuestion: '¿Que Metodos de Pago aceptan?',
            answer: 'Aceptamos efectivo en Soles o en Dolares , deposito a cuenta en Soles o en Dolares y yape.', 
            id: 3 },
        {   cuestion: '¿Hacen pedido de piezas a Importacion?', 
            answer: 'Si la pieza buscada no se encuetran en stock podemos importarlo en un tiempo de espera de 10 a 15 dias aproximadamente',  
            id: 4 },
        {   cuestion: '¿Puedo solicitar una cotización personalizada para un equipo específico?', 
            answer: 'Por supuesto, puedes contactarnos para obtener una cotización personalizada según tus requisitos específicos', 
            id: 5 },
        {   cuestion: '¿Qué tipos de partes de maquinaria pesada ofrecen?', 
            answer: 'Ofrecemos una amplia variedad de partes para maquinaria pesada, incluyendo repuestos para motores, sistemas hidráulicos, tren de rodaje, y más.', 
            id: 6 },
        {   cuestion: '¿Las partes que venden son originales o alternativas?', 
            answer: 'Suministramos tanto partes originales de fabricantes como opciones de alta calidad de marcas de confianza.', 
            id: 7 },
        {   cuestion: '¿Cómo puedo encontrar la parte específica que necesito para mi maquinaria?', 
            answer: 'Puedes contactar a nuestro equipo de ventas para obtener asistencia en la identificación y selección de las partes que necesitas.', 
            id: 8 }
    ]);

    const [respuestasVisibles, setRespuestasVisibles] = useState({});

    const toggleRespuesta = (id) => {
        setRespuestasVisibles(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };


    return (
        <div>
            <h1>Preguntas Frecuentes</h1>
            {datos.map((dato) => (
                <div key={dato.id} className={`cuestion-container ${respuestasVisibles[dato.id] ? 'expandido' : ''}`} onClick={() => toggleRespuesta(dato.id)}>
                    <div className='cuestion-head' >
                        <h3 className='cuestion-Text'>{dato.cuestion}</h3>
                        <SvgFlecha/>    
                    </div>
                    <p className={`anser-Text ${respuestasVisibles[dato.id] ? 'visible' : ''}`}>{dato.answer}</p>
                </div>
            ))}
            <FooterComp/>
        </div>
    );  
};
export default CuestionPage;
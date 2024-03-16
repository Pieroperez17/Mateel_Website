import ImageHome from '../components/imagehome';
import { useState } from 'react';
import FooterComp from '../components/footer';


const HomePage = () => {
    const [datos] = useState([
        {   img: 'https://www.deere.com/assets/images/region-3/parts-and-service/parts/maintenance/taller-filtros-large.png', 
            texto: 'Cuando se trata de mantener la eficiencia de tu maquinaria, cambiar los filtros del motor es una práctica esencial. Estos pequeños componentes desempeñan un papel crucial en la protección del motor contra partículas dañinas y el desgaste prematuro. Un filtro del motor obstruido puede reducir la potencia y la eficiencia del combustible, afectando negativamente el rendimiento general de la maquinaria. Mantén tus equipos en óptimas condiciones, asegurando cambios regulares de filtros para garantizar un rendimiento duradero y confiable.', 
            titulo: 'Optimizando el Rendimiento: La Importancia de Cambiar los Filtros del Motor' ,
            id: 1,
        },
        {   img: 'https://www.motrac.ec/sites/motrac.ec/files/2018-03/Mecanico_2.jpg', 
            texto: 'En el mundo de la venta de maquinaria, la clave para maximizar la vida útil y el rendimiento consiste en el mantenimiento preventivo. Realizar mantenimientos programados, como cambios de aceite, ajustes de componentes clave y la inspección regular de partes móviles, contribuye significativamente a prevenir fallas costosas y tiempos de inactividad no planificados. Invierte en el cuidado adecuado de tu maquinaria, y cosecharás beneficios en términos de eficiencia operativa y durabilidad.',  
            titulo: 'Mantenimiento Preventivo: El Secreto para la Longevidad de tu Maquinaria',
            id: 2, 
        },
        {   img: 'https://i.servimg.com/u/f39/19/65/13/18/tm/img_2032.jpg',
            texto: 'En el universo de la maquinaria, el sistema hidráulico es la columna vertebral de muchas operaciones. Desde excavadoras hasta tractores John Deere, el correcto mantenimiento de este sistema es esencial. Inspeccionar y cambiar los fluidos hidráulicos regularmente, así como revisar las mangueras y conexiones, asegura un funcionamiento fluido y eficiente. Mantén tu maquinaria John Deere en su mejor forma, prestando atención al corazón hidráulico que impulsa su rendimiento.', 
            titulo: 'La Eficacia del Sistema Hidráulico: Garantizando un Funcionamiento Fluido',
            id: 3, 
        },
        {   img: 'https://http2.mlstatic.com/D_NQ_NP_893930-MLA53726085941_022023-O.webp', 
            texto: 'Las llantas son la conexión directa entre tu maquinaria y el terreno. En el mundo de las máquinas John Deere, la inspección regular de los neumáticos es fundamental. Asegúrate de mantener la presión adecuada, monitorear el desgaste y reparar rápidamente cualquier daño. Un conjunto de neumáticos en buen estado no solo mejora la tracción y el rendimiento, sino que también contribuye a la seguridad operativa. Presta atención a las llantas y prepárate para una experiencia de trabajo sin complicaciones.',  
            titulo: 'Neumáticos Robustos, Rendimiento Óptimo: La Importancia de la Mantenimiento de las Llantas',
            id: 4,  
        },
        {   img: 'https://4.bp.blogspot.com/-coJ_Vj-5PRA/WRxeolyrjlI/AAAAAAAAKzs/9yMWsdrRsHM9RiZSVuQbEA-bZO3qsokngCLcB/s1600/Foto%2B5%2BCorte%2Bmotor%2BJohn%2BDeere%2B3350.jpg', 
            texto: 'En el mundo de las máquinas John Deere, el motor es el núcleo que impulsa el rendimiento. Mantén la salud de tu motor mediante cambios de aceite regulares, inspecciones de filtros y ajustes precisos. Un motor bien cuidado no solo ofrece un rendimiento óptimo, sino que también aumenta la eficiencia de combustible y reduce las emisiones. No escatimes en el cuidado del corazón de tu máquina John Deere para disfrutar de un rendimiento confiable y duradero.', 
            titulo: 'El Corazón de la Máquina: Cómo Cuidar el Motor de tu Maquinaria John Deere' ,
            id: 5, 
        },
        {   img: 'https://grupoacura.com/wp-content/uploads/2021/06/sistemas-de-lubricacion-2-1.jpg', 
            texto: 'En el mundo de la maquinaria, la lubricación adecuada es como la poesía para los componentes móviles. Asegúrate de que todas las partes móviles de tu maquinaria John Deere estén bien lubricadas para reducir la fricción y el desgaste prematuro. Establecer un programa de lubricación regular no solo prolonga la vida útil de tus equipos, sino que también mejora la eficiencia operativa y reduce la posibilidad de costosas reparaciones. La lubricación adecuada es la sinfonía que mantiene tu maquinaria en perfecta armonía.',
            titulo: 'El Arte de la Lubricación: Maximizando la Eficiencia de los Componentes Móviles',
            id: 6, 
        }
    ]);
    return (
        <div className='home-all'>  
            <ImageHome/>
            <h1>Articulos</h1>
            <div className='home-article'>
                {datos.map((dato) => (
                    <div key={dato.id} className='home-head'>
                        <img src={dato.img} className='home-img'/>
                        <div className='home-cont'>
                            <h2 className='home-title'>{dato.titulo}</h2>
                            <p className='home-desc'>{dato.texto}</p>
                        </div>
                    </div>  
                ))}
            </div>
            <FooterComp/>
        </div>
    );  
}

export default HomePage;
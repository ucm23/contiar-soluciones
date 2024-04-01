import pages from '../../public/data/pages.json'
//import '../../assets/styles/atributtes.styles.css'


import { RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine, RiBuildingLine, RiPencilRuler2Line, RiPageSeparator, RiP2PLine, } from "react-icons/ri";
const icons_ = [RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine, RiBuildingLine, RiPencilRuler2Line, RiPageSeparator, RiP2PLine,]

const images = [
    'danhos.png',
    'dragon.jpeg',
    'ticonsa.jpeg'
];

const conceptos = [
    {
        title: "Requisiciones",
        paragraph: "Solicitudes de productos o servicios dentro de una organización."
    },
    {
        title: "Orden de Compra",
        paragraph: "Documento que especifica los bienes o servicios solicitados y su precio."
    },
    {
        title: "REPSE",
        paragraph: "Registro Público de Empresas Socialmente Responsables."
    },
    {
        title: "Centros de distribución",
        paragraph: "Instalaciones para almacenamiento y distribución de productos."
    },
    {
        title: "Entregas",
        paragraph: "Acto de suministrar bienes o servicios a un destinatario."
    },
    {
        title: "Buzón CFDi",
        paragraph: "Sistema electrónico para recibir facturas electrónicas."
    },
    {
        title: "Comunicados",
        paragraph: "Mensajes o avisos emitidos para informar o notificar."
    },
    {
        title: "Configuración",
        paragraph: "Ajustes y preferencias personalizables de un sistema o aplicación."
    },
];

const Atributtes = ({ index }) => {
    return (
        <div className='atributtes'>
            <div className="header">
                {/*<h1 className='introduction'>
                    Cómo funciona
    </h1>*/}
                <div className='header-container'>
                    <div className='header-container-1'>
                        <h1 className='header-title'>
                            {/*Flujos de trabajo*/}
                            REPSE VICTUM RE®
                        </h1>
                        <p className='header-paragraph'>
                            Gestión de REPSE VICTUM RE® ofrece un <strong>Portal de gestión de flujos de trabajo para clientes y proveedores</strong>. Puede digitalizar, proteger y trabajar con documentos empresariales,
                            a la vez que <strong>optimiza los procesos para impulsar su empresa</strong>.
                            <br /><br />
                            Al reducir el tiempo dedicado a sus procesos actuales,
                            <span style={{ background: 'rgba(0,173,255,.2)' }}>su personal puede centrarse en el trabajo que realmente impulsa la productividad y los beneficios.</span>
                            
                            <br /><br />
                            Gestione lo que importa con REPSE VICTUM RE®.
                        </p>
                    </div>
                    <div className='header-container-2'>
                        <h1 className='header-title'>
                            Nuestros clientes
                        </h1>
                        <p className='header-paragraph'>
                            Actualmente REPSE VICTUM RE® cuenta con una historia de éxito que contar. Aquí le mostramos algunos casos.
                        </p>
                        <div className="container-images">
                            {images.map((item, index) => {
                                return (
                                    <div key={`img-${item}-${index}`} className="item-atributte">
                                        <img
                                            src={`empresas/${item}`}
                                            alt={`empresas/${item}`}
                                        //style={{ width: 123, height: 'auto' }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="header">
                <h1 className='title'>
                    La forma inteligente de trabajar
                </h1>
                <h1 className='paragraph'>
                    Soluciones de gestión de documentos y automatización del flujo de trabajo para empresas que necesitan que su información esté segura, conforme, utilizable y accesible, desde cualquier dispositivo, en cualquier momento y en cualquier lugar.
                </h1>

                <div className='header-container'>
                    <div className='header-container-1'>
                        <h1 className='header-title'>
                            Gestión de documentos
                        </h1>
                        <p className='header-paragraph'>
                            Procesamiento automáticamente todas los documentos entrantes con nuestra solución en la nube.
                        </p>
                        <img
                            src={`captures/buzon.png`}
                            alt={`captures/buzon.png`}
                            style={{ width: '100%', height: 'auto', marginTop: 12 }}
                        />
                    </div>
                    <div className='header-container-2'>
                        <h1 className='header-title'>
                            Transformación y soluciones digital
                        </h1>
                        <p className='header-paragraph'>
                            Soluciones de gestión de procesos y automatización del flujo de trabajo, con una transición hacia ls digitalización y automatización:
                        </p>
                        <div className="container-pros">
                            {conceptos.map((item, index) => {
                                return (
                                    <div key={`conceptos-${index}`} className="item-atributte">
                                        <h1 className='atributte-pros-title'>{item?.title}</h1>
                                        <p className='atributte-pros-paragraph'>{item?.paragraph}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="header">
                <h1 className='title'>
                    Da el salto que necesitas
                </h1>
                <h1 className='paragraph'>
                    {pages[index]?.atributtes?.paragraph}
                </h1>
            </div>
            <div className="container-atributtes">
                {pages[index]?.atributtes?.pros.map((item, index) => {
                    const Icon_ = icons_[index];
                    return (
                        <div key={`atributtes-${index}`} className="item-atributte">
                            <dt className="text-base font-semibold leading-7 text-gray-900_">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg_" style={{ backgroundColor: '#00adff' }}>
                                    {Icon_ && <Icon_ className="h-6 w-6 text-white" aria-hidden="true" />}
                                </div>

                            </dt>
                            {/*<h1 className='atributte-title'>{item?.title}</h1>*/}
                            <h1 className='atributte-pros-title-center'>{item?.title}</h1>
                            {/*<h1 className='atributte-paragraph'>{item?.paragraph}</h1>*/}
                            <p className='atributte-pros-paragraph'>{item?.paragraph}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Atributtes;

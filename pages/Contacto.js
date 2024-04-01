import { Fade } from "react-awesome-reveal";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import dynamic from 'next/dynamic';
import { HiLocationMarker, HiMail, HiPhoneOutgoing } from 'react-icons/hi'
import Formulario from "../components/Formulario";

const Mapa = dynamic(() => import("../components/Mapa"), {
    ssr: false,
})

const Contacto = () => {

    return (
        <Layout>
            <header className='contacto-header'>
                {/* Barra de navegación */}
                <Navbar >
                    <Fade direction="right">
                        <h1 className="hero_title">Contacto</h1>
                    </Fade>
                </Navbar>

                {/* Encabezado */}
                <section className="hero_container container">

                </section>
            </header>

            <div className="overhid">
                <Fade direction="right">
                    <div>
                        <h1 className="titulo_mapa">Nos ubicamos en</h1>
                        <section className="area-mapa contenedor">
                            <Mapa />
                            <div className="area-contacto">
                                <div className="contacto-cont">
                                    <div className="contacto1">
                                        <div className="contacto_logo">
                                            <HiLocationMarker className="contacto_ico contacto_HiLocationMarker" />
                                        </div>
                                        <div className="contacto_texto">
                                            <div className="contacto_titulo">
                                                Ubicación
                                            </div>
                                            <div className="contacto_parrafo">
                                                Av. Ejército Nacional 769, piso 2. Col. Granada C.P. 11520, CDMX.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contacto1">
                                        <div className="contacto_logo">
                                            <HiMail className="contacto_ico contacto_HiMail" />
                                        </div>
                                        <div className="contacto_texto">
                                            <div className="contacto_titulo">
                                                Correo
                                            </div>
                                            <div className="contacto_parrafo">
                                                contacto@consultores-cti.com.mx<br /> gsamano@orbnote.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contacto1">
                                        <div className="contacto_logo">
                                            <HiPhoneOutgoing className="contacto_ico contacto_HiPhoneOutgoing" />
                                        </div>
                                        <div className="contacto_texto">
                                            <div className="contacto_titulo">
                                                Teléfono
                                            </div>
                                            <div className="contacto_parrafo">
                                                811 588 03 05
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fade>
            </div>

            <section className="contenedor overhid">
                <Fade direction="left">
                    <section className="my-25">
                        <Formulario />
                    </section>
                </Fade>
            </section>
        </Layout>
    )
}

export default Contacto
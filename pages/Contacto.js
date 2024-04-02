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

                {/* Encabezado 
                <section className="hero_container container">

                </section>*/}
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
                                                Ejército Nacional 769, Piso 2, Colonia Granada, C.P. 11520, Alcaldía Miguel Hidalgo, CDMX <br/><br/>
                                                MONTERREY: Real de San Juan 102, Col. Real de San Jerónimo, C.P. 64634, Monterrey, N.L.
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
                                                luis.ruiz@contiar.mx
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
                                                CDMX: 55 78 592984 <br />
                                                MTY: 81 81 43 9592
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
import { FcWorkflow, FcApproval, FcFlowChart, FcBriefcase, FcAssistant, FcConferenceCall, FcDiploma1, FcDiploma2, FcGraduationCap, FcPositiveDynamic, FcRegisteredTrademark, FcParallelTasks, FcReading, FcRating, FcApprove } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const Nosotros = () => {
    return (
        <Layout>
            <header className='about-header'>
                {/* Barra de navegación */}
                <Navbar>
                    <Fade direction="right" style={{ position: 'relative', zIndex: 10 }}>
                        <h1 className="hero_title">
                            ¿Quiénes somos?
                        </h1>
                    </Fade>
                </Navbar>

                {/* Encabezado */}

            </header>

            <section className='bg-nosotros'>
                <section className='d-flex overhid'>
                    <section className='nosotros-texto'>
                        <Fade direction="right">
                            <h1 className='nosotros-titulo'>CONTIAR SOLUCIONES S.A. DE C.V.</h1>
                            <p className='nosotros-text'>
                                Somos una empresa mexicana que a lo largo de 4 años ha desarrollado experiencia, compromiso y pasión por la creación e implementación de proyectos especializados.
                                Nuestra filosofía empresarial se basa en el crecimiento continuo a través de la actualización de nuestros instrumentos de trabajo, es decir, en mantener una
                                visión vanguardista que supera los retos de cada proyecto, con el objetivo de cumplir con las expectativas de nuestros
                                clientes.
                            </p>

                            <p className='nosotros-text'>
                                <strong>Experiencia en:</strong>
                            </p>
                            <p className='nosotros-text'>
                                • Blowing-Fibra Óptica: Más de 2,000 kilómetros de experiencia realizando Inmersión de Fibra Óptica por el método de Blowing. MRO ESTADO DE MÉXICO-MICHOACÁN. Autopista México - GDL. <br />
                                • Zanjado: Villagrán, Gto — Querétaro Bis.<br />
                                • Canalización: Villagrán, Gto — Querétaro Bis.<br />
                            </p>
                        </Fade>
                    </section>
                    <Fade direction="left">
                        <section className='cti_person'>
                            <Image
                                src="/Person_Image.svg"
                                alt="Negocios"
                                width={520}
                                height={520}
                            />
                        </section>
                    </Fade>
                </section>
            </section>

            <section className='my-25'>
                <section className='contenedor diferenciaa'>
                    <h1 className='titulo-diferencia'>Valores</h1>
                    <div className='texto-diferencia overhid'>
                        <Fade direction="down">
                            <div className='p-diff'>
                                <FcApprove className='icon-dif' />
                                <p>Disciplina</p>
                            </div>
                        </Fade>
                        <Fade direction="left">
                            <div className='p-diff'>
                                <FcAssistant className='icon-dif' />
                                <p>Compromiso</p>
                            </div>
                        </Fade>

                        <Fade direction="right">
                            <div className='p-diff'>
                                <FcDiploma2 className='icon-dif' />
                                <p>Calidad</p>
                            </div>
                        </Fade>
                        <Fade direction="down">
                            <div className='p-diff'>
                                <FcRating className='icon-dif' />
                                <p>Lealtad</p>
                            </div>
                        </Fade>
                        <Fade direction="up">
                            <div className='p-diff'>
                                <FcRegisteredTrademark className='icon-dif' />
                                <p>Respeto</p>
                            </div>
                        </Fade>
                        <Fade direction="left">
                            <div className='p-diff'>
                                <FcPositiveDynamic className='icon-dif' />
                                <p>Innovación</p>
                            </div>
                        </Fade>

                        <Fade direction="left">
                            <div className='p-diff'>
                                <FcReading className='icon-dif' />
                                <p>Responsabilidad</p>
                            </div>
                        </Fade>

                        <Fade direction="right">
                            <div className='p-diff'>
                                <FcParallelTasks className='icon-dif' />
                                <p>Ética e integridad</p>
                            </div>
                        </Fade>
                        <Fade direction="down">
                            <div className='p-diff'>
                                <FcDiploma1 className='icon-dif' />
                                <p>Excelencia</p>
                            </div>
                        </Fade>
                        <Fade direction="left">
                            <div className='p-diff'>
                                <FcConferenceCall className='icon-dif' />
                                <p>Honestidad</p>
                            </div>
                        </Fade>
                        <Fade direction="left">
                            <div className='p-diff'>
                                <FcGraduationCap className='icon-dif' />
                                <p>Profesionalismo</p>
                            </div>
                        </Fade>
                    </div>
                </section>
            </section>

            <section className='mis-vis'>
                <section className='bloques-mis'>
                    <Fade direction="down">
                        <div className='vis'>
                            <h1>Visión</h1>
                            {/*<p>
                                Ser el aliado estratégico en Tecnología, que nos permita posicionarnos como el principal referente en soluciones IT y ciberseguridad en México, 
                                Estados Unidos, Centro y Sur de América.
    </p>*/}
                            <p>
                                Consolidar y posicionar nuestro liderazgo en servicios y soluciones en México y América Latina, mediante la satisfacción
                                de las necesidades de los clientes de forma presta y efectiva, todo ello con distinción en nuestra capacidad, experiencia,
                                conocimiento, compromiso e innovación.
                            </p>
                        </div>
                    </Fade>
                    <Fade direction="up">
                        <div className='mis'>
                            <h1>Misión</h1>
                            {/*<p>
                                Creamos relaciones de confianza y profesionalismo que nos permite pensar como un solo equipo entre nuestros colaboradores, 
                                clientes, socios, mayoristas y fabricantes para contribuir en la innovación y desarrollo tecnológico.
</p>*/}
                            <p>
                                Ofrecer a nuestros clientes excelencia, a través de la optimización de nuestros recursos y la creación de sinergias que contribuyan al logro de sus metas, bajo un
                                ambiente de calidad, honestidad, cooperación, respeto, limpieza, trabajo en equipo y un amplio sentido de urgencia en el
                                servicio que el cliente requiera.
                            </p>
                        </div>
                    </Fade>
                </section>
            </section>



            <section className='my-25'>
                <section className='contenedor diferencia'>
                    <h1 className='titulo-diferencia'>¿Cómo hacemos la diferencia?</h1>
                    <div className='texto-diferencia overhid'>
                        <Fade direction="left">
                            <div className='p-dif'>
                                <FcBriefcase className='icon-dif' />
                                <p>Tenemos pasión por lo que hacemos.</p>
                            </div>
                        </Fade>
                        <Fade direction="down">
                            <div className='p-dif'>
                                <FcWorkflow className='icon-dif' />
                                <p>Creamos buenas relaciones para tener buenos negocios.</p>
                            </div>
                        </Fade>
                        <Fade direction="up">
                            <div className='p-dif'>
                                <FcFlowChart className='icon-dif' />
                                <p>Impulsamos el desarrollo personal y profesional.</p>
                            </div>
                        </Fade>
                        <Fade direction="right">
                            <div className='p-dif'>
                                <FcApproval className='icon-dif' />
                                <p>Nos enfocamos en resultados que nuestros clientes esperan.</p>
                            </div>
                        </Fade>
                    </div>
                </section>
            </section>

        </Layout>
    )
}

export default Nosotros
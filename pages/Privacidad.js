import { FcWorkflow, FcApproval, FcFlowChart, FcBriefcase, FcAssistant, FcConferenceCall, FcDiploma1, FcDiploma2, FcGraduationCap, FcPositiveDynamic, FcRegisteredTrademark, FcParallelTasks, FcReading, FcRating, FcApprove } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const Privacidad = () => {
    return (
        <Layout>
            <header className='about-header'>
                {/* Barra de navegación */}
                <Navbar>
                    <Fade direction="right" style={{ position: 'relative', zIndex: 10 }}>
                        <h1 className="hero_title">
                            Aviso de Privacidad
                        </h1>
                    </Fade>
                </Navbar>

                {/* Encabezado */}

            </header>

            <section className='bg-aviso'>
                <section className='d-flex overhid'>
                    <section className='nosotros-texto_'>
                        <Fade direction="right">
                            <h1 className='nosotros-titulo'>CONTIAR SOLUCIONES S.A. DE C.V.</h1>
                        </Fade>
                        <p className='nosotros-text'>
                            <p>
                                En debido cumplimiento a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de Particulares,
                                se genera el presente “Aviso de Privacidad” por parte de Contiar Soluciones S.A. DE C.V.,
                                misma que es responsable de la recopilación y tratamiento de datos de clientes y proveedores.
                            </p>
                            <p>
                                Por lo anterior, CONTIAR SOLUCIONES reconoce los procesos legales y otorga derechos de Acceso, Rectificación,
                                Cancelación y/o Oposición denominados ARCO, respecto del contenido o forma de manejo de los datos que nuestros
                                clientes y proveedores pone en conocimiento de CONTIAR SOLUCIONES, para que sus datos personales sean debidamente
                                protegidos tanto en su almacenamiento y en su caso de transmisión.
                            </p>
                            <p>
                                La información respecto de los datos personales que CONTIAR SOLUCIONES recopilará, son enunciativamente;
                                nombre(s) o denominación social,
                                teléfono fijo y/o móvil, direcciones postales y/o de correo electrónico,
                                Registros fiscales y patronales en su caso. No recolectamos ninguna información financiera ni datos sensibles que
                                puedan vulnerar la intimidad de nuestros usuarios, clientes o proveedores.
                            </p>
                            <p>
                                Su información será utilizada por CONTIAR SOLUCIONES y sus empresas filiales o subsidiarias, con objeto de encontrar
                                una sana comunicación y generar un mejor servicio y oferta respecto de nuestras tecnologías, productos y/o servicios
                                satisfaciendo sus necesidades, en beneficio de las condiciones y canales de comunicación privado o comercial con usted,
                                asimismo dar certeza en los actos jurídicos que nos vinculen. Adicionalmente su información nos permitirá realizar
                                evaluaciones periódicas sobre nuestros productos y servicios, así como para medir la calidad del servicio que le
                                brindamos y en general para implementar acciones que se traduzcan en el beneficio de sus requerimientos de los
                                productos y servicios que provee CONTIAR SOLUCIONES.
                            </p>
                            <p>
                                Los datos o información proporcionados a CONTIAR SOLUCIONES serán tratados con la estricta confidencialidad y secreto,
                                y los que en su caso se considerasen secreto industrial serán utilizados por CONTIAR SOLUCIONES en los términos señalados
                                por el Título Tercero de la Ley de la Propiedad Industrial. La excepción a lo anterior,
                                se traspasara únicamente mediante mandato judicial.
                            </p>
                            <p>
                                Para efectos de modificaciones, actualizaciones, aceptaciones, negativas, transferencia de datos a favor de terceros
                                o en su caso revocaciones al presente aviso de privacidad, estarán disponibles para usted en nuestra página de 
                                internet <a href="https://contiar.mx/"> contiar.mx</a>, o se enviarán confirmaciones vía impresa o correo electrónico a petición de parte.
                            </p>
                            <p>
                                <strong>Atentamente</strong>
                                <br />Contiar Soluciones S.A. DE C.V. (Responsable)<br />Dirección Jurídica Corporativa (Atención)
                                <br />Real de San Juan 102,
                                <br />Col. Real de San Jerónimo,
                                <br />Monterrey, N.L.
                            </p>
                        </p>
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default Privacidad;
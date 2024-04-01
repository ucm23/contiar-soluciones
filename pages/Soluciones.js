import { useState, useEffect } from "react"
import { Fade } from "react-awesome-reveal"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Servicio from "../components/Servicio"

const Soluciones = () => {
    const [serv, setServ] = useState([])

    useEffect(() => {
        (async () => {
            const resSoluciones = await fetch("/data/serv.json")
            const soluciones = await resSoluciones.json();
            setServ(soluciones.serv)
        })()

    }, [])

    return (
        <Layout>
            <header className='soluciones-header'>
                {/* Barra de navegación */}
                <Navbar >
                    <Fade direction="right">
                        <h1 className="hero_title">Soluciones</h1>
                        <p className="hero_texto">Conoce todos nuestros servicios</p>
                    </Fade>
                </Navbar>

                {/* Encabezado */}

            </header>

            <section className="contenedor overhid">
                {
                    serv.map(({ t1, p1, a1, img1, clase, direction, alt, link }, i) =>
                        <Servicio
                            link={link}
                            key={i}
                            t1={t1}
                            p1={p1}
                            a1={a1}
                            img1={img1}
                            clase={clase}
                            direction={direction}
                            alt={alt}
                        />
                    )
                }
            </section>

        </Layout>
    )
}

export default Soluciones
import { Fade } from "react-awesome-reveal"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { useRouter } from 'next/router'

const NotFound = () => {

    const { push } = useRouter();

    setTimeout(() => {
        push("/");
    }, 4500);

    return (
        <Layout>
            <header className='not-header'>
              {/* Barra de navegación */}
              <Navbar />

              {/* Encabezado */}
              <section className="hero_container container">
                  <Fade direction="right">
                      <h1 className="hero_title">
                          Esta página está vacía
                      </h1>
                  </Fade>
              </section>
          </header>
        </Layout>
    )
}

export default NotFound
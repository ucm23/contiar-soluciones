import Head from 'next/head';
import NProgress from 'nprogress';
import Footer from './Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {

    const router = useRouter();
    const route = router.pathname;

    const [storedItem, setStoredItem] = useState("");
    const [viewChat, setViewChat] = useState(false)

    const handleViewChat = () => setViewChat(!viewChat)

    useEffect(() => {
        let value = localStorage.getItem('8FxVPKskluR7opVa') || "";
        setStoredItem(value)

        /* valor -> gdOf3Jv2UvsAv2Yf */

        const handleRouteChange = (url) => {
            NProgress.start();
        };

        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', () => {
            NProgress.done();
        })

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, [])

    const handleNavigate = () => router.push("/Login")

    const logout = () => {
        localStorage.removeItem("8FxVPKskluR7opVa");
        router.push("/");
    }

    return (
        <>
            <Head>
                <meta name="title" content="CONTIAR SOLUCIONES S.A. DE C.V." />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="CONTIAR SOLUCIONES S.A. DE C.V. es una empresa que se creo en el año 2001 con el objetivo de vender Hardware, Software y Servicios de Tecnología" />
                <link rel="icon" type="image/x-icon" href="/ico.ico"></link>
                <title>Contiar Soluciones</title>
            </Head>
            <main>
                {children}
            </main>
            <Footer />



        </>
    )
}

export default Layout
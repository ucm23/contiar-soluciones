import { MdExpandMore } from 'react-icons/md';
import { Fade } from "react-awesome-reveal";
import { ColorButton } from '../lib/theme';
import { useRouter } from 'next/router'
import { Stack } from '@mui/material';
import React from 'react';
import { Suspense, useEffect, useState } from 'react'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Work from '../components/Work';
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Tabs } from 'antd';
import Producs from '../components/products/Producs';
import Services from '../components/products/Services';

import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
    "https://hyrfyrslqhozjqsqlysc.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cmZ5cnNscWhvempxc3FseXNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxMzU2OTIsImV4cCI6MjAyMTcxMTY5Mn0.qpUHEu9muBXrIr8J2zIFX7bdcAQKNg2VTsAMAs4-BDA"
)

const Service = dynamic(() => import('../components/Service'), {
    suspense: true,
})

const items = [
    {
        key: '1',
        label: <h1>Productos</h1>,
        children: <Producs />,
    },
    {
        key: '2',
        label: <h1>Servicios</h1>,
        children: <Services />,
    }
];

import { publicIpv4, publicIpv6 } from 'public-ip';
import { insertLogs } from '../api/logs';
import { indexChat } from '../api/chat';
import ReadDocs from '../components/news/ReadDocs';

const index = () => {
    const { push } = useRouter();
    const [work, setWork] = useState([]);
    const [services, setServices] = useState([]);
    const [cert, setCert] = useState([]);
    const [imgs, setImgs] = useState([]);

    const [dataChat, setDataChat] = useState([])
    const [loaderChat, setLoaderChat] = useState(false)

    const [modalDocs, setModalDocs] = useState(false);
    const handleDocs = () => {
        if (!mobile) setModalDocs(!modalDocs);
        else {
            const a = document.createElement('a');
            a.download = 'Contiar-Soluciones.pdf';
            a.href = '/docs/CONTIAR-SOLUCIONES-ITS-2024.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

    }

    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        getChat()
        const isBrowser = typeof window !== 'undefined';

        if (isBrowser && window.navigator) {
            let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            console.log("🚀 ~ useEffect ~ isMobile:", isMobile)
            setMobile(isMobile)
        } else {
            console.log('El objeto navigator no está disponible en este entorno.');
        }
    }, [])

    const getChat = async () => {
        try {
            const response = await indexChat({})
            console.log("🚀 ~ getChat ~ response:", response)
            setDataChat(response?.data)
        } catch (error) {
            console.log("🚀 ~ getChat ~ error:", error)
        } finally {
            setLoaderChat(true)
        }
    }

    const getGeolocation = () => {
        let geolocation = { latitude: null, longitude: null };
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                geolocation.latitude = position.coords.latitude;
                geolocation.longitude = position.coords.longitude;
            });
        } catch (error) {
            console.log("🚀 ~ getGeolocation ~ error:", error)
        }
        return geolocation;
    }

    const getBrowserType = () => {
        let userAgent = navigator.userAgent;
        let browserType;

        try {
            if (navigator.userAgentData) {
                const { brands } = navigator.userAgentData;
                browserType = brands.find(brand => brand.brand !== "Not a Brand").brand;
                const knownBrands = brands.filter(brand => !/not|brand/i.test(brand.brand.replace(/\s|[^a-zA-Z]/g, '')));

                if (knownBrands.length > 0) {
                    // Tomar la primera marca disponible.
                    let brand = knownBrands[0];
                    const realBrands = knownBrands.filter(brand => !/Chromium/i.test(brand.brand.replace(/\s|[^a-zA-Z]/g, '')));
                    if (realBrands.length > 0) brand = realBrands[0];
                    browserType = `${brand.brand} versión ${brand.version}`;
                }
            }
        } catch (error) {
            browserType = 'Navegador Desconocido';
        }

        return browserType || userAgent;
    };



    useEffect(() => {
        (async () => {
            const resWorks = await fetch("/data/work.json")
            const works = await resWorks.json();
            setWork(works.works)

            const resServices = await fetch("/data/services.json")
            const service = await resServices.json();
            setServices(service.services)

            const resCert = await fetch("/data/cert.json")
            const cer = await resCert.json();
            setCert(cer.cert)

            const resImgs = await fetch("/data/imgs.json")
            const img = await resImgs.json();
            setImgs(img.imgs)

            /*let { data: project, error } = await supabase
                .from('project')
                .select('*')

            console.log('projects: ', project, 'error: ', error)*/


        })()
        setUserLog()
    }, [])

    const setUserLog = async () => {
        let geolocation = getGeolocation();
        let ipv4 = 'unknow', ipv6 = 'unknow';
        ipv4 = await publicIpv4();
        ipv6 = await publicIpv6();
        const data = {
            project_id: 3,
            created_at: () => Date.now(),
            ip_address_v4: ipv4,
            ip_address_v6: ipv6,
            browser_type: getBrowserType(),
            latitude: geolocation.latitude,
            longitude: geolocation.longitude,
            plataform: navigator?.platform,
        };
        await insertLogs({ data })
    }


    //const handleClick = () => push('/Nosotros');
    const date = new Date();
    const year = date.getFullYear()

    return (
        <Layout>
            <header className='hero'>
                {/* Barra de navegación */}
                <Navbar >
                    <Fade direction="left">
                        <h1 className="hero_title">
                            <br /> Contiar Soluciones
                        </h1>
                    </Fade>
                    <Fade direction="right">
                        <p className="hero_texto">
                            Tu mejor aliado tecnológico
                        </p>
                    </Fade>

                    <Stack spacing={3} direction="row">
                        <ColorButton disableElevation onClick={handleDocs} size='large' variant="contained" className='mx-auto mb-4 btn-standar' endIcon={<MdExpandMore className='ml-2' />}>Leer Curriculum Vitae</ColorButton>
                    </Stack>
                </Navbar>
                {/* Encabezado */}
                {/*<section
                    className='hero_container container'>


    </section>*/}
            </header>

            {/* Bienvenida */}
            <section>
                <section className='containerWP movilBienv p-10'>
                    <div className='bienvenida'>
                        <Fade direction="left">
                            <h1 className='bienvenida_titulo'>Bienvenidos</h1>
                            <p className='bienvenida_texto'>
                                CONTIAR SOLUCIONES S.A. DE C.V. es una empresa mexicana que se creó en el año 2019, con el paso del tiempo hemos
                                desarrollado experiencia, compromiso y pasión por la creación e implementación de proyectos especializados.
                                Nuestra filosofía empresarial se basa en el crecimiento continuo a través de la actualización de nuestros instrumentos de trabajo, es decir, en mantener una
                                visión vanguardista que supera los retos de cada proyecto, con el objetivo de cumplir con las expectativas de nuestros
                                clientes.

                            </p>
                        </Fade>
                    </div>
                    <div className='img_bienvenida' style={{ width: 460 }} >
                        <Image
                            src='/about.jpg'
                            width={460}
                            height={510}
                            layout="responsive"
                            alt='Bienvenida al Contiar Soluciones' />
                    </div>
                    <div className='years'>
                        <div className='year'>
                            <Fade direction="left">
                                <h1 className='year-title'>{year - 2019}</h1>
                                <p className='year-text'>Años de experiencia</p>
                            </Fade>
                        </div>
                    </div>
                </section>
            </section>

            <section className='container_ py-2' >
                <Tabs defaultActiveKey="1" centered items={items} size='large' />
            </section>

            {/* Servicios */}
            <section className='bg-servicios'>
                <section className='containerWP servi'>
                    <h1 className='servicios-titulo'>
                        Soluciones
                    </h1>
                    <div className='tarjetas'>
                        <Suspense fallback={'Loading...'}>
                            {
                                services.map(({ titulo, descrip, icono }, i) => {
                                    return (
                                        <Service
                                            key={i}
                                            titulo={titulo}
                                            descrip={descrip}
                                            icono={icono}
                                        />
                                    )
                                })
                            }
                        </Suspense>
                    </div>
                </section>
            </section>

            {/* Trabajos Recientes */}
            <section>
                <section className='containerWP servi'>
                    <h1 className='trabajos-titulo'>Trabajos Recientes</h1>
                    <div className='tarjetas'>
                        {
                            work.map(({ titulo, src, alt }, i) => {
                                return (
                                    <Work
                                        key={i}
                                        titulo={titulo}
                                        src={src}
                                        alt={alt} />
                                )
                            })
                        }
                    </div>
                </section>
            </section>

            {/* Carousel de clientes */}
            <section>
                <section className='containerWP-2 d-flex flex-column'>
                    <h1 className='clientes-titulo'>Nuestros Clientes</h1>
                    <h3 className='clientes-subtitulo'>Ellos confian en la calidad de CONTIAR SOLUCIONES S.A. DE C.V.</h3>
                    <div className="slider">
                        <div className="slide-track">
                            {
                                imgs.map(({ src, className, width, heigth, alt }, i) => {
                                    return (
                                        <div className='slide' style={{ width: width }} key={i}>
                                            <Image
                                                className={className}
                                                width={width}
                                                height={heigth}
                                                layout="responsive"
                                                src={src}
                                                alt={alt} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </section>

            <section className='certificacion mt-20'>
                <section className='d-flex cert-center flex-column containe'>
                    <h1 className='text-center'>Nuestras Certificaciones</h1>
                    <div className='d-flex cert-center'>
                        {
                            cert.map(({ src, className, alt }, i) => {
                                return (
                                    <img
                                        key={i}
                                        className={className}
                                        src={src}
                                        alt={alt}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </section>

            <ReadDocs
                show={modalDocs}
                onHide={() => setModalDocs(false)}
            />

        </Layout>
    )
}

export default index
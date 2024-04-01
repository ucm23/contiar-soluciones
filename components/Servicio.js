import { Stack } from '@mui/system'
import { Fade } from 'react-awesome-reveal'
import { ColorButton } from '../lib/theme'
import Image from 'next/image'
import { FaEye, FaDownload } from "react-icons/fa";
import React from 'react'

const Servicio = ({ t1, p1, a1, img1, clase, direction, alt, link }) => {
    console.log("🚀 ~ Servicio ~ t1, p1, a1, img1, clase, direction, alt, link:", t1, p1, a1, img1, clase, direction, alt, link)
    return (
        <Fade direction={direction}>
            {/*<article className={clase}>
                <section className="servicio-texto">
                    <h1>{t1}</h1>
                    <p>{p1}</p>
                    {
                        link ? (
                            <a href={a1} target='_blank' className="decoration-none">
                                <Stack spacing={3} direction="row" >
                                    <ColorButton variant="contained" className='mx-auto' endIcon={<FaEye className='ml-2' />}>
                                        Ver Folleto</ColorButton>
                                </Stack>
                            </a>
                        ) : (
                            <a href={a1} download className="decoration-none">
                                <Stack spacing={3} direction="row" >
                                    <ColorButton variant="contained" className='mx-auto' endIcon={<GoCloudDownload className='ml-2' />}>
                                        Descargar Folleto</ColorButton>
                                </Stack>
                            </a>
                        )
                    }
                </section>
                <article className='img-sol'>
                    <Image
                        className='img-sol'
                        width={452}
                        height={320}
                        src={img1}
                        alt={alt}
                        layout="responsive" />
                </article>
                </article>*/}

            <article className={clase}>
                <section className="servicio-texto">
                    <h1>{t1}</h1>
                    <p>{p1}</p>
                    {
                        link ? (
                            <a href={a1} target='_blank' className="decoration-none">
                                <Stack spacing={3} direction="row" >
                                    <ColorButton
                                        variant="contained"
                                        className='mx-auto'
                                        endIcon={React.createElement(FaEye)}
                                        style={{ textTransform: 'none', marginTop: 15, borderRadius: 50, padding: '6px 24px' }}
                                    >
                                        Ver Folleto
                                    </ColorButton>
                                </Stack>
                            </a>
                        ) : (
                            <a href={a1} download className="decoration-none">
                                <Stack spacing={3} direction="row" >
                                    <ColorButton
                                        variant="contained"
                                        className='mx-auto'
                                        endIcon={<FaDownload />}
                                        style={{ textTransform: 'none', marginTop: 15, borderRadius: 50, padding: '6px 24px' }}
                                    >
                                        Descargar Folleto
                                    </ColorButton>
                                </Stack>
                            </a>
                        )
                    }
                </section>

                <article className='img-sol'>
                    <Image
                        className='img-sol'
                        width={452}
                        height={320}
                        src={img1}
                        alt={alt}
                        layout="responsive" />
                </article>
            </article>
        </Fade>
    )
}



export default Servicio
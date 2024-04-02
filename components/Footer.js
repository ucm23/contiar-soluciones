import {FaFacebookSquare,FaPhoneSquareAlt } from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {HiMail} from 'react-icons/hi';
import {MdLocationOn} from 'react-icons/md'
import {AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'
import Link from 'next/link'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Footer = () => {
    const router = useRouter();
    const route = router.pathname;
    const handleAvise = () => router.push("/Privacidad")
    return (
        <footer className='bg-footer'>
            <section className='footer-container'>
                <div className='footer-blocks'>
                    <div className='footer-block block1'>
                        <p className='block1-title'>Contiar Soluciones</p>
                        <div className='icons'>
                        </div>
                    </div>

                    <div className='footer-block block2'>
                        <Link href='/'>
                            <a>Inicio</a>
                        </Link>
                        <Link href='/Nosotros'>
                            <a>Nosotros</a>
                        </Link>
                        <Link href='/Soluciones'>
                            <a>Soluciones</a>
                        </Link>
                        <Link href='/Blog'>
                            <a>Blog</a>
                        </Link>
                        <Link href='/Contacto'>
                            <a>Contacto</a>
                        </Link>
                    </div>

                    <div className='footer-block block3'>
                        <p className='block3-title'>Servicios</p>
                        <p>Ciberseguridad</p>
                        <p>Aplicaciones Propias</p>
                        <p>Propiedad intelectual</p>
                        <p>Centro de ciberseguridad</p>
                        <p>Análisis y diseño de sistemas</p>
                    </div>

                    <div className='footer-block block4'>
                        <p className='block4-title'>Contáctanos</p>

                        <Link href='mailto:luis.ruiz@contiar.mx'>
                            <a target='_blank' className='footer-cen'>
                                <HiMail className='block4-icon' /><p>luis.ruiz@contiar.mx</p>
                            </a>
                        </Link>

                        <Link href='tel:81 81 43 9592'>
                            <a target='_blank' className='footer-cen'><FaPhoneSquareAlt className='block4-icon' /><p>81 81 43 9592 (MTY)</p></a>
                        </Link>
                        <Link href='tel:55 78 592984 (CDMX)'>
                            <a target='_blank' className='footer-cen'><div className='block4-icon' /><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;55 78 592984 (CDMX)</p></a>
                        </Link>

                        <Link href='/Contacto'>
                            <a className='footer-cen'>
                                <MdLocationOn className='block4-icon' />
                                <div className='dir_center'>
                                    <p>Real de San Juan 102, Col. Real de San Jerónimo,</p> 
                                    <p>C.P. 64634, Monterrey, N.L.</p> 
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='footer-derechos'>
                    <p>© { new Date().getFullYear() } CONTIAR SOLUCIONES S.A. DE C.V.</p>
                    <p onClick={handleAvise}>Aviso de Privacidad</p>
                </div>
            </section>
           {/*  <script src="https://account.snatchbot.me/script.js"></script><script>window.sntchChat.Init(270261)</script> */}
        </footer>
    )
}

export default Footer
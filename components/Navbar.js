import Link from 'next/link';
import { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { ColorButton } from '../lib/theme';
import { useRouter } from 'next/router'


import { RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, } from "react-icons/ri";
const icons_ = [RiFolderUserLine, RiBuilding2Line, RiFolderChartLine]

const solutions = [
    {
        name: "Soporte y Mesa de Ayuda",
        description: "Asistencia sobre cuestiones relacionadas con el mantenimiento de hardware, redes y sistemas",
        href: "/help"
    },
    {
        name: "Gestión de REPSE VICTUM RE®",
        description: "Portal de gestión de proveedores integrado con ERP",
        href: "/Repse"
    },


    {
        name: "VICTUM METRIX®",
        description: "Impulsa el crecimiento individual y colectivo",
        href: "/metrix"
    }
]

const Navbar = ({ children }) => {

    const [estoyMovil, seteEstoyMovil] = useState(false)

    return (
        estoyMovil ? (
            <Bar
                temp={true}
                seteEstoyMovil={seteEstoyMovil}
            >
                {children}
            </Bar>
        ) : (
            <Fade direction="down">
                <Bar
                    temp={false}
                    seteEstoyMovil={seteEstoyMovil}
                >
                    {children}
                </Bar>
            </Fade>
        )
    )
}

const Bar = ({ seteEstoyMovil, temp, children }) => {

    const { push } = useRouter();

    const [navMobile, setNavMobile] = useState(temp)
    const [showSubMenu1, setShowSubMenu1] = useState(false)

    const handleNav = () => {
        setNavMobile(!navMobile)
        seteEstoyMovil(!navMobile)
    }
    const handleSubMenu1 = () => setShowSubMenu1(!showSubMenu1)

    const handleClick = () => push('/Soluciones');

    return (
        <>
            <nav className={`nav container ${showSubMenu1 && "bg-whites"}`}>
                <div className={`w-90`}>

                    <Link href="/">
                        <a className="nav_logo">
                            <img className='logo_cti' src='/logo.png' alt='Logo Contiar Soluciones' />
                            {/*<p className={`nav_title ${showSubMenu1 && "bg-gray"}`}>Consultores en Sistemas de Tráfico e ITS</p>*/}
                        </a>
                    </Link>
                    {/*<p className={`title_desc ${showSubMenu1 && "bg-gray"}`}>Consultores en Sistemas de Tráfico e ITS</p>*/}
                    <ul className={navMobile ? 'nav_mobile nav__link--show' : 'nav_link nav_link_menu'} >
                        <img onClick={handleNav} src="/close.svg" className="nav_close" alt='Cerrar Navbar de Contiar Soluciones' />
                        <li className="nav_items">
                            <Link href="/">
                                <a className={`nav_links ${showSubMenu1 && "bg-gray"}`}>Inicio</a>
                            </Link>
                        </li>
                        <li className="nav_items">
                            <Link href="/Nosotros" >
                                <a className={`nav_links ${showSubMenu1 && "bg-gray"}`}>Nosotros</a>
                            </Link>
                        </li>
                        {/*<li className="nav_items">
                    <Link href="/Soluciones">
                        <a className="nav_links">Soluciones</a>
                    </Link>
    </li>*/}
                        <li className="nav_items">
                            <a className={`nav_links ${showSubMenu1 && "bg-gray"}`} onClick={handleSubMenu1}>Soluciones <span className="arrow-down">{!showSubMenu1 ? "▼" : "▲"}</span></a>
                            <ul className={showSubMenu1 ? "submenu-solutions" : "hidden"}>
                                <div className='submenu-part-1'>
                                    <h1 className='submenu-title'>Soluciones</h1>
                                    <h1 className='submenu-sub-title'>Explorar una amplia gama de soluciones personalizadas y bien adaptadas a tu necesidad</h1>
                                    <ColorButton disableElevation onClick={handleClick} size='small' variant="contained" className='btn-standar' >Explorar más...</ColorButton>
                                </div>
                                <div>
                                    <div className='submenu-part-2'>
                                        <div className='submenu-list'>
                                            {solutions.map((item, index) => {
                                                const Icon_ = icons_[index];
                                                return (
                                                    <li key={`href-${item?.href}-${index}`} className="nav_items_">
                                                        <Link href={item?.href}>
                                                            <div className='href-menu-item'>
                                                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg" style={{ /*backgroundColor: 'gray'*/ }}>
                                                                        {Icon_ && <Icon_ fontSize={20} aria-hidden="true" />}
                                                                    </div>
                                                                </dt>
                                                                <div className='href-menu-item-txt'>
                                                                    <a className="nav_links__">{item?.name}</a>
                                                                    <h1 className='submenu-sub-title'>{item?.description}</h1>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav_items">
                            <Link href="/Blog">
                                <a className={`nav_links ${showSubMenu1 && "bg-gray"}`}>Blog</a>
                            </Link>
                        </li>
                        <li className="nav_items">
                            <Link href="/Contacto">
                                <a className={`nav_links ${showSubMenu1 && "bg-gray"}`}>Contacto</a>
                            </Link>
                        </li>

                    </ul>

                    <div
                        className='nav_menu'
                        onClick={handleNav}>
                        <img src="/menu.svg" className="nav_img" alt='Menu hamburgesa el Navbar' />
                    </div>
                </div>
            </nav>
            <section className="hero_container container">
                {children}

            </section>

        </>
    )
}

export default Navbar
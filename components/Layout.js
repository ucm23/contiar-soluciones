import Head from 'next/head';
import NProgress from 'nprogress';
import Footer from './Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FloatButton } from 'antd';
import ChatBot from 'react-simple-chatbot'
//import { GiftedChat } from 'react-web-gifted-chat';

import { RobotOutlined } from '@ant-design/icons';

import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";

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
                <meta name="title" content="Grupo CTI Tech-IN POS" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Grupo CTI Tech-IN POS es una empresa que se creo en el año 2001 con el objetivo de vender Hardware, Software y Servicios de Tecnología" />
                <link rel="icon" type="image/x-icon" href="/ico.ico"></link>
                <title>Grupo CTI</title>
            </Head>
            <main>
                {children}
                <FloatButton
                    icon={<RobotOutlined />}
                    shape="circle"
                    //shape="circle" 
                    badge={{ dot: true }}
                    onClick={handleViewChat}
                    //type="primary"
                    style={{ right: 10 }}
                    tooltip={<div>Salir</div>}
                    className={!viewChat ? "display-chat" : "display-chat.view"}
                />

                <div className={`chat-bot ${viewChat ? "display-chat" : "display-chat.view"}`}>
                    <div style={{ position: "relative", height: 500, left: 0 }}>
                        <div className='main-container-chat'>
                            <div className='chat-header'>
                                <h1>CTIBot</h1>
                                <h1 onClick={handleViewChat}>-</h1>
                            </div>
                            <div className='chat-container-messages'>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                                <h1>hshs</h1>
                            </div>
                            <div className='chat-input'>
                                <input type="textarea" class="input-chat" placeholder="Type the message ..." />
                                <button class="sc-chPdSV hiexti rsc-submit-button btn-chat">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 500 500">
                                        <g>
                                            <g>
                                                <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75">
                                                </polygon>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>

                    {/*<ChatBot
                        steps={[
                            {
                                id: "1",
                                message: "Hola ¿Cual es su correo electronico?",
                                trigger: "2"
                            },
                            {
                                id: "2",
                                user: true,
                                validator: (value) => {
                                    if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                        return true;
                                    }
                                    else {
                                        return 'Valide su correo electronico';
                                    }
                                },
                                trigger: "3"
                            },
                            {
                                id: "3",
                                message: "Hola {previousValue}, un gusto saludarte",
                                trigger: "4"
                            },
                            {
                                id: "4",
                                message: "¿Eres cliente?",
                                trigger: "5"
                            },
                            {
                                id: "5",
                                options: [
                                    { value: "y", label: "Si", trigger: "6A" },
                                    { value: "n", label: "No", trigger: "6B" },
                                ]
                            },
                            {
                                id: "6A",
                                message: "Soy cliente vigente",
                                trigger: "seleccion"
                            },
                            {
                                id: "6B",
                                message: "¿Qué información requiere?",
                                end: true
                            },
                            {
                                id: "seleccion",
                                options: [
                                    { value: "f", label: "Solicitar una función nueva", trigger: "7A" },
                                    { value: "b", label: "Reportar incidentes", trigger: "7B" },
                                ]
                            },
                            {
                                id: "7A",
                                message: "¿En qué rubro desea reportar?",
                                trigger: "seleccionFront"
                            },
                            {
                                id: "7B",
                                message: "¿En qué rubro desea solicitar una función nueva?",
                                trigger: "seleccionBack"
                            },
                            {
                                id: "seleccionFront",
                                options: [
                                    { value: "Angular_(framework)", label: "Ciberseguridad", trigger: "7B" },
                                    { value: "React", label: "Grupo Dragón", trigger: "7B" },
                                    { value: "Vue.js", label: "Grupo Ticonsa", trigger: "7B" },
                                ]
                            },
                            {
                                id: "seleccionBack",
                                options: [
                                    { value: "Spring_Framework", label: "Ciberseguridad", trigger: "7B" },
                                    { value: "Laravel", label: "Grupo Dragón", trigger: "7B" },
                                    { value: ".NET_Core", label: "Grupo Ticonsa", trigger: "7B" },
                                ]
                            }

                        ]}
                    />*/}
                </div>
            </main>
            <Footer />



        </>
    )
}

export default Layout
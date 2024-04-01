import React, { useState } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { Fade } from 'react-awesome-reveal'
import LoginForm from '../components/login/LoginForm'
import AddBlog from '../components/login/AddBlog'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FloatButton } from 'antd'

const pass = "gdOf3Jv2UvsAv2Yf"

import { BrowserRouter } from "react-router-dom";
import Router from '../components/login/Router'

const Login = () => {
    const [Auth, setAuth] = useState(false)
    const [storedItem, setStoredItem] = useState("")
    const router = useRouter();

    useEffect(() => {
        let value
        value = localStorage.getItem('8FxVPKskluR7opVa') || ""
        setStoredItem(value)
    }, [])

    const logout = () => {
        localStorage.removeItem("8FxVPKskluR7opVa");
        router.push("/");
    }

    return (
        <header className=''>
            <section className="">
                {(storedItem !== pass && !Auth) ?
                    <LoginForm setAuth={setAuth} />
                    : <>
                        <BrowserRouter>
                            {/*<AddBlog />*/}
                            <Router />
                        </BrowserRouter>

                        {/*<FloatButton
                            shape="circle"
                            onClick={logout}
                            type="primary"
                            style={{ right: 94 }}
                            tooltip={<div>Salir</div>}
                />*/}
                    </>
                }
            </section>
        </header>
    )
}

export default Login
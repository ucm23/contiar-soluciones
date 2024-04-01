import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../lib/useAuth'
import { useRouter } from 'next/router'

const LoginForm = ({ setAuth }) => {
    const [User, setUser] = useState({
        email: "",
        password: ""
    })

    const handleVerify = () => {
        if (User.email === "123" && User.password === "123") {
        // if (User.email === "guillerminasamano@yahoo.com.mx" && User.password === "G1raf@23") {
            setAuth(true)
            localStorage.setItem('8FxVPKskluR7opVa', 'gdOf3Jv2UvsAv2Yf');
            //name - valor
        }
    }

    const HandleInputChange = e => {
        const { name, value } = e.target;

        setUser({
            ...User,
            [name]: value
        })
    }

    return (
        <div className="form-box">
            <form className="form">
                <span className="title">Iniciar sesión</span>
                <div className="form-container">
                    <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Email"
                        onChange={HandleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Contraseña"
                        onChange={HandleInputChange}
                    />
                </div>
                <button type='button' onClick={handleVerify}>Entrar</button>
            </form>
        </div>
    )
}

export default LoginForm
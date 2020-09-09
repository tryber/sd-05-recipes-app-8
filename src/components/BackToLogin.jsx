import React from 'react'
import { Link } from 'react-router-dom'

const BackToLogin = () => {
    return (
        <Link to="/">
            <button>Voltar ao Início</button>
        </Link>
    )
}

export default BackToLogin;
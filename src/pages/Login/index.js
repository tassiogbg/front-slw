import React from "react";
import './login.css';

const Login = () => {
    return (
        <body>
            <div class='container'>
                <div class='login-box'>
                    <div class='login-logo'>
                    </div>
                    <div class='label-float'>
                        <label for='usuario'>Usuário</label>
                        <input type='text' id='usuario' placeholder='E-mail' />
                    </div>
                    <div class='label-float'>
                        <label for='senha'>Senha</label>
                        <input type='password' id='senha' placeholder='Senha' />

                    </div>
                    <div class='justify-center'>
                        <button>Entrar</button>
                    </div>
                    <div class='justify-center'>
                        <hr />
                    </div>
                    <p>Não tem uma conta? <a href=''>Cadastre-se</a>
                    </p>
                </div>
            </div>
        </body>
    )
}

export default Login;
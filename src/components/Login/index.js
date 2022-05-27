import React, { useState } from "react";
import './style.css';
import LogoTipo from '../assets/img/LogoCliente.png';
import Email from '../assets/img/sinal-de-arroba.png'
import Senha from '../assets/img/olho-aberto.png'
import Prime from '../assets/img/Prime.png'

export const Login = () =>{

    const [viewPassword, setViewPassword] = useState(false);

        let type;
        viewPassword?type = "text":type = "password";

        console.log(viewPassword, type);
    return(
        <div className="container-login">
            <div className="background-login">
               <h2 className="subtitle-login">corretagem de armazenamento de cargas</h2>
            </div>

            <div className="form-login-black">
                <figure className="logoPorto">
                    <img className="Logo" src={LogoTipo} alt="logo"/>
                </figure>

                <form className="form-login">
                    <h1>Faça seu login
                       <br/>
                        na plataforma!
                    </h1>
                    <div className="form-input">
                        <div className="input_icon">
                            <label>
                                <img className="Icon_Email" src={Email} alt="Icon-email"/>
                            </label>
                            <input type="email" placeholder="E-mail"/>
                        </div>
                        <div className="input_icon">
                            <label>
                                <img className="Icon_senha" id="Icon_senha" src={Senha} alt="Icon-senha" onClick={()=>setViewPassword(!viewPassword)}/>
                            </label>
                            <input type={type} placeholder="Senha" className="Senha_input"/>
                        </div>
                        
                    </div>
                    <a href="/esqueciminhasenha">Esqueci minha senha</a>
                    <div className="button-enviar">
                        <button type="submit">Enviar</button>
                    </div>
                </form>

                <div className="cadastro-link">
                    <a href="/">Não tem cadastro? Cadastre-se aqui!</a>
                </div>

                <div className="logo-prime-rodape">
                    <img className="prime" src={Prime} alt="PrimeLogo"/>
                </div>
            </div>
        </div>
    )
}


import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoNeki from "../../Assets/Logo-Neki.png";
import "../Login/form.css";
import "../Login/header.css";
import "../Login/login-container.css";
import "../Login/reset.css";

export function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function moveOverlay() {
    document.getElementById("login-container").classList.toggle("move");
  }

  return (
    <>
      <body>
        <div className="header-login-container">
          <nav>
            <p>line</p>
              <img className="header-user-img" src={LogoNeki} alt="Logo User" />
            <p>line</p>
          </nav>
        </div>
        <main>
          <div className="login-container" id="login-container">
            <div className="form-container">
              <form className="form form-login">
                <h2 className="form-title">Login</h2>
                <div className="form-social">
                  <a href="#" className="social-icon">
                    <i className="fa fa-github"></i>
                    <p>GitHub</p>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fa fa-linkedin"></i>
                    <p>Linkedin</p>
                  </a>
                </div>
                <p className="form-text">Entre com seus dados</p>
                <div className="form-input-container">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Login"
                    onChange={(e) => setLogin(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  id="login-verify"
                  type="button"
                  className="form-button"
                  // onClick={(e) => {
                  //     logar(e);
                  //   }}
                >
                  Login
                </button>
                <p className="mobile-text">
                  Não possui uma conta?
                  <a
                    id="open-register-mobile"
                    href="#"
                    onClick={() => moveOverlay()}
                  >
                    Cadastre-se
                  </a>
                </p>
              </form>
              <form className="form form-register">
                <h2 className="form-title">Cadastre-se</h2>
                <p className="form-text">Preencha seus dados</p>
                <div className="form-input-container">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Login"
                    onChange={(e) => setLogin(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Confirm Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="form-button"
                  //   onClick={(e) => {
                  //     cadastrar(e);
                  //   }
                  // }
                >
                  Cadastrar
                </button>
                <p className="mobile-text">
                  Você possui uma conta?
                  <a
                    id="open-login-mobile"
                    href="#"
                    onClick={() => moveOverlay()}
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <h2 className="form-title form-title-light">
                  Você possui uma conta?
                </h2>
                <p className="form-text">
                  Você precisa logar com suas informações
                </p>
                <button
                  className="form-button form-button-light"
                  id="open-login"
                  onClick={() => moveOverlay()}
                >
                  Login
                </button>
              </div>
              <div className="overlay">
                <h2 className="form-title form-title-light">Cadastro!</h2>
                <p className="form-text">Será um prazer ter você conosco!</p>
                <button
                  className="form-button form-button-light"
                  id="open-register"
                  onClick={() => moveOverlay()}
                >
                  Cadastro
                </button>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

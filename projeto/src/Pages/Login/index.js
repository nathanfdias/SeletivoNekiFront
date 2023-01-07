import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import LogoNeki from "../../Assets/Logo-Neki.png";
import "../Login/form.css";
import "../Login/header.css";
import "../Login/login-container.css";
import "../Login/reset.css";

import axios from "axios";
import { UserContext } from "../../context/auth";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();
  const { login, setChecked, setToken } = useContext(UserContext);


  const handleClickShowPassword = (e) => {
    e.preventDefault();
    if (showPassword === false) {
      setShowPassword(true);
    } 
    
    if (showPassword === true) {
      setShowPassword(false);
    }
  }

  const handleChangeCheck = (e) => {
    const { checked } = e.target;

    if (checked) {
      setChecked(true);
    }
  };

  function moveOverlay() {
    document.getElementById("login-container").classList.toggle("move");
  }

  function logar(e) {
    // e.preventDefault();
    axios
      .post(`http://localhost:8080/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
          login(username, password);
          setToken(response.data.token);
          toast.success("Login realizado com sucesso!");
          setTimeout(() => {
            navigate("/home");
          }, 1000)
      })
      .catch((error) => {
        console.log(error);
        toast.warning("Espaços vazios ou inválidos");
      });
  }

  function cadastrar(e){
    if(password === confirmPassword ){
      axios
        .post("http://localhost:8080/user/cadastrar", {
          username: username,
          password: password,
        })
        .then((response) => {
          console.log(response);
          toast.success('Usuário cadastrado com sucesso!');
        })
        .catch((error) => {
          console.log(error);
          toast.warning('Espaços vazios ou inválidos');
        });
    } else {
      toast.warning('Senhas inválidas');
    }
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
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="form-input-content-password">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-input-password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="showvisibility" onClick={(e) => handleClickShowPassword(e)}>
                      <i className="fa fa-eye"></i>
                    </button>
                  </div>
                  <div className="checkbox-remember">
                    <input type="checkbox" id="check" name="check" onChange={handleChangeCheck}/>
                    <label for="check">Lembrar de mim</label>
                  </div>
                </div>
                <button
                  id="login-verify"
                  type="button"
                  className="form-button"
                  onClick={(e) => {
                    logar(e);
                  }}
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
                    onChange={(e) => setUsername(e.target.value)}
                  />
<div className="form-input-content-password">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-input-password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="showvisibility" onClick={(e) => handleClickShowPassword(e)}>
                      <i className="fa fa-eye"></i>
                    </button>
                  </div>
                  <div className="form-input-content-password">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-input-password"
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className="showvisibility" onClick={(e) => handleClickShowPassword(e)}>
                      <i className="fa fa-eye"></i>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="form-button"
                    onClick={(e) => {
                      cadastrar(e);
                    }
                  }
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

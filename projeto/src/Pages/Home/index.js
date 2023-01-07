import React,{useState, useContext, useEffect} from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { UseAPI } from "../../services/api";
import { toast } from "react-toastify";
import "../Home/index.css";
import axios from "axios";
import { UserContext } from "../../context/auth";
import { Popup } from "../../components/popup/index.js";

export function Home() {
  const { data } = UseAPI(`http://localhost:8080/userskill`);
  const {user} = useContext(UserContext);
  const [popup, setPopup] = useState(false);
  const [errorS, setErrorS] = useState(null);
  const [aux, setAux] = useState(true);
  const [idUserSkill, setIdUserSkill] = useState(0);
  const [knowledgeLevel, setKnowledgeLevel] = useState(0);
  const [idSkill, setIdSkill] = useState(0);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const deletarUserSkill = (idUserSkill) => {
    axios
      .delete(`http://localhost:8080/userskill/${idUserSkill}`)
      .then((response) => {
        setResponse(response.status);
      })
      .catch((error) => {
        setErrorS(error);
      })
      .finally(() => {
        refresh();
      });
  };

  function handleSetValues(userSkill){
    setIdUserSkill(userSkill?.id)
    setPopup(true)
    setAux(false)
    setIdSkill(userSkill?.skill?.id)
  }


  //Valores substituidos no Back: createdAT, etc...
  function atualizarUserSkill() {
    axios
      .put(`http://localhost:8080/userskill/${idUserSkill}`, 
        {
          "createdAt": "2023-01-06T23:52:44.727Z",
          "id": 0,
          "knowledgeLevel": knowledgeLevel,
          "skill": {
            "description": "string",
            "id": idSkill,
            "image_url": "string",
            "name": "string",
            "userSkill": [
              null
            ],
            "version": "string"
          },
          "updatedAt": "2023-01-06T23:52:44.727Z",
          "user": {
            "id": user,
            "lastLoginDate": "2023-01-06",
            "password": "string",
            "userSkill": [
              null
            ],
            "username": "string"
          }
        }
      )
      .then((response) => {
        toast.success("Level Atualizado com sucesso!");
        setPopup(false);
        setTimeout(() => {
          setAux(true);
        },2000)
        
        console.log(aux);
      })
      .catch((error) => {
        toast.warning("Erro ao Atualizar");
      })
  }

  const refresh = () => {
    window.location.reload();
  };

  // useEffect(() => {
  //   axios
  //   .get(`http://localhost:8080/userskill`)
  //   .then((response) => {
  //     setData(response.data);
  //   })
    
  // },[]);

  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="home-boxes-container">
          {data?.map((userSkill) => {
              console.log(userSkill.user.id)
              return (
                <div className="home-itens-map">
                  <div className="home-skill-box-title">
                    <p>Skill: {userSkill?.skill?.name}</p>
                    <p>Version: {userSkill?.skill?.version}</p>
                    <p>Level: {userSkill?.knowledgeLevel}</p>
                  </div>
                  <img
                    className="skill-image"
                    src={userSkill?.skill?.image_url}
                  ></img>
                  <button className="skill-box-button" onClick={() => handleSetValues(userSkill)}>
                    Level Edit
                  </button>
                  <button className="skill-box-button" onClick={() => deletarUserSkill(userSkill.id)} >Delete Skill</button>
                </div>
                
              );
          })}
          <Popup trigger={popup} setTrigger={setPopup}>
          <div className="form-edit-perfil-popup-content">
            <input
              className="input-edit-level-home"
              placeholder="Digite o Level 1-10"
              type="number"
              onChange={(e) => setKnowledgeLevel(e.target.value)}
            />
            <button
              className="button-edit-level-home"
              onClick={() => atualizarUserSkill()}
            >
              Enviar
            </button>
          </div>
        </Popup>
        </div>
      </div>
    </>
  );
}

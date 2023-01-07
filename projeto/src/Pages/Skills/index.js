import axios from "axios";
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { UserContext } from "../../context/auth";
import { toast } from "react-toastify";
import "../Skills/skills.css";

export function Skills() {
    const [skills,setSkills] = useState([])
    const {user} = useContext(UserContext);

      const navigate = useNavigate();

    const [skillInfo, setSkillInfo] = useState({
        skills: [],
        response: [],
      });
      
      const handleChange = (e) => {
        const { value, checked } = e.target;
        const { skills } = skillInfo;

        
        if (checked) {
            setSkillInfo({
            skills: [...skills, value],
            response: [...skills, value],
          });
          console.log(value)
        }
      
        else {
            setSkillInfo({
            skills: skills.filter((e) => e !== value),
            response: skills.filter((e) => e !== value),
          });
        }
      };

      const cadastraSkillsUser = () => {

        if (skillInfo && skillInfo.response) {
          skillInfo.response.map((ids) => {
            axios
            .post(`http://localhost:8080/userskill/cadastrar`, {
              "createdAt": "2023-01-06T23:03:38.941Z",
              "id": 0,
              "knowledgeLevel": 0,
              "skill": {
                "description": "string",
                "id": ids,
                "image_url": "string",
                "name": "string",
                "userSkill": [
                  null
                ],
                "version": "string"
              },
              "updatedAt": "2023-01-06T23:03:38.941Z",
              "user": {
                "id": user,
                "lastLoginDate": "2023-01-06",
                "password": "string",
                "userSkill": [
                  null
                ],
                "username": "string"
              }
            })
              .then((res) => {
                toast.success("Skill Adicionada");
                setTimeout(() => {
                  navigate("/home");
                }, 1000)
            })
            .catch((error) => {
              console.log(error);
              toast.warning("Error ao adicionar");
            });
        });
        }
      };

      useEffect(() => {
        axios.get("http://localhost:8080/skill").then((res) => {
            console.log(res)
            setSkills(res.data)
        })
      },[])
return (
    <>
    <div className='skills-container'>
        <Navbar />
        <div className='skills-box-container'>
            <div className='skills-map'>
                <div className="form-input-container-skills">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Pesquise as Skills"
                        //onChange={(e) => setUsername(e.target.value)}
                    />
                    <Link className="create-skill-button" to="/skillcreate">
                      Criar Nova Skill
                    </Link>
                </div>
                 {skills?.map((skill,index) => ( 
                    <div className="card-skills-container" key={index}>
                        <div className="img-container">
                            <img className="skill-image" src={skill.image_url} alt="" />
                        </div>
                        <div className="text-container">
                            <h2>{skill.name}</h2>
                            <p>Version: {skill.version}</p>
                            <p>{skill.description}</p>
                        </div>
                        <div className="input-checkbox">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="languages"
                        value={skill?.id}
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                    </div>
                    </div>
                ))} 
                <button className="skills-new-skill-container" onClick={cadastraSkillsUser}>Adicionar Skills</button>
            </div>
        </div>
    </div>
</>
);
}
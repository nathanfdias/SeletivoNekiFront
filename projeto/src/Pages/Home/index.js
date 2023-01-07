import React from "react";
import Navbar from "../../components/Navbar";
import { UseAPI } from "../../services/api";
import "../Home/index.css";

export function Home() {
  let idLogin = JSON.parse(localStorage.getItem("user"));
  const { data } = UseAPI(`http://localhost:8080/userskill`);

  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="home-boxes-container">
          {data?.map((userSkill) => {
            console.log(data);
            return (
              <div className="home-itens-map">
                <div className="home-skill-box-title">
                  <p>Skill: {userSkill?.skill?.name}</p>
                  <p>Level: {userSkill?.knowledgeLevel}</p>
                </div>
                <img
                  className="skill-image"
                  src={userSkill?.skill?.image_url}
                ></img>
                <button className="skill-box-button">Level Edit</button>
                <button className="skill-box-button">Delete Skill</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

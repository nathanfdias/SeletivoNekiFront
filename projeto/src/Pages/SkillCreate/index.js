import React, { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar";
import "../SkillCreate/skillCreate.css";

import axios from "axios";

import { useNavigate } from "react-router-dom";

export function SkillCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [version, setVersion] = useState("");

  const navigate = useNavigate();

  function adicionar(e) {
    e.preventDefault();
    console.log("Adicionar Ativado");

    axios
      .post(`http://localhost:8080/skill/cadastrar`, {
        description: description,
        image_url: imageURL,
        name: name,
        version: version,
      })
      .then((response) => {
        console.log(response);
        toast.success("Skill criada com sucesso!");
        navigate("/skills");
      })
      .catch((error) => {
        toast.warning("Espaços vazios ou inválidos");
      });
  }

  return (
    <>
      <div className="skills-container">
        <Navbar />
        <div className="form-add-skill">
          <form className="form-add-skill-container" onSubmit={adicionar}>
            <h2>Create Skill</h2>
            <div className="input-container-create-skill">
              <input
                className="input-skill-create"
                type="text"
                placeholder="Skill Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="input-skill-create"
                type="text"
                placeholder="Version"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
              />
              <input
                className="input-skill-create"
                type="text"
                placeholder="URL image"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
              />

              <h4 className="skill-create-mensage-title">Description:</h4>

              <textarea
                className="textarea"
                placeholder="Skill description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <input
              className="button-feed-enviar"
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
      </div>
    </>
  );
}

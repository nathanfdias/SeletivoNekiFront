import React from 'react';
import Navbar from '../../components/Navbar';
import { UseAPI } from '../../services/api';

import "../Skills/skills.css";

export function Skills() {
    const { data, carregando } = UseAPI(`http://localhost:8080/skills`);
 return (
   <>
    <div className='skills-container'>
        <Navbar />
        <div className='skills-box-container'>
            <div className='skills-map'>
                {/* {data?.map((skill) => {
                    return ( */}
                        <div className='skills-box-content'>
                            <div className='skills-box-title'>
                                <p>Skill: HTML</p>
                                <p>Version: 5</p>
                            </div>
                            <img className="skill-image" src={"https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"}></img>
                            <p className='skills-box-descript'>Linguagem de marcação front end</p>
                            <button className='skill-box-button'>Adicionar Skill</button>
                        </div>
                        <div className='skills-box-content'>
                            <div className='skills-box-title'>
                                <p>Skill: HTML</p>
                                <p>Version: 5</p>
                            </div>
                            <img className="skill-image" src={"https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"}></img>
                            <p className='skills-box-descript'>Linguagem de marcação front end</p>
                            <button className='skill-box-button'>Adicionar Skill</button>
                        </div>
                        <div className='skills-box-content'>
                            <div className='skills-box-title'>
                                <p>Skill: HTML</p>
                                <p>Version: 5</p>
                            </div>
                            <img className="skill-image" src={"https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"}></img>
                            <p className='skills-box-descript'>Linguagem de marcação front end</p>
                            <button className='skill-box-button'>Adicionar Skill</button>
                        </div>
                    {/* ); */}
                {/* })} */}
            </div>
            <div className='skills-new-skill-container'>
                <button>
                    Criar Nova Skill
                </button>
            </div>
        </div>
    </div>
   </>
  );
}
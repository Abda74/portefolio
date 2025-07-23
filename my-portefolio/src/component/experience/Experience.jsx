import React from 'react';
import Title from "../Title.jsx";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import node from "../../assets/nodejs.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongo.png";

import tradingbets from "../../assets/tradingbets.png";
import linfomed from "../../assets/linfomed.png";
import solistech from "../../assets/solistech.jpg";


const skills = [
    {
        id: 1,
        name: "HTML",
        image: html, // Ex: public/assets/html.png
    },
    {
        id: 2,
        name: "CSS",
        image: css,
    },
    {
        id: 3,
        name: "JavaScript",
        image: javascript,
    },
    {
        id: 4,
        name: "TailwindCSS",
        image: tailwind,
    },
    {
        id: 5,
        name: "React",
        image: react,
    },
    {
        id: 6,
        name: "Node.js",
        image: node,
    },
    {
        id: 7,
        name: "Express",
        image: express,
    },
    {
        id: 8,
        name: "MongoDB",
        image: mongodb,
    },
];



// tableau des expériences
const experiences = [
    {
        id: 1,
        role: "Développeur Web Full Stack, Freelance",
        company: "TradingBets",
        periode: "Janvier 2025 - Août 2025",
        description: [
            "Développement d'applications web de trading avec React, Node.js et MongoDB. " ,
            " Intégration d’API et optimisation des performances.",
        ],
        image: tradingbets,
    },
    {
        id: 2,
        role: "Développeur Web Full Stack",
        company: "LINFOMED",
        periode: "Février 2025 - Présent",
        description:[
            "Participation au développement de l’application APURMED avec React.js, Node.js, MongoDB, PouchDB." ,
            " Fonctionnalités offline/online avec synchronisation automatique.",
        ],
        image: linfomed,
    },
    {
        id: 3,
        role: "Développeur Frontend",
        company: "Solistech",
        periode: "2021 - Aujourd’hui",
        description:[
            "Développement d’interfaces utilisateur réactives avec React.js et Tailwind CSS pour diverses plateformes clients.",
        ],
        image: solistech,
    },
];


const Experience = () => {
    return (
        <div className="flex flex-col  justify-center items-center" id="Experience">
            <Title title="Experience" />
            <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
                <div className="grid grid-cols-4 md:flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill, index) => (
                        <div key={skill.id} className="flex flex-col justify-center items-center gap-2 ">

                            <div className="md:w-24 md:h-24 w-16 h-16  p-2 rounded-full border-2 border-blue-500">
                                <img src={skill.image} alt="image language" className="object-cover rounded-full h-full w-full" />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>

                        </div>
                    ))}
                </div>
                <div className="md:ml-4 flex flex-col space-y-4">
                    {
                        experiences.map((experience) => (
                            <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg  ">
                                <div className="flex flex-col items-center md:flex md:flex-row gap-2">
                                    <img src={experience.image} alt={experience.company} className="object-cover rounded-full h-16 w-16 border-4 border-blue-500" />
                                    <div className="ml-4 ">
                                        <h1 className="text-xl text-blue-500">
                                            {experience.role}, {experience.company}
                                        </h1>
                                        <span className="text-sm">{experience.periode}</span>
                                    </div>
                                </div>
                                <ul className=" mt-2 list-none mx-4 ">
                                    {
                                        experience.description.map((description, index) => (
                                            <li key={index}>{description}</li>
                                        ))
                                    }
                                </ul>
                            </div>

                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Experience;
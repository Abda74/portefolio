import React from 'react';
import Title from "../Title.jsx";

import apurmed from "../../assets/linfomed.png";
import pay2bet from "../../assets/tradingbets.png";
import portfolio from "../../assets/abdala.png";
import solistech from "../../assets/solistech.jpg";
import tradingbets from "../../assets/tradingbets.png";
import taskmanager from "../../assets/linfomed.png";
import { Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "APURMED",
        description:
            "Application web de gestion de prescriptions médicales avec synchronisation offline/online, développée pour LINFOMED.",
        technologie: ["React", "Node.js", "MongoDB", "PouchDB"],
        demoLink: "https://apurmed-demo.vercel.app",
        repoLink: "https://github.com/abdala/apurmed",
        image: apurmed,
    },
    {
        id: 2,
        title: "Pay2BET",
        description:
            "Plateforme intermédiaire pour dépôts et retraits sur des sites de paris comme 1xbet ou Betwinner, avec gestion de portefeuille et commissions.",
        technologie: ["React", "Express", "Firebase", "MongoDB"],
        demoLink: "https://pay2bet.vercel.app",
        repoLink: "https://github.com/abdala/pay2bet",
        image: pay2bet,
    },
    {
        id: 3,
        title: "Mon Portfolio",
        description:
            "Site personnel responsive présentant mes projets, compétences et expériences professionnelles.",
        technologie: ["React", "Tailwind CSS", "Vite"],
        demoLink: "https://abdala.vercel.app",
        repoLink: "https://github.com/abdala/portfolio",
        image: portfolio,
    },
    {
        id: 4,
        title: "Site Web Solistech",
        description:
            "Site vitrine réalisé pour Solistech, présentant leurs services informatiques.",
        technologie: ["HTML", "CSS", "JavaScript"],
        demoLink: "https://solistech.com",
        repoLink: "https://github.com/abdala/solistech-site",
        image: solistech,
    },
    {
        id: 5,
        title: "TradingBets",
        description:
            "Plateforme de paris sportifs avec système d'inscription, dépôt et historique des mises.",
        technologie: ["React", "Node.js", "MongoDB", "Firebase"],
        demoLink: "https://tradingbets.vercel.app",
        repoLink: "https://github.com/abdala/tradingbets",
        image: tradingbets,
    },
    {
        id: 6,
        title: "Gestionnaire de Tâches",
        description:
            "Application pour organiser les tâches quotidiennes, marquer comme terminées, filtrer, modifier et supprimer.",
        technologie: ["React", "Tailwind", "LocalStorage"],
        demoLink: "https://taskmanager-abdala.vercel.app",
        repoLink: "https://github.com/abdala/taskmanager",
        image: taskmanager,
    },
];


const Project = () => {
    return (
        <div className="" id="Project" >
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-2">
                {
                    projects.map((projet)=> (
                        <div key={projet.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                            <img src={projet.image} alt={projet.title} className="w-full h-36 rounded-xl object-cover" />
                            <div>
                                <h1 className="my-2 font-bold">
                                    {
                                        projet.title
                                    }
                                </h1>
                                <p className='text-sm'>{projet.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 my-3">{projet.technologie.map((tech)=>(
                                <span className="badge bg-blue-500">
                                    {tech}
                                </span>
                            ))}
                            </div>
                            <div className="flex flex-wrap gap-2 my-3">
                                <a href={projet.demoLink}>
                                    <button className="btn gap-2 bg-white text-blue-500 w-2/3 ml-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                                        </svg>
                                        Demo
                                    </button>

                                </a>
                                <a href={projet.repoLink} className="btn bg-base-300 w-1/3 ">
                                   <Github/>

                                </a>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default Project;
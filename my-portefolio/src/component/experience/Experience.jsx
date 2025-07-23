import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from "../Title.jsx";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import node from "../../assets/nodejs.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongo.png";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        id: 1,
        name: "HTML",
        image: html,
        color: "from-orange-400 to-red-500",
    },
    {
        id: 2,
        name: "CSS",
        image: css,
        color: "from-blue-400 to-indigo-500",
    },
    {
        id: 3,
        name: "JavaScript",
        image: javascript,
        color: "from-yellow-400 to-orange-500",
    },
    {
        id: 4,
        name: "TailwindCSS",
        image: tailwind,
        color: "from-cyan-400 to-blue-500",
    },
    {
        id: 5,
        name: "React",
        image: react,
        color: "from-blue-400 to-cyan-500",
    },
    {
        id: 6,
        name: "Node.js",
        image: node,
        color: "from-green-400 to-emerald-500",
    },
    {
        id: 7,
        name: "Express",
        image: express,
        color: "from-gray-400 to-gray-600",
    },
    {
        id: 8,
        name: "MongoDB",
        image: mongodb,
        color: "from-green-500 to-teal-600",
    },
];

const experiences = [
    {
        id: 1,
        role: "Développeur Web Full Stack",
        company: "TradingBets",
        type: "Freelance",
        periode: "Janvier 2025 - Août 2025",
        description: [
            "Développement d'applications web de trading avec React, Node.js et MongoDB.",
            "Intégration d'API et optimisation des performances.",
        ],
        status: "current",
    },
    {
        id: 2,
        role: "Développeur Web Full Stack",
        company: "LINFOMED",
        type: "CDI",
        periode: "Février 2025 - Présent",
        description: [
            "Participation au développement de l'application APURMED avec React.js, Node.js, MongoDB, PouchDB.",
            "Fonctionnalités offline/online avec synchronisation automatique.",
        ],
        status: "current",
    },
    {
        id: 3,
        role: "Développeur Frontend",
        company: "Solistech",
        type: "CDI",
        periode: "2021 - Aujourd'hui",
        description: [
            "Développement d'interfaces utilisateur réactives avec React.js et Tailwind CSS pour diverses plateformes clients.",
        ],
        status: "ongoing",
    },
];

const Experience = () => {
    const sectionRef = useRef();
    const titleRef = useRef();
    const skillsRef = useRef();
    const experiencesRef = useRef();
    const skillItemsRef = useRef([]);
    const experienceItemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animation du titre
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Animation des compétences avec effet de vague
            skillItemsRef.current.forEach((el, i) => {
                if (el) {
                    gsap.fromTo(el,
                        { opacity: 0, scale: 0, rotation: -180 },
                        {
                            opacity: 1,
                            scale: 1,
                            rotation: 0,
                            duration: 0.8,
                            delay: i * 0.1,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: skillsRef.current,
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            }
                        }
                    );
                }
            });

            // Animation des expériences
            experienceItemsRef.current.forEach((el, i) => {
                if (el) {
                    gsap.fromTo(el,
                        { opacity: 0, x: i % 2 === 0 ? -100 : 100, scale: 0.8 },
                        {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            duration: 1,
                            delay: i * 0.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: experiencesRef.current,
                                start: "top 75%",
                                toggleActions: "play none none reverse",
                            }
                        }
                    );
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 py-16 px-4"
            id="Experience"
        >
            <div className="max-w-7xl mx-auto">
                <div ref={titleRef} className="text-center mb-16">
                    <Title title="Expérience & Compétences" />
                    <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
                        Découvrez mon parcours professionnel et les technologies que je maîtrise
                    </p>
                </div>

                <div className="flex flex-col xl:flex-row gap-12 items-start">
                    {/* Section Compétences */}
                    <div className="xl:w-1/3 w-full">
                        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                                Mes Compétences
                            </h3>
                            <div
                                ref={skillsRef}
                                className="grid grid-cols-3 px-4 gap-6"
                            >
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill.id}
                                        ref={el => skillItemsRef.current[index] = el}
                                        className="group cursor-pointer"
                                    >
                                        <div className={`relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${skill.color} p-0.5 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                                            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl p-3 flex items-center justify-center">
                                                <img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                        <span className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section Expériences */}
                    <div className="xl:w-2/3 w-full">
                        <div ref={experiencesRef} className="space-y-8">
                            {experiences.map((experience, index) => (
                                <div
                                    key={experience.id}
                                    ref={el => experienceItemsRef.current[index] = el}
                                    className="group relative"
                                >
                                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                                        {/* Badge de statut */}
                                        {experience.status === 'current' && (
                                            <div className="absolute -top-3 -right-3">
                                                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                                                    <span className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                                        En cours
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                        {experience.role}
                                                    </h3>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                                        {experience.company}
                                                    </span>
                                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                                                        {experience.type}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2 mb-6">
                                                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                                                        {experience.periode}
                                                    </span>
                                                </div>

                                                <div className="space-y-3">
                                                    {experience.description.map((desc, i) => (
                                                        <div key={i} className="flex items-start gap-3">
                                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                                {desc}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Effet de bordure animée au hover */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
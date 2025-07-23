import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, Eye, Code, Star } from 'lucide-react';
import Title from "../Title.jsx";
import img from "../../assets/img.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "APURMED",
        description: "Application web de gestion de prescriptions médicales avec synchronisation offline/online, développée pour LINFOMED.",
        technologie: ["React", "Node.js", "MongoDB", "PouchDB"],
        demoLink: "https://apurmed-demo.vercel.app",
        repoLink: "https://github.com/abdala/apurmed",
        image: img,
        category: "Santé",
        status: "Production",
        featured: true,
    },
    {
        id: 2,
        title: "Pay2BET",
        description: "Plateforme intermédiaire pour dépôts et retraits sur des sites de paris comme 1xbet ou Betwinner, avec gestion de portefeuille et commissions.",
        technologie: ["React", "Express", "Firebase", "MongoDB"],
        demoLink: "https://pay2bet.vercel.app",
        repoLink: "https://github.com/abdala/pay2bet",
        image: img,
        category: "Fintech",
        status: "Production",
        featured: true,
    },
    {
        id: 3,
        title: "Mon Portfolio",
        description: "Site personnel responsive présentant mes projets, compétences et expériences professionnelles.",
        technologie: ["React", "Tailwind CSS", "Vite"],
        demoLink: "https://abdala.vercel.app",
        repoLink: "https://github.com/abdala/portfolio",
        image: img,
        category: "Personnel",
        status: "En ligne",
        featured: false,
    },
    {
        id: 4,
        title: "Site Web Solistech",
        description: "Site vitrine réalisé pour Solistech, présentant leurs services informatiques.",
        technologie: ["HTML", "CSS", "JavaScript"],
        demoLink: "https://solistech.com",
        repoLink: "https://github.com/abdala/solistech-site",
        image: img,
        category: "Vitrine",
        status: "En ligne",
        featured: false,
    },
    {
        id: 5,
        title: "TradingBets",
        description: "Plateforme de paris sportifs avec système d'inscription, dépôt et historique des mises.",
        technologie: ["React", "Node.js", "MongoDB", "Firebase"],
        demoLink: "https://tradingbets.vercel.app",
        repoLink: "https://github.com/abdala/tradingbets",
        image: img,
        category: "Trading",
        status: "Production",
        featured: true,
    },
    {
        id: 6,
        title: "Gestionnaire de Tâches",
        description: "Application pour organiser les tâches quotidiennes, marquer comme terminées, filtrer, modifier et supprimer.",
        technologie: ["React", "Tailwind", "LocalStorage"],
        demoLink: "https://taskmanager-abdala.vercel.app",
        repoLink: "https://github.com/abdala/taskmanager",
        image: img,
        category: "Productivité",
        status: "Demo",
        featured: false,
    },
];

const techColors = {
    "React": "from-blue-400 to-cyan-500",
    "Node.js": "from-green-400 to-emerald-500",
    "MongoDB": "from-green-500 to-teal-600",
    "PouchDB": "from-purple-400 to-pink-500",
    "Express": "from-gray-400 to-gray-600",
    "Firebase": "from-orange-400 to-red-500",
    "Tailwind CSS": "from-cyan-400 to-blue-500",
    "Vite": "from-purple-500 to-indigo-600",
    "HTML": "from-orange-400 to-red-500",
    "CSS": "from-blue-400 to-indigo-500",
    "JavaScript": "from-yellow-400 to-orange-500",
    "Tailwind": "from-cyan-400 to-blue-500",
    "LocalStorage": "from-indigo-400 to-purple-500",
};

const categoryColors = {
    "Santé": "bg-emerald-500",
    "Fintech": "bg-blue-500",
    "Personnel": "bg-purple-500",
    "Vitrine": "bg-orange-500",
    "Trading": "bg-red-500",
    "Productivité": "bg-green-500",
};

const Project = () => {
    const sectionRef = useRef();
    const titleRef = useRef();
    const projectsRef = useRef();
    const projectItemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animation du titre
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: -50, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Animation des projets avec effet de vague
            projectItemsRef.current.forEach((el, i) => {
                if (el) {
                    gsap.fromTo(el,
                        {
                            opacity: 0,
                            y: 100,
                            scale: 0.8,
                            rotationY: -15
                        },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            rotationY: 0,
                            duration: 1,
                            delay: i * 0.15,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: projectsRef.current,
                                start: "top 80%",
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
            className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 py-20 px-4"
            id="Project"
        >
            <div className=" mx-auto">
                <div ref={titleRef} className="text-center mb-16">
                    <Title title="Mes Projets" />
                    <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
                        Découvrez une sélection de mes réalisations, alliant créativité, technologie et innovation
                    </p>
                    <div className="flex justify-center mt-8">
                        <div className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg">
                            <Code className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                {projects.length} projets réalisés
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    ref={projectsRef}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((projet, index) => (
                        <div
                            key={projet.id}
                            ref={el => projectItemsRef.current[index] = el}
                            className="group relative"
                        >
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full">

                                {/* Badge Featured */}
                                {projet.featured && (
                                    <div className="absolute top-4 left-4 z-10">
                                        <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                            <Star className="w-3 h-3 fill-current" />
                                            Projet phare
                                        </div>
                                    </div>
                                )}

                                {/* Badge Catégorie */}
                                <div className="absolute top-4 right-4 z-10">
                                    <div className={`${categoryColors[projet.category]} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
                                        {projet.category}
                                    </div>
                                </div>

                                {/* Image avec overlay */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={projet.image}
                                        alt={projet.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Status Badge */}
                                    <div className="absolute bottom-4 left-4">
                                        <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                                            <div className={`w-2 h-2 rounded-full ${
                                                projet.status === 'Production' ? 'bg-green-500 animate-pulse' :
                                                    projet.status === 'En ligne' ? 'bg-blue-500' : 'bg-orange-500'
                                            }`} />
                                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                {projet.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {projet.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {projet.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {projet.technologie.map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${techColors[tech] || 'from-gray-400 to-gray-600'} shadow-sm hover:shadow-md transition-shadow duration-200`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Boutons d'action */}
                                    <div className="flex gap-3">
                                        <a
                                            href={projet.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 group/btn"
                                        >
                                            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group-hover/btn:scale-105">
                                                <Eye className="w-4 h-4" />
                                                <span>Demo</span>
                                                <ExternalLink className="w-3 h-3 opacity-70" />
                                            </button>
                                        </a>

                                        <a
                                            href={projet.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn"
                                        >
                                            <button className="flex items-center justify-center w-14 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover/btn:scale-105">
                                                <Github className="w-5 h-5" />
                                            </button>
                                        </a>
                                    </div>
                                </div>

                                {/* Effet de bordure animée */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section statistiques */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: "Projets réalisés", value: projects.length, icon: Code },
                        { label: "Technologies", value: "8+", icon: Star },
                        { label: "En production", value: projects.filter(p => p.status === 'Production').length, icon: Eye },
                        { label: "Projets phares", value: projects.filter(p => p.featured).length, icon: Star },
                    ].map((stat, i) => (
                        <div key={i} className="text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
                            <div className="flex justify-center mb-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Download, Github, Linkedin, ArrowDown, Code, Coffee, Zap } from 'lucide-react';
import Abdala from "../../assets/abdala.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const sectionRef = useRef();
    const titleRef = useRef();
    const subtitleRef = useRef();
    const descriptionRef = useRef();
    const buttonsRef = useRef();
    const imageRef = useRef();
    const floatingElementsRef = useRef([]);
    const statsRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline principale pour l'entrée
            const tl = gsap.timeline();

            // Animation du titre avec effet de frappe
            tl.fromTo(titleRef.current,
                { opacity: 0, y: 100, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "back.out(1.7)"
                }
            );

            // Animation du sous-titre
            tl.fromTo(subtitleRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out"
                },
                "-=0.6"
            );

            // Animation de la description ligne par ligne
            tl.fromTo(descriptionRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out"
                },
                "-=0.4"
            );

            // Animation des boutons
            tl.fromTo(buttonsRef.current.children,
                { opacity: 0, scale: 0, rotation: -180 },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.7)"
                },
                "-=0.3"
            );

            // Animation de l'image avec effet de révélation
            tl.fromTo(imageRef.current,
                { opacity: 0, scale: 0.5, rotation: -10 },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 1,
                    ease: "power3.out"
                },
                "-=1"
            );

            // Animation des statistiques
            tl.fromTo(statsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.5"
            );

            // Animation des éléments flottants
            floatingElementsRef.current.forEach((el, i) => {
                if (el) {
                    gsap.fromTo(el,
                        { opacity: 0, scale: 0, rotation: 0 },
                        {
                            opacity: 0.1,
                            scale: 1,
                            rotation: 360,
                            duration: 2,
                            delay: i * 0.3,
                            ease: "power2.out"
                        }
                    );

                    // Animation flottante continue
                    gsap.to(el, {
                        y: -20,
                        rotation: 360,
                        duration: 3 + i,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                }
            });

            // Animation parallax légère pour l'image
            gsap.to(imageRef.current, {
                y: -30,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            className=" min-h-screen relative"
            id="Home"
        >
            {/* Éléments décoratifs flottants */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    ref={el => floatingElementsRef.current[0] = el}
                    className="absolute top-20 left-10 text-blue-500/10 dark:text-blue-400/10"
                >
                    <Code size={60} />
                </div>
                <div
                    ref={el => floatingElementsRef.current[1] = el}
                    className="absolute top-40 right-20 text-white  dark:text-purple-400/10"
                >
                    <Coffee size={40} />
                </div>
                <div
                    ref={el => floatingElementsRef.current[2] = el}
                    className="absolute bottom-40 left-20 text-green-500/10 dark:text-green-400/10"
                >
                    <Zap size={50} />
                </div>
                <div
                    ref={el => floatingElementsRef.current[3] = el}
                    className="absolute bottom-20 right-40 text-orange-500/10 dark:text-orange-400/10"
                >
                    <Code size={35} />
                </div>
            </div>

            <div className=" py-36">
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12">

                    {/* Section Contenu */}
                    <div className="flex-1 space-y-8">

                        {/* Titre principal */}
                        <div ref={titleRef} className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Disponible pour nouveaux projets
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white leading-tight">
                                Bonjour,
                                <br />
                                je suis{' '}
                                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                                    Abdala
                                </span>
                            </h1>
                        </div>

                        {/* Sous-titre avec effet machine à écrire */}
                        <div ref={subtitleRef} className="space-y-2">
                            <h2 className="text-xl md:text-2xl font-semibold text-white dark:text-gray-300">
                                Développeur{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                                    Full Stack
                                </span>
                            </h2>
                        </div>

                        {/* Description enrichie */}
                        <div ref={descriptionRef} className="space-y-4 max-w-2xl">
                            <p className="text-lg  text-white leading-relaxed">
                                <span className="font-semibold text-blue-600 dark:text-blue-400">3 ans d'expérience</span> dans le développement web moderne
                            </p>
                            <p className="text-lg text-white dark:text-gray-300 leading-relaxed">
                                Spécialisé en{' '}
                                <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-bold">
                                    React.js
                                </span>
                                {' '}et{' '}
                                <span className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded font-bold">
                                    Node.js
                                </span>
                            </p>
                            <p className="text-lg text-white dark:text-gray-300 leading-relaxed">
                                Passionné par la création d'expériences web exceptionnelles et performantes
                            </p>
                        </div>

                        {/* Boutons d'action */}
                        <div ref={buttonsRef} className="flex flex-wrap gap-4">
                            <a
                                href="mailto:nignanamed0@gmail.com"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                Contactez-moi
                            </a>

                            <a
                                href="../../assets/CV%20Abdala.pdf%20(3).pdf"
                                download
                                className="group inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                                Télécharger CV
                            </a>
                        </div>

                        {/* Liens sociaux */}
                        <div className="flex items-center gap-4 pt-4">
                            <span className="text-gray-500 dark:text-gray-400 text-sm">Suivez-moi :</span>
                            <div className="flex gap-3">
                                <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 text-gray-600 dark:text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 text-gray-600 dark:text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Section Image */}
                    <div className="flex-1 ">
                        <div
                            ref={imageRef}
                            className="relative group w-80 h-80 md:w-96 md:h-96"
                        >
                            {/* Cercles décoratifs animés */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image principale */}
                            <div className="relative bg-white p-2 rounded-full shadow-2xl w-80 h-80 md:w-96 md:h-96">
                                <img
                                    src={Abdala}
                                    alt="Abdala - Développeur Full Stack"
                                    className="w-full h-full rounded-full object-cover shadow-xl group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Badges flottants */}
                            <div className="absolute -top-6 -right-6 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                                <Code className="w-6 h-6" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                                <Coffee className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Statistiques */}
                <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { number: "3+", label: "Années d'expérience", icon: Code },
                        { number: "15+", label: "Projets réalisés", icon: Zap },
                        { number: "5+", label: "Technologies", icon: Coffee },
                        { number: "100%", label: "Satisfaction client", icon: Mail },
                    ].map((stat, i) => (
                        <div key={i} className="text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-center mb-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Flèche de scroll */}
                <div className="flex justify-center mt-20">
                    <div className="animate-bounce">
                        <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "./navbar/Navbar.jsx";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Experience from "./experience/Experience.jsx";
import Project from "./Project/Project.jsx";
import Footer from "./footer/Footer.jsx";
import Contact from "./contact/contact.jsx";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Create refs for each section that needs animation
    const containerRef = useRef();
    const homeRef = useRef();
    const aboutRef = useRef();
    const experienceRef = useRef();
    const projectRef = useRef();
    const contactRef = useRef();

    useEffect(() => {
        // Animation for the home section
        gsap.fromTo(
            homeRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: homeRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    markers: false,
                },
            }
        );

        // Animation for the about section
        gsap.fromTo(
            aboutRef.current,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play reverse play reverse",
                    markers: false,
                },
            }
        );

        // Animation for the experience section
        gsap.fromTo(
            experienceRef.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: experienceRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    markers: false,
                },
            }
        );

        // Animation for the project section
        gsap.fromTo(
            projectRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play reverse play reverse",
                    markers: false,
                },
            }
        );

        // Animation for the contact section
        gsap.fromTo(
            contactRef.current,
            { opacity: 0, y: 100 }, // 👈 commence en bas
            {
                opacity: 1,
                y: 0,                 // 👈 arrive à sa position normale
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    markers: false,
                },
            }
        );

        // Cleanup function to kill ScrollTriggers on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div ref={containerRef} className="container" onClick={handleOpen}>
            <div className="p-5 md:px-[15%]" ref={homeRef}>
                <Navbar handleOpen={handleOpen} isOpen={isOpen} />
                <Home />
            </div>

            <div ref={aboutRef} className="p-5 md:px-[15%]">
                <About />
            </div>

            <div className="p-5 md:px-[15%]" ref={experienceRef}>
                <Experience />
            </div>

            <div className="p-5 md:px-[15%]" ref={projectRef}>
                <Project />
            </div>

            <div className="p-5 md:px-[15%]" ref={contactRef}>
                <Contact />
            </div>
            <div className="p-5 md:px-[15%]">
            <Footer />
            </div>
        </div>
    );
};

export default Index;
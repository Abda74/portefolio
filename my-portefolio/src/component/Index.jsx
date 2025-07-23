import React from 'react';
import Navbar from "./navbar/Navbar.jsx";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Experience from "./experience/Experience.jsx";
import Project from "./Project/Project.jsx";
import Footer from "./footer/Footer.jsx";
import Contact from "./contact/contact.jsx";

const Index = () => {
    return (
        <div>
            <div className="p-5 md:px-[-15%]">
                <Navbar/>
                <Home/>
            </div>
            <About/>
            <div className="p-5 md:px-[-15%]">
                <Experience/>
            </div>
            <div className="p-5 md:px-[-15%]">
                <Project/>
            </div>
            <div className="p-5 md:px-[-15%]">
                <Contact/>
            </div>
            <Footer/>

        </div>
    );
};

export default Index;
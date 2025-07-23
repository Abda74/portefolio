import React from 'react';
import Title from "../Title.jsx";
import Abdala from "../../assets/abdala.jpeg";
import {
    Code,
    Monitor,
    Server,
    Layers,
    PenTool,
} from 'lucide-react';

const AboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je conçois des interfaces modernes, réactives et optimisées avec React.js et Tailwind CSS.",
        icon: <Monitor className="w-6 h-6 text-primary" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je développe des APIs robustes avec Node.js, Express et MongoDB.",
        icon: <Server className="w-6 h-6 text-primary" />,
    },
    {
        id: 3,
        title: "Développeur Fullstack",
        description: "J'intègre frontend et backend pour des applications web complètes et performantes.",
        icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
        id: 5,
        title: "Passionné de UI/UX",
        description: "Je m'efforce de créer des interfaces intuitives et agréables, centrées sur l’expérience utilisateur.",
        icon: <PenTool className="w-6 h-6 text-primary" />,
    },
];

const About = () => {
    return (
        <div className="text-center bg-base-300 pb-10" id="About">
            <Title  title="A propos " />
            <div className=" flex justify-center items-center pb-10 px-4">
                <div className="hidden md:block">
                    <img src={Abdala} alt="Abdala image" className="w-96 object-cover" />
                </div>
                <div className="md:ml-4 space-y-4 md:grid md:grid-cols-2 gap-4 ">
                    {
                        AboutSections.map((section, i) =>
                           <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl ">
                               <div className="mb-2 md:mb-0">
                                   {section.icon}
                               </div>
                               <div className="md:ml-4 text-center md:text-left">
                                   <h2 className="text-xl font-bold mb-1">
                                       {section.title}
                                   </h2>
                                   <p className="text-sm mb-1">{section.description}
                                       {section.description}
                                   </p>
                               </div>
                           </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;
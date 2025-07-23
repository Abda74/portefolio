import React from 'react';
import { Mail } from 'lucide-react';
import Abdala from "../../assets/abdala.jpeg"
import "./home-module.css"

const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 mx-2" id="Home">
            <div className="flex flex-col mx-2 ">
                <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left mt-4 md:mb-4 md:mt-0">
                    Bonjour , <br/> je suis <span className="text-blue-500">Abdala</span>
                </h1>
                <p className="my-4  text-md  text-center  md:text-left mt-4 md:mt-0">
                    Je suis développeur fullstack <br/>
                    avec <span className="font-bold p-0.5 rounded ">3 ans</span> d'expérience <br/>
                    Je travaille avec <span className="font-bold text-xl">React.js</span> et <span className="text-xl font-bold">Node.js</span>, <br/>
                    Disponible pour vos projets de développement web moderne. <br/> Contactez-moi si besoin. <br/>

                </p>
                <a href="" className="btn bg-blue-500 text-white font-bold md:w-fit ">
                    <Mail className="h-5 w-5" />Contactez-moi
                </a>
            </div>
            <div className="md:ml-60 ">
                <img src={Abdala} alt="image Abdala " className="home-img md:w-96 md:h-96 object-cover border-4 border-blue-500 shadow-xl"/>
            </div>
        </div>
    );
};

export default Home;
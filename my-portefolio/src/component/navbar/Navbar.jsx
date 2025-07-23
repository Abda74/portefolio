import React from 'react';
import Abdala from '../../assets/abdala.png';
import { Menu } from 'lucide-react';

const Navbar = ({handleOpen , isOpen}) => {
console.log(handleOpen);

    return (
        <div className="navbar bg-base-100 shadow px-4 flex items-center justify-between md:justify-between" >
            <a href="#" className="flex items-center space-x-2 text-xl font-bold">
                <img src={Abdala} alt="image Abdala" className="w-8 h-8 rounded-full" />
                <span>
                Abdala <span className="text-blue-500">NIGNAN</span>
                </span>
            </a>

            <ul className="hidden md:flex space-x-4">
                <li className="btn btn-sm btn-ghost">
                    <a href="#Home" >Acceuil</a>
                </li>
                <li className="btn btn-sm btn-ghost">
                    <a href="#About" >A propos</a>
                </li>
                <li className="btn btn-sm btn-ghost">
                    <a href="#Experience" >Mes experience</a>
                </li>
                <li className="btn btn-sm btn-ghost">
                    <a href="#Project" >Mes projets</a>
                </li>
                <li className="btn btn-sm btn-ghost">
                    <a href="#" >Contact</a>
                </li>

            </ul>
            <div className="md:hidden w-full flex justify-end space-x-2 relative">
                <button className="btn btn-ghost flex flex-col space-x-2 on " onClick={handleOpen}>
                    <Menu className="w-6 h-6" />
                </button>
                {isOpen && (<div onClick={handleOpen} className="absolute top-10 left-20 max-w-36 bg-base-300/60 border border-white/20 rounded-lg shadow-lg backdrop-blur-md p-4">
                    <ul className="flex flex-col items-start w-full">
                        <li className="btn btn-sm btn-ghost">
                            <a href="#Home" >Acceuil</a>
                        </li>
                        <li className="btn btn-sm btn-ghost">
                            <a href="#About" >A propos</a>
                        </li>
                        <li className="btn btn-sm btn-ghost">
                            <a href="#Experience" >Experience</a>
                        </li>
                        <li className="btn btn-sm btn-ghost">
                            <a href="#Project" >Projets</a>
                        </li>
                        <li className="btn btn-sm btn-ghost">
                            <a href="#" >Contact</a>
                        </li>

                    </ul>
                </div>)}
            </div>
        </div>
    );
};

export default Navbar;

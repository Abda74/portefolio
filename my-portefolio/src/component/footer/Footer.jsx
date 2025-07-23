import React from 'react';
import Abdala from "../../assets/abdala.png";
import { ArrowUp } from 'lucide-react'; // ou remplace par un autre icône

const Footer = () => {
    return (
        <>
            <footer className="footer footer-horizontal footer-center p-10">
                <aside>
                    <a href="#" className="flex flex-col items-center text-xl font-bold">
                        <img src={Abdala} alt="image Abdala" className="w-8 h-8 rounded-full" />
                        <span>
                            Abdala <span className="text-blue-500">NIGNAN</span>
                        </span>
                    </a>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>

                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a>{/* Twitter */}</a>
                        <a>{/* YouTube */}</a>
                        <a>{/* Facebook */}</a>
                    </div>
                </nav>
            </footer>

            {/* ✅ Bouton flottant visible au scroll */}
            <a
                href="#Home"
                className="btn btn-primary btn-circle fixed bottom-5 right-5 shadow-lg z-50"
                aria-label="Remonter en haut"
            >
                <ArrowUp className="w-5 h-5" />
            </a>
        </>
    );
};

export default Footer;

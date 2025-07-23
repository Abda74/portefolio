import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Title from "../Title.jsx";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br py-16 px-4">
            <Title title="Contact" />
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Section Coordonnées */}
                    <div className="space-y-8">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
                                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                                Mes Coordonnées
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300">
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Email</p>
                                        <p className="text-gray-800 font-semibold">nignanamed0@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center group hover:bg-green-50 p-4 rounded-xl transition-all duration-300">
                                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Téléphone</p>
                                        <p className="text-gray-800 font-semibold">+226 74650133 / 78734506</p>
                                    </div>
                                </div>

                                <div className="flex items-center group hover:bg-purple-50 p-4 rounded-xl transition-all duration-300">
                                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Adresse</p>
                                        <p className="text-gray-800 font-semibold">Burkina Faso, Koudougou, secteur 10</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section horaires */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                            <h4 className="text-xl font-semibold mb-4">Horaires de disponibilité</h4>
                            <div className="space-y-2 text-blue-100">
                                <p><span className="font-medium">Lun - Ven:</span> 08h00 - 18h00</p>
                                <p><span className="font-medium">Sam:</span> 08h00 - 16h00</p>
                                <p><span className="font-medium">Dim:</span> Sur rendez-vous</p>
                            </div>
                        </div>
                    </div>

                    {/* Section Formulaire */}
                    <form
                        action="https://getform.io/f/bolopmma"
                        method="POST"
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
                        onSubmit={() => setSubmitted(true)}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
                            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-4"></div>
                            Envoyez-moi un message
                        </h3>

                        {submitted && (
                            <div className="mb-6 p-4 text-green-700 bg-green-100 rounded">
                                Merci pour votre message ! Je vous répondrai rapidement.
                            </div>
                        )}

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="nom"
                                        required
                                        className="w-full px-4 py-4 bg-gray-50 text-black border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                                        placeholder="Votre nom"
                                    />
                                    <label className="absolute left-4 -top-2.5 text-sm text-gray-600 bg-white px-2 rounded transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                        Nom complet *
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-4 bg-gray-50 text-black border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                                        placeholder="votre@email.com"
                                    />
                                    <label className="absolute left-4 -top-2.5 text-black text-sm bg-white px-2 rounded transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                        Email *
                                    </label>
                                </div>
                            </div>

                            <div className="relative">
                                <input
                                    type="tel"
                                    name="telephone"
                                    className="w-full px-4 py-4 bg-gray-50 text-black border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                                    placeholder="+226 74650133"
                                />
                                <label className="absolute left-4 -top-2.5 text-sm text-gray-600 bg-white px-2 rounded transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                    Numéro de téléphone
                                </label>
                            </div>

                            <div className="relative">
                <textarea
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-4 bg-gray-50 text-black  border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent resize-none"
                    placeholder="Votre message..."
                ></textarea>
                                <label className="absolute left-4 -top-2.5 text-sm text-gray-600 bg-white px-2 rounded transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                    Votre message *
                                </label>
                            </div>

                            {/* Anti-bot */}
                            <input type="text" name="_gotcha" className="hidden" />

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <Send className="w-5 h-5 inline-block mr-2" />
                                Envoyer le message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

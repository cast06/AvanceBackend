import React, { useState } from 'react';
import '../../index.css';
import logo from '../../../src/assets/logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white text-black shadow-lg p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 mr-3" />
                    <h1 className="text-2xl font-bold">Uniexito</h1>
                </div>
                <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                        <li><a href="#" className="hover:text-gray-500">Inicio</a></li>
                        <li><a href="#" className="hover:text-gray-500">Acerca de</a></li>
                        <li><a href="#" className="hover:text-gray-500">Servicios</a></li>
                        <li><a href="#" className="hover:text-gray-500">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

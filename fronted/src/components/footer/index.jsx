import React from 'react';
import '../../index.css';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">Uniexito</h1>
                    <p className="text-sm">© 2024 Uniexito. Todos los derechos reservados.</p>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
                        <li><a href="#" className="hover:text-gray-400">Acerca de</a></li>
                        <li><a href="#" className="hover:text-gray-400">Servicios</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

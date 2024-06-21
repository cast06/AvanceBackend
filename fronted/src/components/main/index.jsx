import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Main() {
    return (
        <main className="container mx-auto my-20">
            <h2 className="text-2xl font-bold text-center">Bienvenidos a Uniexito</h2>
            <p className="text-center text-gray-600">La mejor plataforma de educación en línea</p>
            <Tabs>
                <TabList>
                    <Tab>Estudiante</Tab>
                    <Tab>Profesor</Tab>
                    <Tab>Video</Tab>
                    <Tab>Apuntes</Tab>
                    <Tab>Libro</Tab>
                </TabList>
                <TabPanel>
                    <FormularioEstudiante />
                </TabPanel>
                <TabPanel>
                    <FormularioProfesor />
                </TabPanel>
                <TabPanel>
                    <FormularioVideo />
                </TabPanel>
                <TabPanel>
                    <FormularioApuntes />
                </TabPanel>
                <TabPanel>
                    <FormularioLibro />
                </TabPanel>
            </Tabs>
            <h2 className="text-2xl font-bold text-center mt-8">Tablas de Datos</h2>
            <Tabs>
                <TabList>
                    <Tab>Estudiantes</Tab>
                    <Tab>Profesores</Tab>
                    <Tab>Videos</Tab>
                    <Tab>Apuntes</Tab>
                    <Tab>Libros</Tab>
                </TabList>
                <TabPanel>
                    <TablaEstudiantes />
                </TabPanel>
                <TabPanel>
                    <TablaProfesores />
                </TabPanel>
                <TabPanel>
                    <TablaVideos />
                </TabPanel>
                <TabPanel>
                    <TablaApuntes />
                </TabPanel>
                <TabPanel>
                    <TablaLibros />
                </TabPanel>
            </Tabs>
        </main>
    );
}

function FormularioEstudiante() {
    return (
        <form className="space-y-4" method="POST" action="/api/estudiantes">
            <div>
                <label className="block text-gray-700">Nombre:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Apellido Paterno:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Apellido Materno:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Contraseña:</label>
                <input type="password" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Correo:</label>
                <input type="email" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Semestre:</label>
                <input type="number" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Intereses:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
        </form>
    );
}

function FormularioProfesor() {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-gray-700">Nombre:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Apellido Paterno:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Apellido Materno:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Contraseña:</label>
                <input type="password" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Correo:</label>
                <input type="email" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Especialidad:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Tipo de Usuario:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>

        </form>
    );
}

function FormularioVideo() {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-gray-700">Título:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Descripción:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">URL:</label>
                <input type="url" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Tema:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>

        </form>
    );
}

function FormularioApuntes() {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-gray-700">Título:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Descripción:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Materia:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Universidad:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">URL de Descarga:</label>
                <input type="url" className="w-full border border-gray-300 p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
        </form>
    );
}

function FormularioLibro() {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-gray-700">Título:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Autor:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Editorial:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Edición:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Tema:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">Descripción:</label>
                <input type="text" className="w-full border border-gray-300 p-2" />
            </div>
            <div>
                <label className="block text-gray-700">URL de Descarga:</label>
                <input type="url" className="w-full border border-gray-300 p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
        </form>
    );
}

function TablaEstudiantes() {
    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Nombre</th>
                    <th className="py-2 px-4 border-b">Apellido Paterno</th>
                    <th className="py-2 px-4 border-b">Apellido Materno</th>
                    <th className="py-2 px-4 border-b">Correo</th>
                    <th className="py-2 px-4 border-b">Semestre</th>
                    <th className="py-2 px-4 border-b">Intereses</th>
                </tr>
            </thead>
            <tbody>
                {/* Data rows */}
            </tbody>
        </table>
    );
}

function TablaProfesores() {
    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Nombre</th>
                    <th className="py-2 px-4 border-b">Apellido Paterno</th>
                    <th className="py-2 px-4 border-b">Apellido Materno</th>
                    <th className="py-2 px-4 border-b">Correo</th>
                    <th className="py-2 px-4 border-b">Especialidad</th>
                    <th className="py-2 px-4 border-b">Tipo de Usuario</th>
                </tr>
            </thead>
            <tbody>
                {/* Data rows */}
            </tbody>
        </table>
    );
}

function TablaVideos() {
    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Título</th>
                    <th className="py-2 px-4 border-b">Descripción</th>
                    <th className="py-2 px-4 border-b">URL</th>
                    <th className="py-2 px-4 border-b">Tema</th>
                </tr>
            </thead>
            <tbody>
                {/* Data rows */}
            </tbody>
        </table>
    );
}

function TablaApuntes() {
    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Título</th>
                    <th className="py-2 px-4 border-b">Descripción</th>
                    <th className="py-2 px-4 border-b">Materia</th>
                    <th className="py-2 px-4 border-b">Universidad</th>
                    <th className="py-2 px-4 border-b">URL de Descarga</th>
                </tr>
            </thead>
            <tbody>
                {/* Data rows */}
            </tbody>
        </table>
    );
}

function TablaLibros() {
    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Título</th>
                    <th className="py-2 px-4 border-b">Autor</th>
                    <th className="py-2 px-4 border-b">Editorial</th>
                    <th className="py-2 px-4 border-b">Edición</th>
                    <th className="py-2 px-4 border-b">Tema</th>
                    <th className="py-2 px-4 border-b">Descripción</th>
                    <th className="py-2 px-4 border-b">URL de Descarga</th>
                </tr>
            </thead>
            <tbody>
                {/* Data rows */}
            </tbody>
        </table>
    );
}

export default Main;

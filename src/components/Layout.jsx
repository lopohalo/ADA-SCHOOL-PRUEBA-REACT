import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const ubicacion = useLocation()
    const urlActual = ubicacion.pathname
    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-white text-center font-black text-4xl">CMR - Clientes</h2>
                <nav className="mt-10">
                    <Link className={`${urlActual === '/inicio' ? 'text-blue-300': "text-white block text-2xl mt-2 hover:text-blue-300"} `} to="/inicio">Ver citas</Link>
                    <Link className={`${urlActual === "/formulario" ? 'text-blue-300': "text-white block text-2xl mt-2 hover:text-blue-300"} `} to="/formulario">Nuevo Cita</Link>
                </nav>
            </div>
            <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
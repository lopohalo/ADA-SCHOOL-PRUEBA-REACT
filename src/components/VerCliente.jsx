import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const VerCliente = () => {
    const { id } = useParams()
    let [cliente, setcliente] = useState(JSON.parse(localStorage.getItem('pasajeros')))
  
        useEffect(() => {
        cliente = cliente.filter(x => x.id == id)
        cliente = cliente[0]
        setcliente(cliente)
        }, [])
        
    return (
        
        Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : (
            
            <div>
                    <>
                        <h1 className="font-black text-4xl text-blue-900">ver Cliente: {cliente.nombre}</h1>
                        <p className="mt-3">Informacion del Cliente</p>
                        <p className="text-2xl text-gray-700 mt-10" >
                            <span className="text-gray-800 uppercase font-bold">Cliente:</span>
                            {cliente.nombre}
                        </p>
                        <p className="text-2xl text-gray-700 mt-4" >
                            <span className="text-gray-800 uppercase font-bold">Pasajeros:</span>
                            {cliente.pasajeros}
                        </p>
                        <p className="text-2xl text-gray-700 mt-4" >
                            <span className="text-gray-800 uppercase font-bold">fecha:</span>
                            {cliente.fecha}
                        </p>
                        <p className="text-2xl text-gray-700 mt-4" >
                            <span className="text-gray-800 uppercase font-bold">ORIGEN:</span>
                            {cliente.origen}
                        </p>
                        <p className="text-2xl text-gray-700 mt-4" >
                            <span className="text-gray-800 uppercase font-bold">DESTINO:</span>
                            {cliente.destino}
                        </p>

                    </>
            </div>
        )
    )

}

export default VerCliente
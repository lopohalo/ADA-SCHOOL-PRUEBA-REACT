import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Cliente from '../components/Cliente'

const Inicio = () => {
  const [clientes, setCliente] = useState([])
  const [nuevo, setNuevo] = useState([])
  useEffect(() => {
    const hola = async () => {
      setCliente(JSON.parse(localStorage.getItem('pasajeros')))
    }
    hola()
  }, [nuevo])
  const eliminar = id => {
    const confirmar = confirm('Are you sure you want to delete this')
    if (confirmar) {
      const nuevoArreglo = clientes.filter(citas => citas.id !== id)
      setNuevo(nuevoArreglo)
      localStorage.setItem('pasajeros', JSON.stringify(nuevoArreglo))
    } else {
      console.log('no Elimino')
    }


  }
  return (
    Object.keys(clientes).length === 0 ? <p>No hay resultados</p> : (
            
    <>
    
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra  tus citas</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Viaje A</th>
            <th className="p-2">fecha</th>
            <th className="p-2">Numero Pasajeros</th>
            <th className="p-2">Acciones</th>

          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              eliminar={eliminar}
            />
          ))}
        </tbody>
      </table>
    </>
  ) )
}

export default Inicio
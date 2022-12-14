import React from 'react'
import {useNavigate} from 'react-router-dom'

const Cliente = ({ cliente,eliminar }) => {
  const navegar = useNavigate()
  const { nombre,pasajeros ,id , origen, destino,fecha} = cliente
  return (
    <tr className="border hover:bg-gray-50">
      <td className="p-3">{nombre}</td>
      <td className="p-3">
        <p><span className="text-gray-800 uppercase font-bold">Origen:</span>{origen}</p>
        <p><span className="text-gray-800 uppercase font-bold">Destino:</span>{destino}</p>
      </td>
      <td className="p-3"><span className="text-gray-800 uppercase font-bold">Fecha:</span>{fecha}</td>
      <td className="p-3"><span className="text-gray-800 uppercase font-bold">pasajeros:</span>{pasajeros}</td>
      <td className="p-3">
      <button type="button" className="bg-yellow-600 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-sm"onClick={() => navegar(`/${id}`)}>ver </button>
        <button type="button" className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-sm"onClick={() => navegar(`editar/${id}`)}>Editar</button>
        <button type="button" className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-sm"onClick={() => eliminar(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default Cliente
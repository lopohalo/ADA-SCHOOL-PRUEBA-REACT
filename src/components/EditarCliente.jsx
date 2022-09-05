import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {
  const { id } = useParams()
 let [cliente, setcliente] = useState(JSON.parse(localStorage.getItem('pasajeros')))
  
  useEffect(() => {
   cliente = cliente.filter(x => x.id == id)
   cliente = cliente[0]
   setcliente(cliente)
  }, [])
   


  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Utiliza este formulario para editar datos de un cliente</p>
      {cliente ? (
        <Formulario
          cliente={cliente}
        />
      ) : 'No se encontro Usuario'}

    </>
  )
}

export default EditarCliente
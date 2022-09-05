import { useEffect, useState } from "react"
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import Alerta from "./Alerta"
import { useNavigate } from "react-router-dom"
import {  Outlet } from 'react-router-dom'


const Formulario = ({cliente}) => {
    console.log(cliente)
    const navegar = useNavigate()
    const [citas, setCitas] = useState(JSON.parse(localStorage.getItem('pasajeros')) ?? [])
    const validateYupSchema = Yup.object().shape({
        nombre: Yup.string()
        .min(3, 'El nombre es muy corto')
        .max(20, 'El nombre es muy largo')
        .required('El nombre es obligatorio'),
    pasajeros: Yup.string()
    .required('pasajeros es obligatorio'),
    origen: Yup.string()
        .required('Origen Es obligatorio'),
    destino: Yup.string()
        .required('Destino es obligatorio'),

    fecha: Yup.date() .required('Fecha es obligatoria')
    })
  useEffect(() => {
      localStorage.setItem('pasajeros', JSON.stringify(citas))
    },[citas])

    const onsubmit1 = (values) => {
        let obj = {
            nombre: values.nombre,
            pasajeros: values.pasajeros,
            origen: values.origen,
            destino: values.destino,
            fecha: values.fecha,
            id: ''
           }

        if(cliente.id){
           obj.id = cliente.id
           const cambiandoArregloOriginal = citas.map(c => cliente.id == c.id ? obj : c)   
           setCitas(cambiandoArregloOriginal) 
           cliente = {}
           console.log(cliente)
           console.log('cambiando editando')
        } else {
            obj.id = generadoraID()
            setCitas([...citas,obj])
  
        }
        navegar('/inicio')
        
    }
        const generadoraID = () => {
            let random = Math.random().toString(36).substring(2);
            let fecha = Date.now().toString(36)
            return random + fecha;
        }
    return (
        <>
        <Outlet/>
        <div className="md:w-full lg:w-full p-10">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <Formik
             initialValues={{
                        nombre: cliente?.nombre ?? '',
                        pasajeros: cliente?.pasajeros ?? '',
                        origen: cliente?.origen ?? '',
                        destino: cliente?.destino ?? '',
                        fecha: cliente?.fecha ?? ''
            }}
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
                onsubmit1(values)
                resetForm()
            }}
            validationSchema={validateYupSchema}
            >
                {({ errors, touched }) => {
                     return (
                        <Form
                        
                        className="mt-10 bg-gray-200 p-8 rounded-lg "
                    >
                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor='nombre'
                            >Nombre:</label>
                            <Field
                                id="nombre"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50 "
                                placeholder="Nombre del Cliente"
                                name="nombre"
                            />
                            {touched.nombre && errors.nombre ? <Alerta>{errors.nombre}</Alerta> : null}
                            
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor='pasajeros'
                            >pasajeros:</label>
                            <Field
                                id="pasajeros"
                                type="number"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="pasajeros del Cliente"
                                name="pasajeros"
                            />
                            {touched.pasajeros && errors.pasajeros ? <Alerta>{errors.pasajeros}</Alerta> : null}
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor='origen'
                            >origen:</label>
                            <Field
                                id="origen"
                                type="tel"
                                className="mt-2 block w-full p-3 bg-gray-50 "
                                placeholder="origen del Cliente"
                                name="origen"
                            />
                            {touched.origen && errors.origen ? <Alerta>{errors.origen}</Alerta> : null}
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor='destino'
                            >destino:</label>
                            <Field
                                id="destino"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="destino del Cliente"
                                name="destino"
                            />
                            {touched.destino && errors.destino ? <Alerta>{errors.destino}</Alerta> : null}
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor='fecha'
                            >fecha:</label>
                            <Field
                                id="fecha"
                                type="date"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                name="fecha"
                            />
                            {touched.fecha && errors.fecha ? <Alerta>{errors.fecha}</Alerta> : null}
                        </div>
                        <input type="submit" value={cliente?.nombre ? 'Editar Cliente' : 'Agregar Cliente'} className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" />
                    </Form>
               )
            }}
            </Formik>
        </div>
        </>
    )
}
Formulario.defaultProps = {
    cliente: {},
    cargando: false
}
export default Formulario
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import EditarCliente from "./components/EditarCliente";
import VerCliente from "./components/VerCliente";
import Inicio from "./components/Inicio";
// npx tailwindcss -i ./src/index.css -o ./src/dist/output.css --watch
function App() {
  // https://www.datos.gov.co/resource/xdk5-pm3f.json
  // const [pacientes, setPersonas] = useState([])
  // const [pacienteA, setPacienteA] = useState({})
  // useEffect(() => {
  //   const inicieAntes = () => {
  //       let ResultadoLS = JSON.parse(localStorage.getItem(('pacientes')))
  //       setPersonas(ResultadoLS)     
  //   }
  //   inicieAntes()
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem('pacientes', JSON.stringify(pacientes))
  //   console.log("2")
  // }, [pacientes])
  // const EliminarAlgoDelArreglo = (id) => {
  //   const nuevoarreglo = pacientes.filter(arregloViejo => arregloViejo.id !== id)
  //   setPersonas(nuevoarreglo)
  // }
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Header/>} />
        <Route path="inicio" element={<Inicio/>} />
        <Route path="formulario" element={<Formulario/>} />
        <Route path=":id" element={<VerCliente/>} />
        <Route path="inicio/editar/:id" element={<EditarCliente/>} />
        </Route>
    </Routes>
</BrowserRouter>
  )
}
export default App

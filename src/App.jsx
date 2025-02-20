import { useState } from 'react'
import './App.css'
import { Busqueda } from './componentes/Busqueda'
import { MostrarResultado } from './componentes/MostrarResultado'

function App() {

  const [resultado, setResultado] = useState([])

  return <>
    <Busqueda setResultado={setResultado} />
    <MostrarResultado resultado={resultado} />
  </>
}

export default App

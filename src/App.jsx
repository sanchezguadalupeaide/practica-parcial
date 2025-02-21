import { useState } from 'react'
import './App.css'
import { Busqueda } from './componentes/Busqueda'
import { MostrarResultado } from './componentes/MostrarResultado'

function App() {

  const [resultado, setResultado] = useState([])
  const [error, setError ] = useState(false)

  return <>
    <Busqueda setResultado={setResultado} setError={setError} />
    <MostrarResultado resultado={resultado} error={error} />
  </>
}

export default App

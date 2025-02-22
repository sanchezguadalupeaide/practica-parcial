import { useEffect, useState } from "react"

export const Historial = ({ resultado }) => {
    const [historial, setHistorial] = useState([])
    useEffect(() => {
        if (resultado.length == 1) {
            setHistorial([...historial, resultado[0]])
        }
    }, [resultado])

    {/*,[] para que no se repita */ }
    return <>
        <h1>Historial</h1>
       <ul> 
        {historial.map((element, index) => {
            return <div key={index}>
                 <h4>{element.name.common}</h4>   
            </div>
        })}
        </ul>
    </>
}
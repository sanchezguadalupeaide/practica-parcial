import { useRef } from "react"

export const Busqueda = ({ setResultado }) => {

    const inputRef = useRef()

    const traerPais = async (pais) => {
        let reponse = await fetch("https://restcountries.com/v3.1/name/" + pais)
        let data = await reponse.json()
        setResultado(data)
    }

    return <>
        <h2>Busqueda de paises</h2>

        <input ref={inputRef}
            type="text"
            placeholder="Ingrese un país"
            onChange={() => { traerPais(inputRef.current.value) }} />
    </>
}
import { useRef } from "react"

export const Busqueda = ({ setResultado, setError }) => {

    const inputRef = useRef()

    const traerPais = async (pais) => {
        let reponse = await fetch("https://restcountries.com/v3.1/name/" + pais)
        let data = await reponse.json()

        if (data.status == 404) {
            setError(true)
            return
        } setError(false)
        console.log(data)
        setResultado(data)
    }

    return <>
        <h2>Busqueda de paises</h2>

        <input ref={inputRef}
            type="text"
            placeholder="Ingrese un país"
            onChange={() => {
                if (inputRef.current.value !== "") {
                    traerPais(inputRef.current.value)
                }
            }} />
    </>
}
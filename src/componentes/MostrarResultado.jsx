export const MostrarResultado = ({ resultado, error }) => {
    if (error) {
        return <>
            <h1>No se encontraron resultados</h1>
        </>
    }
    return <div>
        {resultado.map((element, index) => {

            return <div key={index}>
                <h4>{element.name.common}</h4>
                <h4>{element.population}</h4>
                <img src={element.flags.png} alt="" height={100} width={100} />
            </div>
        })}
    </div>
}
import useClima from "../hooks/useClima"

const Resultado = () => {

    const { resultado } = useClima()

    const { name, main } = resultado

    //Grados Kelvin
    const kelvin = 273.15

    return (
        <div className="contenedor clima">
            <h2>El clima de {name} es:</h2>
            <p>
                {parseInt(main.temp - kelvin)}<span>°C</span>
            </p>
            <p>
                Temperatura Mínima: {parseInt(main.temp_min - kelvin)}<span>°C</span>
            </p>
            <p>
                Temperatura Máxima: {parseInt(main.temp_max - kelvin)}<span>°C</span>
            </p>
        </div>
    )
}

export default Resultado

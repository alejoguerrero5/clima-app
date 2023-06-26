import { useState, createContext } from 'react'
import axios from 'axios'

const ClimaContext = createContext()

const ClimaProvider = ({ children }) => {


    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    const [resultado, setResultado] = useState({});

    const busquedaDatos = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async datos => {
        try {
            const {ciudad, pais} = datos

            const appId = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const {data} = await axios(url)
            const {lat,lon,local_names} = data[0]
            const {es} = local_names

            const urlClima = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: clima } = await axios(urlClima)
            setResultado(clima)
            console.log(es)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                busquedaDatos,
                consultarClima,
                resultado,
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext
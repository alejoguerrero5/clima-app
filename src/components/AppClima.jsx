
import Formulario from './Formulario'
import Resultado from './Resultado'
import Loading from './loading'
import useClima from '../hooks/useClima'

const AppClima = () => {

    const { resultado, cargando, noResultado } = useClima()

    return (
        <>
            <main className='dos-columnas'>
                <Formulario />

                {
                cargando ? <Loading /> :
                resultado?.name ? <Resultado /> :
                noResultado && <p>{noResultado}</p>
                
                }

            </main>
        </>
    )
}

export default AppClima

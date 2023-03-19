
const Mensaje = ({data, clase="unMensaje"}) => {
    
    return( 
        <div className={clase}>
            <div className="datosDelMensaje">
                <p className="chatEmail">{data.email}</p>
                <p className="chatHora">{data.fecha}</p>
            </div>
            <div className="datosDelMensaje">
                <pre className="chatMensaje">{data.mensaje}</pre>
            </div>
        </div>
    )
}

export default Mensaje;
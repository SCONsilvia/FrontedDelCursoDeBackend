
const CarritoDetail = ({datos}) => {
    console.log("a");
    console.log(datos);
    return(
        <>
            <p>{datos.nombre}</p>
            <p>{datos.precio}</p>
            <p>{datos.cantidad}</p>
            <p>SubTotal {datos.cantidad * datos.precio}</p>
        </>
    )
}

export default CarritoDetail;
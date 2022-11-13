import "./Historial.scss"
import ProductsList from "../ProductsList/ProductsList";
import Product from "../Product/Product";

const Historial = () => {
    return(
        <section>
            <h1>Historial</h1>
            <ProductsList Componente={Product} nombreDelCOmponente = "ProductListDinamico"/>
        </section>

    )
}

export default Historial;
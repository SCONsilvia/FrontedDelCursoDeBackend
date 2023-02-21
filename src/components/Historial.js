import ProductsList from "./ProductsList";
import Product from "./Product";

const Historial = () => {
    return(
        <section>
            <h1>Historial</h1>
            <div className="listHistorialProduct">
                <ProductsList Componente={Product} nombreDelCOmponente = "ProductListDinamico"/>
            </div>
        </section>

    )
}

export default Historial;
import ProductsList from "./ProductsList";
import CategorysList from "./CategoryList";
import Product from "./Product";
import { useParams } from "react-router-dom";

const Historial = () => {
    const { categoryId } = useParams();
    return(
        <section className="sectionHistorial">
            <h1>Categorias</h1>
            <CategorysList></CategorysList>
            <h1>Productos</h1>
            <div className="listHistorialProduct">
                <ProductsList Componente={Product} nombreDelCOmponente = "ProductListDinamico" categoryId={categoryId}/>
            </div>
        </section>

    )
}

export default Historial;

import ProductoTablaItem from "./ProductoTablaItem";
import ProductsList from "./ProductsList";

const ProductoTabla = () => {
    return(
        <section>
            <table className="tabla" id="tabla">
                <caption className="tabla__tituloDeLaTabla">Productos</caption>
                <thead>
                    <tr>
                        <th className="tabla__th">Nombre</th>
                        <th className="tabla__th">imagen</th>
                        <th className="tabla__th">precio</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductsList Componente={ProductoTablaItem} nombreDelComponente = "ProductoTablaItem" categoryId="all"/>
                </tbody>
            </table>
        </section>

    )
}

export default ProductoTabla;
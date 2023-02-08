

const ProductoTablaItem = ({producto}) => {
    return(
        <tr>
            <td className="tabla__title">{producto.name}</td>
            <td><img className="tabla__img" src={producto.img} alt=""/></td>
            <td className="tabla__price">{producto.price}$</td>
        </tr>
    )
}

export default ProductoTablaItem;
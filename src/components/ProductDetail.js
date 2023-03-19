import ItemCount from "./Contador";

const productDetail = ({name, img, id, stock}) => {
    return(
        <article>
            <h1>{name}</h1>
            <div>
                <img src={img} style={{width: "400px"}}/>
            </div>
            <ItemCount stock={stock} id={id}/>
        </article>
    )
}

export default productDetail;

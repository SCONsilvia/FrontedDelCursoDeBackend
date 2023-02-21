const productDetail = ({name, img, id}) => {
    console.log(id);
    return(
        <article>
            <h1>{name}</h1>
            <div>
                <img src={img}/>
            </div>
        </article>
    )
}

export default productDetail;

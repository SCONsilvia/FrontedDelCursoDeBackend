import {Navigate} from "react-router-dom";

const Category = ({category}) => {

    return(
        <a href={`/Historial/${category.id}`}>
            <article className="unCategory">
                    <h2 className="unCategory__title">{category.name}</h2>
            </article>
        </a>
    )
}

export default Category;

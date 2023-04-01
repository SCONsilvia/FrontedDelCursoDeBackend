
import Button from "./Button";
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <nav className = "navbar">
            <ul className = "navbar__lista">
                <Link to="/Historial/all"><Button>Ver Productos</Button></Link>
                <Link to="/"><Button >Crear Productos</Button></Link>
                <Link to="/inicioDeSesion"><Button >Iniciar Session</Button></Link>
                <Link to="/User"><Button >Perfil</Button></Link>
                <Link to="/newLogin"><Button >Registrarse</Button></Link>
                <Link to="/carrito"><Button >Carrito</Button></Link>
                <Link to="/categoria"><Button >Crear Categoria</Button></Link>
                <Link to="/chat"><Button >Chat</Button></Link>
            </ul>
        </nav>
    )
}

export default Navbar;
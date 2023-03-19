
import Button from "./Button";
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <nav className = "navbar">
            <ul className = "navbar__lista">
                <Link to="/Historial"><Button>Historial</Button></Link>
                <Link to="/"><Button >Productos</Button></Link>
                <Link to="/inicioDeSesion"><Button >Iniciar Session</Button></Link>
                <Link to="/User"><Button >Perfil</Button></Link>
                <Link to="/newLogin"><Button >Registrarse</Button></Link>
                <Link to="/carrito"><Button >Carrito</Button></Link>
            </ul>
        </nav>
    )
}

export default Navbar;

import Navbar from './Navbar';

const Header = () => {
    /* const {cart} = useContext(CartContext); */

    return (
        <header className="header">
            <h1>Eccomerce</h1>
            <Navbar />
            {/* {cart.length > 0 ? <Link to={"/cart"} ><CartWidget/></Link> : null} */}
        </header>
    )
}

export default Header
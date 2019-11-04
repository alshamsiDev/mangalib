import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/" >Home</Link>
                <ul>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/CartPage">My cart</Link></li>
                    {/* <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
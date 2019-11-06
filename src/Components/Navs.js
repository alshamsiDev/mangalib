import React from 'react';
import { Link } from 'react-router-dom'
const Navs = () => {
    return (
        <nav className=" navbar navbar-expand-lg p-3 p-3 mb-2 bg-dark">
            <Link className="navbar-brand text-white" to="/">Home</Link>
            <Link className="navbar-brand text-white" to="/CartPage">myCart </Link>
            <Link className="navbar-brand text-white" to="/Comments">comment</Link>
        </nav>
    )
}

export default Navs;
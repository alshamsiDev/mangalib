import React from 'react';
import { Link } from 'react-router-dom'
const Navs = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/"><span className="material-icons md-36">menu_book</span>logo </Link>


            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {/* <li className="nav-item active"> */}
                    {/* <Link className="nav-link" to="/">Home <span className="material-icons md-36">menu_book</span></Link> */}
                    {/* </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/CartPage">Cart<li className="material-icons md-36">shopping_cart</li></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Comments"><i class="material-icons">feedback</i> feedback </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}




export default Navs;
import React from 'react';
import { Link } from 'react-router-dom'
const Navs = () => {
    return (
        <nav className="navbar navbar-expand-lg p-3 p-3 mb-2 bg-dark ">
            <Link className="navbar-brand text-white" to="/">Home</Link>
            <Link className="navbar-brand text-white" to="/CartPage">myCart </Link>
            <Link className="navbar-brand text-white" to="/search">Search</Link>

        </nav>
        // <>

        //         <Link className=""to="/">Home</Link>
        //         <Nav className="mr-auto">
        //             <Link to="/CartPage">Search</Link>
        //         </Nav>
        //         {/* <Form inline>
        //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //             <Button variant="outline-info">Search</Button>
        //         </Form> */}
        //     </Navbar>
        //     <br />
        // </>
        // <nav>
        //     <div>
        //         <Link to="/" >Home</Link>
        //         <ul>
        //             <li><Link to="/search">Search</Link></li>
        //             <li><Link to="/CartPage">My cart</Link></li>
        //             {/* <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li> */}
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default Navs;
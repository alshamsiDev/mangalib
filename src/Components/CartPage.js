import React from 'react'

const CartPage = (props) => {
    
    const allCart = props.carts.map((anime, index) => {
        return (
            // <div key={index}>
            //     <img src={anime.image_url} alt={anime.title} />
            //     <h1>{anime.title}</h1>
            //     <button onClick={() => props.removeAnime(anime)}>Remove item</button>
            // </div>
            <div key={index} className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={anime.image_url} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{anime.title}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                
            </div>
            <button className="btn btn-warning" onClick={() => props.removeAnime(anime)}>Remove item</button>
        </div>
        )
    });
    const showCarts = () => {
        if (allCart.length <= 0) {
            return <h1>Empty</h1>
        } else {
            return allCart;
        }
    }
    return (
        <>
        <div className="wrapper">
            {showCarts()}
        </div>
        < button type="button" className="btn btn-danger" onClick={() => props.clearAllAnime()} > Clear all items! </button>
        </>
    )
}
export default CartPage;
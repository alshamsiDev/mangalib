import React from 'react'

const CartPage = (props) => {
    const allCart = props.carts.map((anime, index) => {
        return (
            <div>
                <img src={anime.image_url} alt={anime.title} />
                <h1>{anime.title}</h1>
                <button onClick={() => props.removeAnime(anime)}>Remove item</button>
            </div>
        )
    });
    const showCarts = () => {
        if (allCart.length <= 0) {
            return <h1>Empty</h1>
        } else {
            return allCart
        }
    }
    return (
        <div>
            {showCarts()}
            < button onClick={() => props.clearAllAnime()} > Clear all items! </button>

        </div>

    )
}
export default CartPage;
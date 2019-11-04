import React from 'react'

const CartPage = (props) => {
    const allCart = props.carts.map((anime, index) => {
        return (
            <>
                <img src={anime.image_url} alt={anime.title} />
                <h1>{anime.title}</h1>
                <button onClick={()=> props.removeAnime(anime)}>Remove item</button>
            </>
        )
    });
    return (
        <div>
            {allCart}
            <button onClick={() => props.clearAllAnime()} >Delete all </button>
        </div>
    )
}
export default CartPage;
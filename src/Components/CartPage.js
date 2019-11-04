import React from 'react'

const CartPage = (props) => {
    const allCart = props.carts.map((item, index) => {
        return (
            <>
            <li key={index} onClick={() => props.removeAnime(item)}>{item.title}</li>
            <h1>jk</h1>
            </>
        )
            
    });
    return (
        <div>
            {allCart}
        </div>
    )
}
export default CartPage;
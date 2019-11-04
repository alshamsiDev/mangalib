import React from 'react'

const CartPage = (props) => {
    const allCart = props.carts.map((item, index) => {
        return <li key={index} onClick={() => props.removeAnime(item)}>{item.title}</li>
    });
    return (
        <div>
            {allCart}
        </div>
    )
}
export default CartPage;
import React from 'react'

const CartPage = (props) => {

    const allCart = props.carts.map((item, index) => {
        return <li key={index}>{item.title}</li>
    });
    return (

        <div>
            {allCart}
        </div>
    )
}

export default CartPage

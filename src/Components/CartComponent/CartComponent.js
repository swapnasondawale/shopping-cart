import React from 'react';
import addToCart from '../Assets/add-to-cart.png'
import './CartComponent.css'
function CartComponent(props) {
    componentWillMount() 
    return (
        <>
            <div className="addToCart-container">
                <div className="addToCart-wrapper">
                    <img src={addToCart} alt="addtocart" />
                    <span className="cart-Count">{props.data.length}</span>
                </div>
            </div>
        </>
    )
}

export default CartComponent;
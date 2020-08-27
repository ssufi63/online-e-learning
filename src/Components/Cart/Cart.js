import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div class="cart">
            <h4>Purchase Summery</h4>
            <p>Course Purchased : {cart.length}</p>
            <h4>Total amount : {totalPrice}</h4>
        </div>
    );
};

export default Cart;
import React from 'react';


const Cart = (props) => {
    const cart = props.cart
    console.log(cart);
    const totalPrice=cart.reduce( (total,course)  => total+course.Fee,0)
    
    return (
        <div>
            <h2> Course taken: {cart.length} </h2>
    <h4 > Total Course Fee :{totalPrice}</h4>
   
    
    
        </div>
    );
};

export default Cart;
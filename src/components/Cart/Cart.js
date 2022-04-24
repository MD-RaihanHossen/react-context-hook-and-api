import React from 'react';
import "./Cart.css"

const Cart = ({ cart, handleRemovetoCart }) => {
    //conditinal randering options 
    //1. elemenst variable
    //2. ternary oparetor condition ? true : false
    //3. && oparetor (shothand){true}
    //4. || or oparetor {false}
    let command
    if(cart.length === 0 ){
        command = <div>
            <p>this al list one items...</p>
            <span>tumi onek kipta</span>
        </div>
    }
    else if(cart.length === 1){
        command = <p>please adding mor items</p>
    }
    else{
        command = <p>thanks for addding</p>
    }
    return (
        <div className='cart-delets'>
            <h3>Item Selected {cart.length}</h3>
            
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button className='remove-button' onClick={()=> handleRemovetoCart(tShirt)}>X
                    </button>
                </p>)
            }
            {cart.length === 0 || <p className='oreng'>YAY! this is qunic</p>}
            {cart.length === 3 && <div className='oreng'>
                <p>tumi ki take gift korba</p>
                </div>}
            {command}
            {cart.length !== 4 ? <p>keep adding</p> : <button className='clear-button'>clear all</button>}
        </div>
    );
};

export default Cart;
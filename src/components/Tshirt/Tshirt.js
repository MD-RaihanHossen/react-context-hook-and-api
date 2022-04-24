import React from 'react';
import './Tshirt.css'

const Tshirt = ({handleAddtoCart, tshirt}) => {
    // const {handleAddtoCart, tshirt} =props 
    const { name, price, img } = tshirt
    return (
        <div className='t-shirt'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3><small>${price}</small></h3>
            <button onClick={()=>handleAddtoCart(tshirt)}  className='boder'>Add To Cart</button>
        </div>
    );
};

export default Tshirt;
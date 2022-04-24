import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    // customhook call kora hoyeche niche
    const [tshirts, setTshirts] = useTshirts()

    //niche cart ta and setCart a man set kora hoyeche copy kora hoyeche 
    const [cart, setCart] = useState([])
    console.log(cart)

    //oporer useStarte tai jai cart tai ache sheta copy kore and parameter hishebe jei cart paichi seta ak sathe newCart a add man baniye setCart set kora deya   
    const handleAddtoCart = (seletctItems) => {
        const exists = cart.find(tShirt => tShirt.id === seletctItems.id)
        if (!exists) {
            const newCart = [...cart, seletctItems]
            setCart(newCart)
        }
        else{
            alert('id alredy adding')
        }

    }

    //Tshater.id sathe seletcItems.id   jeigula milbe sehi gula vabe baki gule amake deo 
    const handleRemovetoCart = (seletctItems) => {
        const rest = cart.filter(tShirt => tShirt.id !== seletctItems.id)
        setCart(rest)
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt.id}
                        tshirt={tshirt}
                        handleAddtoCart={handleAddtoCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    key={cart.id}
                    handleRemovetoCart={handleRemovetoCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
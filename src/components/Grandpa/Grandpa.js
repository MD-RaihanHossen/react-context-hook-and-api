import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'


export const RingContext = createContext('ring');


const Grandpa = () => {
    // let housea = 7;
    // const ornament = 'Dimon Ring'
    const [house, setHouse] = useState(7);
    const handleBuyHouse = () =>{
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
            <h1>Grandpa</h1>
           <p> house:{house} <button onClick={handleBuyHouse} className='bg-green-300 border '>buy a house</button></p>
            <section style={{display: 'flex'}}>
            <Father house={house}></Father>
           <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </section>
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;
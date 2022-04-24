import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Spacial = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h3>{house}</h3>
            <button onClick={()=>setHouse(house + 2)}>increace</button>
        </div>
    );
};

export default Spacial;
import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)

    const increacrHandelar =()=>{
        const increace = house + 3;
        setHouse(increace)
    }
    return (
        <div>
            <h5>this is Aunty</h5>
            <h1>{house}</h1>

          <button onClick={increacrHandelar}>3increace</button>
        </div>
    );
};

export default Aunty;
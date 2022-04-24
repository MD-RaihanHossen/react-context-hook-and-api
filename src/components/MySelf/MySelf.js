import React from 'react';
import Spacial from '../Spacial/Spacial';

const MySelf = ({house}) => {
    return (
        <div>
            <h1>this is me </h1>
            house{house}
            <Spacial></Spacial>
        </div>
    );
};

export default MySelf;
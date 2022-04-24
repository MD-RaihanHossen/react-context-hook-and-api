import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div className='father'>
            <h1>this is father</h1>
            house:{house}
            <div style={{display: 'flex'}}>
            <Brother house={house}></Brother>
            <MySelf house={house}></MySelf>
            <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;
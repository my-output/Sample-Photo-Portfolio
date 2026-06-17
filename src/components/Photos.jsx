import React from 'react';
import './card.css';

function Photos({ src }) {
    return (
        <div className='card'>
            <img src={src} alt="Pictures" />
        </div>
    );
}

export default Photos
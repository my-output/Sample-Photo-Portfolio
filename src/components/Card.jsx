import React from 'react';
import Photos from './Photos';
import './card.css';
import profileImg from '../assets/pots.jpeg'

function Card() {
    return (
        <article className='card'>
            <h3>About Me?</h3>
            <p>Hi! I'm someone crazy about photography!</p>
        </article>
    );
}

export default Card;
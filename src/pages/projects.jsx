import React from 'react';
import './projects.css';
import Photos from '../components/Photos.jsx';
import img1 from '../assets/beach-house.jpeg';
import img2 from '../assets/surfboards.png';
import img3 from '../assets/days.jpeg';
import img4 from '../assets/dayshadow.jpeg';
import img5 from '../assets/motion.jpeg';
import img6 from '../assets/ferns.jpeg';
import img7 from '../assets/flowers.jpeg';
import img8 from '../assets/leaf.jpeg';

export default function Projects() {
    return (
        <>
        <body>
            <article className='summer'>
                <h2>SUMMER</h2>
                <div className='first'>
                    <section className='row1'>
                        <Photos src={img1} />
                        <Photos src={img2} />
                    </section>
                    <section className='row2'>
                        <Photos src={img3} />
                        <Photos src={img4} />
                    </section>
                </div>
            </article>
            <article>
                <h2>NATURE</h2>
                <div className='second'>
                    <section className='row3'>
                        <Photos src={img5} />
                        <Photos src={img6} />
                    </section>
                    <section className='row4'>
                        <Photos src={img7} />
                        <Photos src={img8} />
                    </section>
                </div>
            </article>
        </body>
            
            
        </>
    );
}
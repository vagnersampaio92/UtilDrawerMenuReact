import React from 'react';
import './Backdrop.css';

const Backdrops=props=>(
    <div className='backdrops' onClick={props.click}/>
);
export default Backdrops;
import React from 'react';
import './Generic-search.css';
import image from './Bg.png';

const Generic = () => {
    const style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.7',
    };
    return (
        <>
            <div className="search-bar-container-dark" style={style}>
                <input type="text" placeholder="Search Generic Medicine Here..." className="search-input" />
                <button className="search-button">
                    <b>Search</b>
                    <i className="fa fa-search" />
                </button>
            </div>
        </>
    );
};

export default Generic;
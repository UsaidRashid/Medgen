import React from 'react';
import './Generic-search.css';

export default function Generic() {

    return (
        <div>
            <div className='image'>
                <div className="search-bar-container">
                    <input type="text" placeholder="Search Generic Medicine Here..." className="search-input" />
                    <button className="search-button">
                        <b>Search</b>
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        </div>
    );
};

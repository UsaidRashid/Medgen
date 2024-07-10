import React from 'react';
import '../CSS/BrandedSearch.css';

export default function BrandedSearch(){
    return (
        <div>
            <div className='image'>
                <div className="search-bar-container">
                    <input type="text" placeholder="Search Branded Medicine Here..." className="search-input" />
                    <button className="search-button">
                        <b>Search</b>
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        </div>
    );
};

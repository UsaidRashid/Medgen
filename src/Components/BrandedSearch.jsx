import React from 'react';
import '../CSS/BrandedSearch.css';
import { useNavigate } from 'react-router-dom';

export default function BrandedSearch(){
    const navigate = useNavigate();

    const openCompareList = (e) =>{
        e.preventDefault();
        navigate('/generic-compare-list');
    }

    return (
        <div>
            <div className='image'>
                <div className="search-bar-container">
                    <input type="text" placeholder="Search Branded Medicine Here..." className="search-input" />
                    <button className="search-button" onClick={openCompareList}>
                        <b>Search</b>
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        </div>
    );
};

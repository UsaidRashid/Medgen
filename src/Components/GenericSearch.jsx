import React from 'react';
import '../CSS/GenericSearch.css';
import { useNavigate } from 'react-router-dom';

export default function GenericSearch() {
    const navigate = useNavigate();

    const openCompareList = (e) =>{
        e.preventDefault();
        navigate('/branded-compare-list');
    }

    return (
        <div>
            <div className='image'>
                <div className="search-bar-container">
                    <input type="text" placeholder="Search Generic Medicine Here..." className="search-input" />
                    <button className="search-button" onClick={openCompareList}>
                        <b>Search</b> 
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        </div>
    );
};

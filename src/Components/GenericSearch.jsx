import React from 'react';

const myStyle1 = {
    width: "100vw",
    height: "100vh",
    background: "linear - gradient(rgba(254, 251, 248, 0.628), rgba(254, 251, 248, 0.667)), url('../Images/Bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center"
};

const myStyle2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
};

const myStyle3 = {
    width: "50%",
    padding: "10px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    boxShadow: "7px 7px 7px rgba(0, 0, 0, 0.5)"
};

const myStyle4 = {
    height: "45px",
    width: "90px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "50px",
    boxShadow: "7px 7px 7px rgba(0, 0, 0, 0.5)",
};


export default function GenericSearch() {

    return (
        <div>
            <div className='image' style={myStyle1}>
                <div className="search-bar-container" style={myStyle2}>
                    <input type="text" placeholder="Search Generic Medicine Here..." className="search-input" style={myStyle3}/>
                    <button className="search-button" style={myStyle4}>
                        <b>Search</b>
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        </div>
    );
};

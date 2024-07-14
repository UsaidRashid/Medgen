import React from 'react';
import background from '../Images/Bg21.png';

const myStyle2 = {
    marginLeft: "1rem",
    alignItems: "center",
    height: "100vh"
};

const myStyle3 = {
    marginTop: "19rem",
    marginLeft: "6rem",
    marginBottom: "5rem",
    width: "42%",
    padding: "10px",
    fontSize: "18px",
    border: "2px solid black",
    borderRadius: "9rem",
    boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)"
};

const myStyle4 = {
    height: "50px",
    width: "150px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5rem",
    cursor: "pointer",
    marginTop: "50px",
    marginLeft: "50px",
    boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.5)",
    fontSize: "21px",
};


export default function GenericSearch() {
    return (
        <div>
            <div className='image' style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "80vh", backgroundPosition: "right", height: '100vh', backgroundColor: "white" }}>
                <div>
                    <form action="/branded-compare-list" style={myStyle2}>
                        <input type="text" placeholder="Search Generic Medicine Here..." className="search-input" style={myStyle3} />
                        <button className="search-button" style={myStyle4}>
                            <b>Search</b>
                            <i className="fa fa-search" />
                        </button>
                        {/* <h1 style={{ marginLeft: "90px", color: "black" }}>Please enter the name of Generic Medicine</h1> */}
                    </form>
                </div>
            </div>


        </div>


    );
};

import React from 'react';
import background from '../../Images/Bg21.png';
import { useTypewriter } from 'react-simple-typewriter';

const myStyle2 = {
    marginLeft: "1rem",
    alignItems: "center",
    height: "100vh"
};

const myStyle3 = {
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


export default function BrandedSearch() {
    const [text] = useTypewriter({
        words: ['Branded Medicine Name', 'Find Best Medicines'],
        loop: {},
        delaySpeed: 550,
    });

    return (
        <div>
            <div className='image' style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "80vh", backgroundPosition: "right", height: '100vh', backgroundColor: "white" }}>
                <div>
                    <h1 style={{ color: "White"}}>.</h1>
                    <h1 style={{ color: "Black", margin: "150px 0px 0px 310px"}}>Please Enter...</h1>
                    <h1 style={{ color: "#2380ea", margin: "0px 0px 0px 230px"}}>/{text}/</h1>
                    </div>
                    <form action="/generic-compare-list" style={myStyle2}>
                        <input type="text" placeholder="Enter Branded Medicine Here..." className="search-input" style={myStyle3} />
                        <button className="search-button" style={myStyle4}>
                            <b>Search</b>
                            <i className="fa fa-search" />
                        </button>
                    </form>
            </div>


        </div>


    );
};

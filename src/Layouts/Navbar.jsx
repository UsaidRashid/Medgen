import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";

export default function Navbar() {
    return (
        <>
            <div className="ho">
                <nav class="navbar navbar-expand-lg bg-body-primary">
                    <div class="container-fluid">    
                        <a class="navbar-brand" href="/a"><img src={logo}/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item home">
                                    <a class="nav-link active" aria-current="page" href="/a">Home</a>
                                </li>
                               
                                <span>
                                <li className="search">
                                    <form class="d-flex" role="search">
                                        <input class="form-control me-2" type="search" placeholder="Search Generic Medicine here..." aria-label="Search" size={30} />
                                        <button class="btn btn-outline-dark" type="submit">Search</button>
                                    </form>
                                </li>
                                </span>
                                <span>
                                <li class="nav-item locator">
                                    <a class="nav-link" href="/a">Store Locator</a>
                                </li>
                                </span>

                                <li class="nav-item compare">
                                    <a class="nav-link" href="/a" aria-disabled="true">Compare Medicine</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
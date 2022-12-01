import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{height: '118px'}} class="navbar navbar-expand-lg bg-dark shadow">
            <div class="container-fluid px-5">
                <Link class="navbar-brand text-light" to="/">National Democratic Institute</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav ml-auto w-100 justify-content-end ps-5">
                        <li class="nav-item">
                            <Link to="/" class="nav-link text-light active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link text-light" >About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="contact" class="nav-link text-light">Contact Us</Link>
                        </li>
                    </ul>

                    <ul class="nav navbar-nav ml-auto w-100 justify-content-end ps-5">
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Signup</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        
    );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-small.svg';


function Navbarbefore() {
    return (
        <div style={{ height: '45px' }} className="navbar col-md-12 navbar-expand-lg">
            <div style={{ alignItems: 'center' }} className="nav navbar-nav col-md-2 mx-2">
                <img style={{ height: '30px', alignItems: 'center' }} src={logo} alt="..." />
            </div>
            <div style={{ height: '45px', backgroundColor: '#2F4798' }} class="col-md-6 ">
                <div class="container-fluid">
                    {/* <Link class="nav navbar-brand text-light" to="/">National Democratic Institute</Link> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse col-md-6" id="navbarSupportedContent">
                        <Link class="navbar-brand text-light" to="/">National Democratic Institute</Link>
                    </div>
                </div>
            </div>
            <div style={{ height: '45px', backgroundColor: '#2F4798' }} class="col-md-4">
                <div class="container-fluid">
                    {/* <Link class="nav navbar-brand text-light" to="/">National Democratic Institute</Link> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse col-md-6" id="navbarSupportedContent">
                        <Link class="navbar-brand text-light" to="/">National Democratic Institute</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbarbefore;
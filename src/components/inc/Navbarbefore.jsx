import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../images/National_Democratic_Institute_main.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// import { fab } from '@fortawesome/free-brands-svg-icons'
//   import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


function Navbarbefore() {
    return (
        <div style={{ height: '55px' }} className="navbar col-md-12 navbar-expand-lg">
            <div style={{ alignItems: 'center' }} className="nav navbar-nav ps-5 col-md-2 mx-2">
                <img style={{ height: '40px', alignItems: 'center' }} src={logo} alt="..." />
            </div>
            <div style={{ height: '55px', backgroundColor: '#2F4798' }} class="col-md-6 ">
                <div class="container-fluid">
                    {/* <Link class="nav navbar-brand text-light" to="/">National Democratic Institute</Link> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <div class="collapse navbar-collapse col-md-6" id="navbarSupportedContent">
                        <Link class="navbar-brand text-light" to="/">National Democratic Institute</Link>
                    </div> */}
                </div>
            </div>
            <div style={{ height: '55px', backgroundColor: '#2F4798' }} class="col-md-4">
                <div class="d-flex align-items-center">
                    <button  style={{height: '55px', backgroundColor: '#4B62BE', color: '#fff', textDecoration: 'none', borderRadius: '0px'}} type="button" class="btn btn-link px-5 me-2">
                        Login
                    </button>
                    <button style={{height: '55px', backgroundColor: '#4B62BE', color: '#fff', textDecoration: 'none', borderRadius: '0px'}} type="button" class="btn btn-link px-4 me-2">
                        Sign up for free
                    </button>
                    <a class="btn btn-dark mx-1 px-3" href="https://facebook.com/ndi" role="button">
                        <FaFacebook />
                    </a>
                    <a class="btn btn-dark mx-1 px-3" href="https://twitter.com/ndi" role="button">
                        <FaTwitter />
                    </a>
                    <a class="btn btn-dark mx-1 px-3" href="https://instagram.com/ndi" role="button">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Navbarbefore;

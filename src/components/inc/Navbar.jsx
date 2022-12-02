import React from 'react';
import { Link } from 'react-router-dom';
import NDI_Logo from '../images/National_Democratic_Institute.png'

function Navbar() {
    return (
        <div style={{ height: '118px', backgroundColor: '#4B62BE' }} class="navbar navbar-expand-lg ">
            <div class="container-fluid px-5">

                <Link class="navbar-brand text-light" to="/">
                    <div >
                        
                    </div>
                    <p className="image-cropper"><img className='profile-pic' style={{ maxWidth: '200px', backgroundColor: '#fff' }} src={NDI_Logo} alt="..." /> National Democratic Institute</p>
                </Link>
            </div>
        </div>

    );
}

export default Navbar;
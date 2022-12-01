import React from 'react';
import VMC from './inc/Vmc';
import {Link} from 'react-router-dom'
import Service4 from '../images/services4.jpg';
import Service2 from '../images/services2.jpg';
import Service5 from '../images/services5.jpg';


function Aboutus() {
    return (
        <div>
            <section className='py-4 bg-info'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className='float-end'>Home / About Us</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-bottom">
                <div className="container">
                    <h5 className='main-heading'>Our Company</h5>
                    <div className="underline"></div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </section>
            {/* Our vision, mission and values */}
            <VMC />
            {/* Our Services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 ">
                            <div className='card shadow'>
                                <img src={Service4} className="w-100 border-bottom" alt='Services' />
                                <div className='card-body'>
                                    <h6>Services 1</h6>
                                    <div className="underline"></div>
                                    <p className='p1'>
                                        remaining essentially unchanged. It was popularised in the 1960s with the release.
                                    </p>
                                    <Link to="/services" className='btn btn-link'>Read More</Link>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-4 ">
                            <div className='card shadow services-card'>
                                <img src={Service2} className="w-100 border-bottom" alt='Services' />
                                <div className='card-body'>
                                    <h6>Services 2</h6>
                                    <div className="underline"></div>
                                    <p className='p1'>
                                        remaining essentially unchanged. It was popularised in the 1960s with the release.
                                    </p>
                                    <Link to="/services" className='btn btn-link'>Read More</Link>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-4 ">
                            <div className='card shadow'>
                                <img src={Service5} className="w-100 border-bottom" alt='Services' />
                                <div className='card-body'>
                                    <h6>Services 3</h6>
                                    <div className="underline"></div>
                                    <p className='p1'>
                                        remaining essentially unchanged. It was popularised in the 1960s with the release.
                                    </p>
                                    <Link to="/services" className='btn btn-link'>Read More</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Aboutus;
import React from 'react';
import Slider from "../inc/Slider";
import { Link } from 'react-router-dom';
import VMC from "./inc/Vmc";
import Service4 from '../images/services4.jpg';
import Service2 from '../images/services2.jpg';
import Service5 from '../images/services5.jpg';
import Footer from '../inc/Footer';

function Home() {
    return (
        <div>
            <Slider />
            {/* Our vision, mission and values */}
            {/* <VMC /> */}

            {/* Our Services */}
            <section className='col-md-12'>
                <div className="row">
                    <div className='card accelerated col-md-4 card1 shadow'>
                        <div className='card-body'>
                            {/* <img src={Service4} className="w-100 border-bottom" alt='Services' /> */}
                            {/* <div>
                                <h6>Services 1</h6>
                                <p className="underline float-end"></p>
                            </div> */}

                            <Link class="whatis__link" to="/About">Explore data across <strong>56 indicators</strong></Link> 2.3 million observations
                            {/* <p>
                                remaining essentially unchanged. It was popularised in the 1960s with the release.
                            </p>
                            <Link to="/services" className='btn btn-link'>Read More</Link> */}
                        </div>
                    </div>


                    <div className='card col-md-4 accelerated card2 shadow services-card'>
                        <div className='card-body'>
                            {/* <img src={Service2} className="w-100 border-bottom" alt='Services' /> */}
                            <Link class="whatis__link" to="/Infographs">Browse data across <strong>23 sectors</strong></Link>
                            {/* <div>
                                <h6>Services 2</h6>
                                <p className="underline float-end"></p>
                            </div>

                            <p className='pt-4'>
                                remaining essentially unchanged. It was popularised in the 1960s with the release.
                            </p>
                            <Link to="/services" className='btn btn-link'>Read More</Link> */}
                        </div>
                    </div>

                    <div className='card col-md-4 accelerated card3 shadow'>
                        <div className='card-body'>
                            {/* <img src={Service5} className="w-100 border-bottom" alt='Services' /> */}

                            <Link class="whatis__link" to="/services3">Browse data across <strong>48 occupations</strong></Link>
                            {/* <div>
                                <h6>Services 3</h6>
                                <p className="underline float-end"></p>
                            </div>
                            <p className='p1'>
                                remaining essentially unchanged. It was popularised in the 1960s with the release.
                            </p>
                            <Link to="/services" className='btn btn-link'>Read More</Link> */}
                        </div>
                    </div>
                    <div className='card accelerated col-md-4 card1 hover-zoom shadow'>
                        <div className='card-body'>
                            {/* <img src={Service4} className="w-100 border-bottom" alt='Services' /> */}
                            <Link class="whatis__link" to="/services4">Explore data for <strong>28 countries</strong></Link>
                            {/* <div>
                                <h6>Services 1</h6>
                                <p className="underline float-end"></p>
                            </div>
                            <p>
                                remaining essentially unchanged. It was popularised in the 1960s with the release.
                            </p>
                            <Link to="/services" className='btn btn-link'>Read More</Link> */}
                        </div>
                    </div>


                    <div className='card col-md-4 accelerated card2 shadow services-card'>
                        <div className='card-body'>
                            {/* <img src={Service2} className="w-100 border-bottom" alt='Services' /> */}
                            <Link class="whatis__link" to="/services5">Access the analysis of Cedefop’s <strong>online job advertisement</strong> data.</Link>
                            {/* <div>
                                <h6>Services 2</h6>
                                <p className="underline float-end"></p>
                            </div>

                            <p className='pt-4'>
                                remaining essentially unchanged. It was popularised in the 1960s with the release.
                            </p>
                            <Link to="/services" className='btn btn-link'>Read More</Link> */}
                        </div>
                    </div>

                    <div className='card col-md-4 accelerated card3 shadow'>
                        <div className='card-body'>
                            {/* <img src={Service5} className="w-100 border-bottom" alt='Services' /> */}
                            <Link class="whatis__link" to="/services6">Read <strong>89</strong> curated <strong>data insights</strong></Link>
                            {/* <div>
                                <h6>Services 3</h6>
                                <p className="underline float-end"></p>
                            </div>
                            <p className='p1'>
                                remaining essentially unchanged. It was popularised in the 1960s with the release.
                            </p>
                            <Link to="/services" className='btn btn-link'>Read More</Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;

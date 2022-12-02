import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartArea, FaHome, FaInfo, FaMap, FaPoll, FaVoteYea } from 'react-icons/fa';

function Navbarbefore() {
    return (
        <section className='bg-white shadow'>
            <div className="container container1 col-md-12">
                {/* <!-- Tabs navs --> */}
                <ul style={{ height: '118px' }} class="nav nav-tabs" id="ex-with-icons" role="tablist">
                    <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                        <Link  to="/" style={{ height: '118px' }} class="nav-link active"> <FaHome /> <br /> <p>Home</p></Link>
                    </li>
                    <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                        <Link  to="/about" style={{ height: '118px' }} class="nav-link" id="ex-with-icons-tab-2" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"> <FaMap /> <br /> <p>Population</p></Link>
                    </li>
                    <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                        <Link style={{ height: '118px' }} class="nav-link" id="ex-with-icons-tab-3" to="/Infographs" role="tab"
                            aria-controls="ex-with-icons-tabs-3" aria-selected="false"><FaVoteYea /> <br /> <p>Voters</p> </Link>
                    </li>
                    <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                        <Link style={{ height: '118px' }} class="nav-link" id="ex-with-icons-tab-2" to="/story" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaInfo /> <br /> Information</Link>
                    </li>
                    <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                        <Link style={{ height: '118px' }} class="nav-link" id="ex-with-icons-tab-2" to="/contact" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaPoll /> <br /> Contact Us</Link>
                    </li>
                    <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                        <Link style={{ height: '118px' }} class="nav-link" id="ex-with-icons-tab-2" data-bs-toggle="tab" to="/contact" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaChartArea /> <br /> Infographics</Link>
                    </li>
                </ul>
                {/* <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand" href="#">Navbar</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                                    <a style={{ height: '118px' }} class="nav-link active" id="ex-with-icons-tab-1" data-bs-toggle="tab" href="#ex-with-icons-tabs-1" role="tab"
                                        aria-controls="ex-with-icons-tabs-1" aria-selected="true"> <FaHome /> <br /> <p>Home</p></a>
                                </li>
                                <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                                    <a style={{ height: '118px' }} class="nav-link" id="ex-with-icons-tab-2" data-bs-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"> <FaMap /> <br /> <p>Population</p></a>
                                </li>
                                <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                                    <a style={{ height: '118px' }} class="nav-link" id="ex-with-icons-tab-3" data-bs-toggle="tab" href="#ex-with-icons-tabs-3" role="tab"
                                        aria-controls="ex-with-icons-tabs-3" aria-selected="false"><FaVoteYea /> <br /> <p>Voters</p> </a>
                                </li>
                                <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                                    <a style={{ height: '118px' }} class="nav-link" id="ex-with-icons-tab-2" data-bs-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaInfo /> <br /> Information</a>
                                </li>
                                <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                                    <a style={{ height: '118px' }} class="nav-link" id="ex-with-icons-tab-2" data-bs-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaPoll /> <br /> Analysis</a>
                                </li>
                                <li style={{ height: '118px' }} class="nav-item col-md-2" role="presentation">
                                    <a style={{ height: '118px' }} class="nav-link" id="ex-with-icons-tab-2" data-bs-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaChartArea /> <br /> Infographics</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </div>
        </section>
    );
}

export default Navbarbefore;
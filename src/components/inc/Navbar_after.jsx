import React from 'react';
import { Link } from 'react-router-dom';

function Navbarbefore() {
    return (
        <section className='py-4 bg-white shadow'>
            <div className="container">
                <div className="row">
                    {/* <!-- Tabs navs --> */}
                    <ul class="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="ex-with-icons-tab-1" data-mdb-toggle="tab" href="#ex-with-icons-tabs-1" role="tab"
                                aria-controls="ex-with-icons-tabs-1" aria-selected="true"><i class="fas fa-chart-pie fa-fw me-2"></i>Sales</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="ex-with-icons-tab-2" data-mdb-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                                aria-controls="ex-with-icons-tabs-2" aria-selected="false"><i class="fas fa-chart-line fa-fw me-2"></i>Subscriptions</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="ex-with-icons-tab-3" data-mdb-toggle="tab" href="#ex-with-icons-tabs-3" role="tab"
                                aria-controls="ex-with-icons-tabs-3" aria-selected="false"><i class="fas fa-cogs fa-fw me-2"></i>Settings</a>
                        </li>
                    </ul>
                    {/* <!-- Tabs navs --> */}

                    {/* <!-- Tabs content --> */}
                    <div class="tab-content" id="ex-with-icons-content">
                        <div class="tab-pane fade show active" id="ex-with-icons-tabs-1" role="tabpanel" aria-labelledby="ex-with-icons-tab-1">
                            Tab 1 content
                        </div>
                        <div class="tab-pane fade" id="ex-with-icons-tabs-2" role="tabpanel" aria-labelledby="ex-with-icons-tab-2">
                            Tab 2 content
                        </div>
                        <div class="tab-pane fade" id="ex-with-icons-tabs-3" role="tabpanel" aria-labelledby="ex-with-icons-tab-3">
                            Tab 3 content
                        </div>
                    </div>
                    {/* <!-- Tabs content --> */}
                </div>
            </div>
        </section>
    );
}

export default Navbarbefore;
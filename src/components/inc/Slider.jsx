import React from 'react';
import Slider0 from '../images/slider0.jpg';
import Slider1 from '../images/slider1.jpg';
import Slider2 from '../images/slider2.jpg';
import Slider3 from '../images/slider3.jpg';
import intelli from '../images/home-image.png';

function Slider() {
    return (
        <div class="col-12">
            <div class="row">
                <div class="col-md-4 no-pd">
                    <div class="tool-home-content-image py-5">
                        <img className='py-5' src={intelli} alt="..." />

                    </div>
                </div>
                <div class="col-md-8">
                    <div class="tool-home-content-text">
                        <h1>Welcome</h1>
                        {/* <p>At the end of the exercise, 12,298,944 Nigerians successfully completed the registration as new voters. All along, we have repeatedly assured Nigerians that our process of cleaning up the register is robust. In Nigeria, it involves the recruitment and training of staff and managing the logistics for their deployment to 176,846 polling units spread across 8,809 electoral wards, 774 local areas and 37 states of the federation and the Federal Capital Territory (FCT).</p> */}
                        <p>
                            Since Nigeria's 1999 transition from military to civilian rule, NDI has worked closely with Nigerian groups to support the development of the country's democratic institutions. Since 2011, NDI has supported citizen election observer groups to conduct parallel vote tabulations (PVTs) for two presidential and 19 gubernatorial elections. NDI’s PVT partners have also deployed pre-election observation reporting projects, marking the first time citizen observation groups have collected systematic data in the pre-election phase.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
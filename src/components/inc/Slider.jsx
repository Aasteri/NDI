import React from 'react';
import Slider0 from '../images/slider0.jpg';
import Slider1 from '../images/slider1.jpg';
import Slider2 from '../images/slider2.jpg';
import Slider3 from '../images/slider3.jpg';
import intelli from '../images/Logo-skills-intelligence.png';

function Slider() {
    return (
        // <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        //     <div class="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        //     </div>
        //     <div class="carousel-inner">
        //         <div class="carousel-item active" data-bs-interval="4000">
        //             <img src={Slider0} class="d-block w-100" alt="..." />
        //             <div class="carousel-caption d-none d-md-block">
        //                 <h5>First slide label</h5>
        //                 <p>Some representative placeholder content for the first slide.</p>
        //             </div>
        //         </div>
        //         <div class="carousel-item" data-bs-interval="4000">
        //             <img src={Slider1} class="d-block w-100" alt="..." />
        //             <div class="carousel-caption d-none d-md-block">
        //                 <h5>Second slide label</h5>
        //                 <p>Some representative placeholder content for the first slide.</p>
        //             </div>
        //         </div>
        //         <div class="carousel-item" data-bs-interval="4000">
        //             <img src={Slider2} class="d-block w-100" alt="..." />
        //             <div class="carousel-caption d-none d-md-block">
        //                 <h5>Third slide label</h5>
        //                 <p>Some representative placeholder content for the second slide.</p>
        //             </div>
        //         </div>
        //         <div class="carousel-item" data-bs-interval="4000">
        //             <img src={Slider3} class="d-block w-100" alt="..." />
        //             <div class="carousel-caption d-none d-md-block">
        //                 <h5>Fourth slide label</h5>
        //                 <p>Some representative placeholder content for the third slide.</p>
        //             </div>
        //         </div>
        //     </div>
        //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Previous</span>
        //     </button>
        //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Next</span>
        //     </button>

        // </div>

        <div class="col-12">
            <div class="row">
                    <div class="col-md-4">
                        <div class="tool-home-content-image">
                            <img src={intelli} alt="..." />

                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tool-home-content-text">
                            <h1>Welcome</h1>
                            <p>Building on over a decade of experience in developing and disseminating skills intelligence, we bring together our analytical and research work to provide better and more synthetic evidence on current and future skills and labour market trends. We use narrative-driven visualisations to help policy makers and other skills intelligence users understand what is trending in occupations, sectors, countries, and skills.</p></div>
                    </div>
            </div>
        </div>
    );
}

export default Slider;
import React, { useState } from 'react';
// import VMC from './inc/Vmc';
// import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

// import { CDBContainer } from 'cdbreact';
// import Service4 from '../images/services4.jpg';
// import Service2 from '../images/services2.jpg';
// import Service5 from '../images/services5.jpg';


function Infographs() {
    const [data] = useState({
        labels: [
            'January',
            'February',
            'March',
            'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
          ],
          datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40, 56, 55, 40, 59, 90, 81, 56, 55,],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
          }, {
            type: 'line',
            label: 'Line Dataset',
            data: [40, 26, 38, 50, 56, 27, 35, 89, 31, 47, 77, 99],
            fill: false,
            borderColor: 'rgb(54, 162, 235)'
          }]
    });

    const [activities] = useState({
        labels: ['Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5', 'Yr 6', 'Yr 7'],
        datasets: [
            {
                label: 'Active',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                data: [65, 59, 90, 81, 56, 55, 40],
                borderRadius: 20,
            },
        ],
    });


    const [pieset] = useState({
        labels: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(52, 179, 241, 0.37)',
                borderColor: 'rgb(194, 116, 161)',
                data: [30, 50, 70, 40, 19, 96, 27, 80],
                transform: 'rotate(-60.25deg)',
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'rgb(71, 225, 167)',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    });

    return (
        <div>
            {/* <section className='py-4 bg-info'>
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
            </section> */}
            {/* Our vision, mission and values */}
            {/* <VMC /> */}
            {/* Our Services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 chart-header">
                            <h3 className="chart-header-in">Nigeria - Voters Progression for 2023 election</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 ">
                            <div className=''>
                                <div className="">
                                    <h3 className="activities mt-5">Voters Activities</h3>
                                    <Line data={data} options={{ responsive: true }} />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5 my-10">
                            {/* <h1>Welcome</h1> */}
                            <p className='voters-chart-text'>
                                Since Nigeria's 1999 transition from military to civilian rule, NDI has worked closely with Nigerian groups to support the development of the country's democratic institutions. Since 2011, NDI has supported citizen election observer groups to conduct parallel vote tabulations (PVTs) for two presidential and 19 gubernatorial elections. NDI’s PVT partners have also deployed pre-election observation reporting projects, marking the first time citizen observation groups have collected systematic data in the pre-election phase.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <div className=''>
                                <h3 className="activities mt-5">Activities</h3>
                                <Bar data={activities} options={{ responsive: true }} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className=''>
                                <h3 className="activities mt-5">Activities</h3>
                                <Pie data={pieset} options={{ responsive: true }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
export default Infographs;



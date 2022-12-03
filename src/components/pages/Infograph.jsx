import React, { useState } from 'react';
// import VMC from './inc/Vmc';
// import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { MDBAccordion, MDBAccordionItem, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import PieChart from "./PieCharts";
import { HorizontalBar } from 'react-chartjs-2';
import { Chart } from "react-google-charts";



let data = [
    ["Task", "Percentage"],
    ["T2P%", 4],
    ["T3P%", 3],
    ["TL%", 1.5],
    ["TO%", 1.5],
    [null, 10]
];
const geodata = [
    ["Country", "Popularity"],
    ["Algeria", 36],
  ["Angola", -8],
  ["Benin", 6],
  ["Botswana", -24],
  ["Burkina Faso", 12],
  ["Burundi", -3],
  ["Cameroon", 3],
  ["Canary Islands", 28],
  ["Cape Verde", 15],
  ["Central African Republic", 4],
  ["Ceuta", 35],
  ["Chad", 12],
  ["Comoros", -12],
  ["Cote d'Ivoire", 6],
  ["Democratic Republic of the Congo", -3],
  ["Djibouti", 12],
  ["Egypt", 26],
  ["Equatorial Guinea", 3],
  ["Eritrea", 15],
  ["Ethiopia", 9],
  ["Gabon", 0],
  ["Gambia", 13],
  ["Ghana", 5],
  ["Guinea", 10],
  ["Guinea-Bissau", 12],
  ["Kenya", -1],
  ["Lesotho", -29],
  ["Liberia", 6],
  ["Libya", 32],
  ["Madagascar", null],
  ["Madeira", 33],
  ["Malawi", -14],
  ["Mali", 12],
  ["Mauritania", 18],
  ["Mauritius", -20],
  ["Mayotte", -13],
  ["Melilla", 35],
  ["Morocco", 32],
  ["Mozambique", -25],
  ["Namibia", -22],
  ["Niger", 14],
  ["Nigeria", 8],
  ["Republic of the Congo", -1],
  ["Réunion", -21],
  ["Rwanda", -2],
  ["Saint Helena", -16],
  ["São Tomé and Principe", 0],
  ["Senegal", 15],
  ["Seychelles", -5],
  ["Sierra Leone", 8],
  ["Somalia", 2],
  ["Sudan", 15],
  ["South Africa", -30],
  ["South Sudan", 5],
  ["Swaziland", -26],
  ["Tanzania", -6],
  ["Togo", 6],
  ["Tunisia", 34],
  ["Uganda", 1],
  ["Western Sahara", 25],
  ["Zambia", -15],
  ["Zimbabwe", -18],
  ["Nigeria", 13],
    
];
export const options = {
    region: "002", // Nigeria
    colorAxis: { colors: ["#00853f", "black", "#e31b23", "green"] },
    // backgroundColor: "#81d4fa",
    // datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5",
  };
function Infographs() {
    const [horizontalBar] = useState({
        labels: ['Male', 'Female', 'Under Age', 'Young Adults', 'Adults', 'Aged', 'Unavaillable'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'red',
                borderColor: 'blue',
                data: [70, 60, 50, 40, 30, 20, 10],
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'blue',
                borderColor: 'blue',
                data: [68, 58, 48, 38, 28, 18, 8],
            },
        ],
    });
    return (
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="App">
                            {/* <div className="text-center">
                            <h3>Nigeria — 2023 presidential election</h3>
                        </div> */}
                            <PieChart language="es" data={data} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <MDBAccordion initialActive={1}>
                            <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </MDBAccordionItem>
                        </MDBAccordion>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <h2>Elections in Nigeria — Latest news</h2>
                            <div className='underline'></div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='card shadow'>
                            <div className="card-body card-body1">
                                <h3 className="activities mt-5">Activities</h3>
                                <HorizontalBar data={horizontalBar} options={{ responsive: true }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='card shadow'>
                            <div className="card-body card-body1">
                                <h3 className="activities mt-5">Activities</h3>
                                <HorizontalBar data={horizontalBar} options={{ responsive: true }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 my-5 py-5">
                        <div className='card shadow'>
                            <div className="card-body card-body1">
                                <div className="App">
                                    <Chart chartType="GeoChart" width="100%" height="400px" data={geodata} options={options}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Infographs;



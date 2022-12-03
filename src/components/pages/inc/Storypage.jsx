import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import { PieChart } from "./PieCharts";

let data = [
    ["Task", "Porcentaje"],
    ["T2P%", 4],
    ["T3P%", 3],
    ["TL%", 1.5],
    ["TO%", 1.5],
    [null, 10]
];

export default function StoryPage() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="App">
                            <h1>Hello CodeSandbox</h1>
                            <h2>Start editing to see some magic happen!</h2>
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
                </div>
            </div>
        </section>
    );
}




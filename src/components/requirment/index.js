import React from 'react'
import './style.css';

const Requirment = () => {
    return ( <section className="section-requirment center y-align">
        <h2 className="section-title">
            Get prepared before our call
        </h2>
        <h3 className="section-subTitle">
            Required Documents & Procedures
        </h3>
        <ul className="requirments-list">
            <li>The car must be brought in good working condition</li>
            <li>In case the chassis is not OK, we'll do a registration test (AED 170 is the cost).</li>
            <li>The commission is 5% for GCC cars and 7% for imported cars (minimum commission 1000 AED).</li>
            <li>If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion</li>
            <li>If the car is sold for less than AED 5,000, the company commission is only AED 500.</li>
            <li>For the classic cars, trucks and heavy equipment, you must bring export test only and the commission is 7% (minimum commission 1000 AED).</li>
            <li>For the equipment (generator, scissor lift, electric forklift ..... etc) Tax invoice is required.</li>
            <li>We'll do a comprehensive test (AED 300 is the cost).</li>
        </ul>
        <div className="required-docs center y-align">
        <h2>
            Required Documentation
        </h2>
        <div className="docs-list x-align center">
            <div className="doc-item">
                <h3>Emirates ID</h3>    
            </div>
            <div className="doc-item">
                <h3>Possession certificate</h3>    
                <p>(Dubai certificate or transfer to Dubai)</p>    
            </div>
            <div className="doc-item">
                <h3>Bank account details</h3>    
            </div>
        </div>
        </div>
    </section> );
}
 
export default Requirment;
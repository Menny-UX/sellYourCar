import React from 'react'
import './style.css';

import Doc from "../../assets/images/document.svg"
import Star from "../../assets/images/star.svg"
import Time from "../../assets/images/time.svg"

const Service = () => {
    return ( <section className="service-section center y-align">
        <h2 className="section-title">
            Why use our services?
        </h2>
        <h3 className="section-subTitle">
            We operates 24 hour/7 day-a-week telephone, email & remote support services that is staffed to handle any issue or question
        </h3>
        <div className="services-list-container x-align">
            <div className="service-item">
                <img src={Doc} className="service-icon" alt="document" />
                <div className="service-desc">
                    <h3>Easy Process</h3>
                    <p>We help you save time and effort. We master how to sell a car privately and have simplified the process of selling a vehicle to make it hassle-free.</p>
                </div>
            </div>
            <div className="service-item">
                <img src={Star} className="service-icon" alt="star" />
                <div className="service-desc">
                    <h3>Get The Best Return</h3>
                    <p>Get the most money for your car. Reach serious buyers. Avoid lowball offers. Use our valuation tools for a better price when selling your car.</p>
                </div>
            </div>
            <div className="service-item">
                <img src={Time} className="service-icon" alt="time" />
                <div className="service-desc">
                    <h3>Dedicated Team</h3>
                    <p>Our seller experts are here to help you at every step of the way via email, phone, or chat all the week days! They help you find real buyers for your car and finalize your deal fast.</p>
                </div>
            </div>
        </div>
    </section> );
}
 
export default Service;
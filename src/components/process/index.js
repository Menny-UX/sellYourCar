import React from 'react'
import './style.css';

import bidding from '../../assets/images/bidding.svg'

const Process = () => {
    return ( 
    <section className="process-section x-align">
        <div className="process-desc">
            <h2 className="section-title">
                How it works?
            </h2>
            <h4 className="section-subTitle">
                Sell Your Car in Three Simple Steps
            </h4>
            <div className="process-list-container">
           
                <div className="process-item">
                    <div className="process-text">
                        <div className="process-item-brief">
                            Submit Your Car
                        </div>
                        <div className="process-item-desc">
                            Enter your car details for inspection on Emirates Auction.
                        </div>
                    </div>
                </div>
                <div className="process-item">
                    <div className="process-text">
                        <div className="process-item-brief">
                            Receive Valuation and Offer
                        </div>
                        <div className="process-item-desc">
                            We will check your car and provide you with approved purchase price.
                        </div>
                    </div>
                </div>
                <div className="process-item">
                    <div className="process-text">
                        <div className="process-item-brief">
                            Get Your Payment
                        </div>
                        <div className="process-item-desc">
                            After a price is agreed for your car, we will exchange cash on a day that suits you.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="process-illustration y-align center prefix">
            <img src={bidding} alt="bidding" 
            className="bidding-icon"/>
            <h2 className="bidding-title">
                Your car will be sold by bidding
            </h2>
            <h3 className="bidding-subTitle">
                You set the starting price it will be sold for the highest bidder
            </h3>
        </div>
    </section> );
}
 
export default Process;
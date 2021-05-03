import React from 'react'
import './style.css'

import videoDraft from '../../assets/images/carVideo@2x.png'
import Form from '../startForm';
const Start = () => {
    return ( 
    <section className="section-start" id="Start">
        <div className="start-header y-align">
            <h2 className="section-title">
                Start today!
            </h2>
            <h3 className="section-subTitle">
                You are just one click away from selling your car.
            </h3>
        </div>
        <div className="start-content x-align">
            <div className="start-desc y-align">
                <img className="video-draft"
                src={videoDraft} alt="video"/>
                <h3 className="video-prompt">
                    Why you should sell your car with us?
                </h3>
                <h4 className="video-text">
                    We support you from start to finish
                </h4>
                <p className="video-subText">
                    We have streamlined the process to sell your car online for quick payment to get your free cash offer.
                </p>
                <h4 className="video-text">
                    Ready to sell your car?
                </h4>
            </div>
            <div className="start-Form">
                <Form/>
            </div>
        </div>
    </section> 
    );
}
 
export default Start;
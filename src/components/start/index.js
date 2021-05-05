import React from 'react'
import './style.css'

import videoDraft from '../../assets/images/carVideo@2x.png'
import Form from '../startForm'

import { useTranslation } from 'react-i18next'

const Start = () => {
    const { t, i18n } = useTranslation();

    return ( 
    <section className="section-start" id="Start">
        <div className="start-header y-align">
            <h2 className="section-title">
                {t('start-title')}
            </h2>
            <h3 className="section-subTitle">
                {t('start-subTitle')}
            </h3>
        </div>
        <div className="start-content x-align">
            <div className="start-desc y-align">
                <img className="video-draft"
                src={videoDraft} alt="video"/>
                <h3 className="video-prompt">
                    {t('video-prompt')}
                </h3>
                <h4 className="video-text">
                    {t('video-text01')}
                </h4>
                <p className="video-subText">
                    {t('video-text02')}
                </p>
                <h4 className="video-text">
                    {t('video-text03')}
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
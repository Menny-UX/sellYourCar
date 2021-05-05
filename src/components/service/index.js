import React from 'react'
import './style.css';

import Doc from "../../assets/images/document.svg"
import Star from "../../assets/images/star.svg"
import Time from "../../assets/images/time.svg"

import { useTranslation } from 'react-i18next'

const Service = () => {
    const { t, i18n } = useTranslation();

    return ( 
    <section className="service-section center y-align">
        <h2 className="section-title">
            {t('service-title')}
        </h2>
        <h3 className="section-subTitle">
            {t('service-subTitle')}
        </h3>
        <div className="services-list-container x-align">
            <div className="service-item">
                <img src={Doc} className="service-icon" alt="document" />
                <div className="service-desc">
                    <h3>{t('service01-title')}</h3>
                    <p>{t('service01-text')}</p>
                </div>
            </div>
            <div className="service-item">
                <img src={Star} className="service-icon" alt="star" />
                <div className="service-desc">
                    <h3>{t('service02-title')}</h3>
                    <p>{t('service02-text')}</p>
                </div>
            </div>
            <div className="service-item">
                <img src={Time} className="service-icon" alt="time" />
                <div className="service-desc">
                    <h3>{t('service03-title')}</h3>
                    <p>{t('service03-text')}</p>
                </div>
            </div>
        </div>
    </section> );
}
 
export default Service;
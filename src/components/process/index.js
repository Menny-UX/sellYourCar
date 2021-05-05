import React from 'react'
import './style.css';

import bidding from '../../assets/images/bidding.svg'

import { useTranslation } from 'react-i18next'

const Process = () => {
    const { t, i18n } = useTranslation();

    return ( 
    <section className="process-section x-align">
        <div className="process-desc">
            <h2 className="section-title">
                {t('Process-title')}
            </h2>
            <h4 className="section-subTitle">
                {t('Process-subTitle')}
            </h4>
            <div className="process-list-container">
           
                <div className="process-item">
                    <div className="process-text">
                        <div className="process-item-brief">
                            {t('Process-item01-brief')}
                        </div>
                        <div className="process-item-desc">
                            {t('Process-item01-desc')}
                        </div>
                    </div>
                </div>
                <div className="process-item">
                    <div className="process-text">
                        <div className="process-item-brief">
                            {t('Process-item02-brief')}
                        </div>
                        <div className="process-item-desc">
                            {t('Process-item02-desc')}
                        </div>
                    </div>
                </div>
                <div className="process-item">
                    <div className="process-text">
                        <div className="process-item-brief">
                            {t('Process-item03-brief')}
                        </div>
                        <div className="process-item-desc">
                            {t('Process-item03-desc')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="process-illustration y-align center prefix">
            <img src={bidding} alt="bidding" 
            className="bidding-icon"/>
            <h2 className="bidding-title">
                {t('bidding-title')}
            </h2>
            <h3 className="bidding-subTitle">
                {t('bidding-subTitle')}
            </h3>
        </div>
    </section> );
}
 
export default Process;
import React from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'

const Requirment = () => {
    const { t, i18n } = useTranslation();

    return ( 
    <section className="section-requirment center y-align">
        <h2 className="section-title">
            {t('requirment-title')}
        </h2>
        <h3 className="section-subTitle">
            {t('requirment-subTitle')}
        </h3>
        <ul className="requirments-list">
            <li>{t('requirment-01')}</li>
            <li>{t('requirment-02')}</li>
            <li>{t('requirment-03')}</li>
            <li>{t('requirment-04')}</li>
            <li>{t('requirment-05')}</li>
            <li>{t('requirment-06')}</li>
            <li>{t('requirment-07')}</li>
            <li>{t('requirment-08')}</li>
        </ul>
        <div className="required-docs center y-align">
        <h2>
            {t('required-documents-title')}
        </h2>
        <div className="docs-list x-align center">
            <div className="doc-item">
                <h3>{t('required-documents-01')}</h3>    
            </div>
            <div className="doc-item">
                <h3>{t('required-documents-02')}</h3>    
                <p>{t('required-documents-02-detail')}</p>    
            </div>
            <div className="doc-item">
                <h3>{t('required-documents-03')}</h3>    
            </div>
        </div>
        </div>
    </section> );
}
 
export default Requirment;
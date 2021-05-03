import React from 'react'
import './style.css'

import { Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t, i18n } = useTranslation();

    return ( 
    <section className="hero-section y-align">
        <div className="hero-content">
        <h1 className="section-title">
            {t('Hero-title')}
        </h1>
        <h2 className="hero-text">
            {t('Hero-subTitle')}
        </h2>
            <Button 
            href="#Start" variant="contained"
            size="large" color="primary"
            className="start-btn"
            >
            {t('Hero-btn')}
            <KeyboardArrowDownIcon fontSize="large"></KeyboardArrowDownIcon>
            </Button>
        </div>
    </section> 
    );
}
 
export default Hero;  
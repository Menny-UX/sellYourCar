import React from 'react'
import './style.css'
import Logo from '../../assets/images/Logo.svg'

import Button from '@material-ui/core/Button'

import Facebook from "../../assets/images/Facebook-Light.svg"
import Twitter from "../../assets/images/Twitter-Light.svg"
import Youtube from "../../assets/images/Youtube_Light.svg"
import Instagram from "../../assets/images/Instagram-Light.svg"
import Google from "../../assets/images/Google-Light.svg"

import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t, i18n } = useTranslation();

    return (     
    <footer className="layout-footer x-align">
        <div className="brand-side y-align">
            <img src={Logo} alt="logo" className="footer-logo contain-img"/>
            <div className="brand-slogen">
                {t('footer-slogan')}
            </div>
        </div>
        <div className="socialMedia-side y-align">
            <h3>
                {t('footer-social')}
            </h3>
            <div className="social-list x-align">
            <Button variant="contained" className="social-btn" size="small" color="primary" aria-label="Facebook" target="_blank" href="">
               <img src={Facebook} />
            </Button>
            <Button variant="contained" className="social-btn" size="small" color="primary" aria-label="Twitter" target="_blank" href="">
               <img src={Twitter} />
            </Button>
            <Button variant="contained" className="social-btn" size="small" color="primary" aria-label="Youtube" target="_blank" href="">
               <img src={Youtube} />
            </Button>
            <Button variant="contained" className="social-btn" size="small" color="primary" aria-label="Instagram" target="_blank" href="">
               <img src={Instagram} />
            </Button>
            <Button variant="contained" className="social-btn" size="small" color="primary" aria-label="Google" target="_blank" href="">
               <img src={Google} />
            </Button>
            </div>
        </div>
    </footer> 
    );
}
 
export default Footer;
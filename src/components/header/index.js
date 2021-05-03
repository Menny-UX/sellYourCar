import React from 'react'
import './style.css'
import Logo from '../../assets/images/Logo.svg'

import { Button } from '@material-ui/core'

import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t, i18n } = useTranslation();

    const handleLangChange = () =>{
        let oppLang = i18n.language== "en"? "ar": "en";
        i18n.changeLanguage(oppLang);
    }

    return ( 
    <header className="layout-header center">
        <img src={Logo} alt="Logo" className="header-logo contain-img"/>
        <Button variant="contained" size="large" color="primary"
        onClick={()=>handleLangChange()}
        >
        {i18n.language== "en"? "العربية": "ENG"}
        </Button>
    </header> 
    );
}
 
export default Header;
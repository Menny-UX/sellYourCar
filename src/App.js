import './styles/global.css'
import React, { useState, useEffect } from 'react'

import  Header  from './components/header'
import  Footer  from './components/footer'
import  Hero  from './components/hero'
import  Process  from './components/process'
import  Start  from './components/start'
import  Service  from './components/service'
import  Requirment  from './components/requirment'

import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()
  const [dir, setDir] = useState('ltr')

useEffect(() => {
  let langDir = i18n.language== "en"? "ltr": "rtl";
  setDir(langDir)
}, [t])

  return (
  
      <div className="page-container" dir={dir}>
        <Header/>
        <main className="main">
          <Hero/>
          <Process/>
          <Start/>
          <Service/>
          <Requirment/>
        </main>
        <Footer/>
      </div>
  
  );
}

export default App;

import React from 'react';
import Logo from '../assets/logo.svg';
import Languageoption from './Languages';
import { useTranslation } from 'react-i18next';
import i18next from "i18next"




const Header = () => {
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
      
  }
  return (
  <div className='py-8'>
    <div className="container mx-auto"> 
      <div className='flex justify-between items-center'>
        <a href="#">
          <img src={Logo} alt='' />
        </a>
        <Languageoption onChange={(e)=> handleClick(e)}/>
        <button className='btn btn-sm'>{t('Book a meeting')}</button>
      </div>
    </div>
  </div>
  
  )
};

export default Header;

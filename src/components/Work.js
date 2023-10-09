import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import { useTranslation } from 'react-i18next';
import i18next from "i18next"

const Work = () => {
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }
  return (
  <section className='section z-10' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */ }
         <div>
            <h2 className='h2 leading-tight text-accent'>
            {t('My Latest Work')}
            </h2>
            <p className='max-w-s mb-8 text-[14px]'>
            {t('Work_text')}
            </p>
            <button className='btn btn-sm'>{t('View all projects')}</button>
          </div> 
         {/* image */ }
         <a href="https://car-showcase-pearl-psi.vercel.app/" target='_blank'>         
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */ }
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */ }
            <img className='group-hover:scale-125 transition-all duration-500'src={Img1} alt="" />
             {/* pretitle */ }
             <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>{t('Web Development')}</span>
              </div>
             {/* title */ }
             <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text.white'>Rent a Car</span>
             </div>
          </div> 
          </a>
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-10'
        >
          {/*image*/}
        <a href="https://projects-two-rosy.vercel.app/" target='_blank'> 
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */ }
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */ }
            <img className='group-hover:scale-125 transition-all duration-500'src={Img2} alt="" />
             {/* pretitle */ }
             <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>{t('Web Development')}</span>
              </div>
             {/* title */ }
             <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text.white'> Dashboard</span>
             </div>
          </div> 
          </a>
           {/*image*/}
           <a href="https://restaurant-alpha-beryl.vercel.app/" target='_blank'> 
           <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */ }
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */ }
            <img className='group-hover:scale-125 transition-all duration-500'src={Img3} alt="" />
             {/* pretitle */ }
             <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>{t('Web Development')}</span>
              </div>
             {/* title */ }
             <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text.white'>Restaurant</span>
             </div>
          </div> 
          </a>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;

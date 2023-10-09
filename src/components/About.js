import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsEye } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import i18next from "i18next"


const About = () => {
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
  <section className='section z-10' id='about' ref={ref} >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
         className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
        {/* text */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
         className='flex-1'>
          <h2 className='h2 text-accent'>{t('About Me')}</h2>
          <h3 className='h3 '>{t('About_title1')} </h3>
          <div className='flex flex-row items-center mb-4'>
          <BsEye className='text-[32px] h-full mr-2'/> 
          <h3 className='h3 '>{t('About_title2')}</h3>
          </div>
          <p className='mb-6 '>{t('About_text')}</p>
          {/* stats */}
          <div className="flex gap-x-6 lg:gap-x-10 mb-12">
          <div>
            <div className='countup'>
              {
                inView ?
                <CountUp start={0} end={15} duration={3} /> :
                null}
                +
            </div >
            <div className='font-primary text-sm tracking-[2px]'>
            {t('Projects Completed')}
              </div>
          </div>
          <div>
            <div className='countup'>
              {
                inView ?
                <CountUp start={0} end={999} duration={3} /> :
                null}
                +
            </div >
            <div className='font-primary text-sm tracking-[2px]'>
            {t('Lines of Code')}
              </div>
          </div>
          
        </div>
        <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'>{t('Contact Me')}</button>
          <a href='#' className='text-gradient btn-link text-accent'>
          {t('My Portfolio')}
          </a>
        </div>
        </motion.div>
      </div>

    </div>
  </section>
  );
};

export default About;

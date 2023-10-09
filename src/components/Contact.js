import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';
import i18next from "i18next"



const Contact = () => {
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }
  return (
  
  <section className='section py-16 lg:section z-10' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
            {t('Get In Touch')}
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>{t("Lets Work Together")} 
            </h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form 
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input 
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all '
          type="text" 
          placeholder={t('Your name')}
          />
          <input 
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all '
          type="text" 
          placeholder={t('Your email')}
          />
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
           placeholder={t('Your message')} >
          </textarea>
          <button className='btn btn-lg'>{t('Send Message')}</button>
        </motion.form>
       

      </div>
    </div>
  </section>
  );

};

export default Contact;

import React from 'react';

import Image from '../assets/avatar.svg';
import {FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center z-10' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col-reverse gap-y-8  lg:flex-row lg:items-center lg:gap-x-12 '>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7 }}
            className="text-[55px] font-semibold leading-[0.8] lg:text-[110]"
          >
            LUIS <span>MARQUES</span>
          </motion.h1>
          <motion.div 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary uppercase leading-[1]'
          >
            <span className='text-white mr-4 font-semibold'> I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Marketeer',
              2000,
            ]}
            speed={50}
            className='text-accent font-extrabold'
            wrapper='span'
            repeat={Infinity}
            
            />            
          </motion.div>
          <motion.p 
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7 }} 
            className="mb-8 max-w-lg mx-auto lg:mx-0">
              I'm fueled by my passion for creating elegant and functional digital solutions. <br /> I thrive on challenges and enjoy turning complex problems into user-friendly experiences.
          </motion.p>

            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className="btn btn-lg">Contact me</button>
              <a href='#' className='text-accent btn-link font-bold' >My Porfolio </a>
            </motion.div>
            <motion.div 
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7 }}
            className='flex text-[32px] gap-x-6 max-w-max mx-auto lg:mx-0 text-accent'
            >
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </motion.div>
        </div>

        <motion.div 
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}        
            className='w-3/4 mx-auto lg:flex flex-1 max-w.[320px] lg:max-w-[482px]'
        >
          <img src={Image} alt=''/>
        </motion.div>
      </div>
    </div> 
    </section>;
};

export default Banner; 

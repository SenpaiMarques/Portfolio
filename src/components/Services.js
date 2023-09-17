import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const services = [
  {
    name:'Development',
    description:
     'i specialize in web development,creating robust and high-performance websites and eb applications with clean, efficient code.',
    link: 'Learn more',
  },
  {
    name:'UI/UX Design',
    description:
     "My passion is crafting visually captivating and user-friendly interfaces that prioritize the user's experience.",
    link: 'Learn more',
  },
  {
    name:'Digital Marketing',
    description:
     'I excel in digital marketing, blending creativity and data-driven strategies to engage audiences and drive results.',
    link: 'Learn more',
  }
]


const Services = () => {
  return (
  <section className='section'  id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/*text & image*/}
        <motion.div  
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 mb-12 lg:mb-0'>
          <h2 className='h2 text-accent  mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            I'm a software developer with a passion for front-end and web-design.
          </h3> 
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        {/*services */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'
        >
        {/*services */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const {name, description, link} = service;
              return (
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight text-[16px] '>
                    {description}
                  </p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                  <BsArrowUpRight/> 
                </a>
                <a href='#' className='text-gradient text-sm text-accent'>
                  {link}
                  </a>
                </div>
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
    
  </section>
  )
};

export default Services;

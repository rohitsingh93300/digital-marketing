import React, { useState } from 'react'
import AboutImg from '../assets/AboutImg.jpg'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { motion } from 'framer-motion'

const About = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <div className='bg-gray-950 py-20 px-5 md:px-0 overflow-x-hidden overflow-y-hidden'>
      <div className='max-w-7xl mx-auto '>
        <div className='flex flex-col md:flex-row gap-7 items-center'>
          <div className='md:w-1/2 space-y-5'>
            <motion.h1 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1, delay:0.2}}
            className='font-bold text-4xl text-[#33CCCC]'>About Us</motion.h1>
            <motion.p 
             initial={{opacity:0, x:-100}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:1.5, delay:0.5}}
            className='lg:pr-20 text-gray-300'>Welcome to Webelite Builders, where we blend creativity, strategy, and technology to help businesses excel in the digital landscape. Founded in 2024, we are a young and dynamic digital marketing agency based in Kolkata, dedicated to delivering results-driven solutions tailored to your unique business goals. Our mission is simple – to empower brands with powerful digital strategies that elevate online presence, engage audiences, and drive sustainable growth. </motion.p>
            {/* <p className='pr-20'>At Webelite Builders, we specialize in a full suite of digital marketing services, from SEO and social media marketing to content creation, pay-per-click advertising, and web development. Our team of experts stays ahead of industry trends and uses data-driven insights to create campaigns that are as effective as they are innovative.</p> */}

            <motion.p 
             initial={{opacity:0, x:-100}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:1.5, delay:0.5}}
            className='lg:pr-20 text-gray-300'>Whether you’re a startup or an established brand, we are here to help you navigate the digital world, maximizing your potential with solutions that make an impact. Let us build your digital success story.</motion.p>


            <motion.button 
             initial={{opacity:0, x:-100}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:1.8, delay:1}}
            className='rounded-md px-4 py-2 bg-transparent text-white border-2  border-green-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]'>Learn More</motion.button>
          </div>
          <div className='md:w-1/2'>
            <motion.img 
             initial={{opacity:0, x:100}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:1.5, delay:0.5}}
            src={AboutImg} alt="" className='rounded-lg' />
          </div>
        </div>
        <motion.div 
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:1.5, delay:0.5}}
        className='mt-4'>
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='flex gap-10'>
              <div className='flex flex-col items-center text-center'>
                <h1 className='font-bold text-3xl md:text-4xl text-[#33CCCC]'>
                  {
                    counterOn && <CountUp start={0} end={120} duration={2} delay={0} />
                  }
                  +
                </h1>
                <h3 className='text-sm text-gray-300'>Happy Customers</h3>
              </div>
              <div className='flex flex-col items-center text-center'>
                <h1 className='font-bold text-3xl lg:text-4xl text-[#33CCCC]'>
                  {
                    counterOn && <CountUp start={0} end={200} duration={2} delay={0} />
                  }
                  +
                </h1>
                <h3 className='text-sm text-gray-300'>Success Projects</h3>
              </div>
              <div className='flex flex-col items-center text-center'>
                <h1 className='font-bold text-3xl lg:text-4xl text-[#33CCCC]'>
                  {
                    counterOn && <CountUp start={0} end={160} duration={2} delay={0} />
                  }
                  %
                </h1>
                <h3 className='text-sm text-gray-300'>Conversion Rate Increased</h3>
              </div>
            </div>

          </ScrollTrigger>
        </motion.div>
      </div>
    </div>
  )
}

export default About

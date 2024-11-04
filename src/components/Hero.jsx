import React from 'react'
import hero from '../assets/Hero1.json'
import { ChevronRight } from 'lucide-react'
import {motion} from 'framer-motion'
import {FadeRight, FadeUp} from '../utility/Animation'
import bg from '../assets/bg1.jpg'
import Lottie from 'lottie-react'


const Hero = () => {
  return (
     <div  style={{
       height: '600px',
       backgroundImage: `url(${bg})`,
       overlay:'#111111',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       // filter: 'blur(5px)',
       zIndex: -1
   }}
  className=' bg-gray-900 relative z-10 overflow-x-hidden lg:overflow-x-visible'>
    < div className="absolute inset-0 bg-black opacity-85" ></div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-6 h-screen lg:h-[650px] lg:justify-center lg:items-center lg:pt-0 pt-12'>
          {/* hero text */}
          <div className=' flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0'>
            <motion.h3 
            variants={FadeRight(0.5)}
            initial="hidden"
            animate="visible"
            className='text-white text-lg lg:text-xl'>Digital Marketing Agency_____</motion.h3>
            <motion.h1 
            variants={FadeRight(0.9)}
            initial="hidden"
            animate="visible"
            className='text-4xl text-white lg:text-6xl font-bold '> Grow Your Business with Digital <br /> <span className='text-[#33CCCC]'>Marketing Solution!</span></motion.h1>
            <motion.p 
            variants={FadeRight(1)}
            initial="hidden"
            animate="visible"
            className=' text-sm text-gray-200'>Unlock the power of digital marketing to grow your business. Our expert strategies drive results and maximize your online potential.</motion.p>
            <div className='flex gap-3 items-center'>
              <motion.button 
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className='bg-[#33CCCC] box shadow text-white px-4 py-2 rounded-md font-semibold flex items-center'>Get Started<ChevronRight /> </motion.button>
              <motion.button 
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className='rounded-md px-4 py-2 bg-transparent text-white border-2  border-green-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]'>Learn More</motion.button>
            </div>
          </div>
          {/* hero img */}
          {/* <motion.div 
          initial={{opacity:0,scale:0.7}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:1.8, delay:0.8}}
          className='lg:w-1/2 flex justify-center'> */}
            {/* <motion.img 
            // initial={{opacity:0,x:200, scale:0.7}}
            // whileInView={{opacity:1,x:0, scale:1}}
            // transition={{duration:1.8, delay:0.8}}
            src={hero} alt="" /> */}
            {/* <Lottie animationData={hero} className='w-[350px] md:w-[550px]'/>
          </motion.div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
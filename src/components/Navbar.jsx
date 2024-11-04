import React, { useState } from 'react'
// import Logo from '../assets/Logo.png'
import { Menu, X } from 'lucide-react'
import {motion} from 'framer-motion'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const Navhandler=()=> {
    setOpen(!open)
    
    if(open){
      document.body.style.overflow = 'unset';
    }else{
      document.body.style.overflow = 'hidden';
    }

  }
  return (
    <div className='bg-gray-950 py-3 '>
      <motion.div 
      initial={{opacity:0, y:-30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1, delay:0.2}}
      className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center px-5 lg:px-0'>
          {/* logo */}
          <div className='font-bold text-[#33CCCC] text-4xl'>
            {/* <img src={Logo} alt="" className='w-32' /> */}
            Logo
          </div>
          {/* nav */}
          <ul className='lg:flex gap-6 items-center font-semibold text-xl text-white hidden'>
            <li className='hover:text-[#33CCCC] cursor-pointer transition-all'>Services</li>
            <li className='hover:text-[#33CCCC] cursor-pointer transition-all'>About</li>
            <li className='hover:text-[#33CCCC] cursor-pointer transition-all'>Blog</li>
            <li className='hover:text-[#33CCCC] cursor-pointer transition-all'>Contact Us</li>
            <button className='bg-[#33CCCC] cursor-pointer text-white px-4 py-2 rounded-md'>Get Started</button>
          </ul>
          <Menu onClick={Navhandler} className='lg:hidden text-white'/>
        </div>
      </motion.div>
      {
        open ? (
          <nav className='lg:hidden'>
            <ul className='flex flex-col space-y-10 bg-gray-950 text-gray-300 w-[300px] h-[950px] items-center pt-36 absolute text-2xl font-semibold top-0 z-30 right-0 '>
                 <li>Services</li>
                 <li>About</li>
                 <li>Blog</li>
                 <li>Contact Us</li>
                 <button className='bg-[#33CCCC] text-white px-4 py-2 rounded-md'>Get Started</button>
                 <X onClick={Navhandler} className='z-50 absolute top-0 right-10 border border-[#33CCCC] p-1 rounded-md'/>
            </ul>
          </nav>
        ):null
      }
    </div>
  )
}

export default Navbar
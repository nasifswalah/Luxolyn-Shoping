import React from 'react'
import InputField from '../components/InputField';
import { motion } from 'framer-motion';

const LoginPage = () => {
  return (
    <div className="relative xl:h-[97vh] h-screen xl:w-[95vw] w-screen xl:border border-[rgba(255,255,255,0.2)] xl:rounded-lg bg-[#141414] backdrop-blur-md flex flex-col justify-center">
    <div className="absolute top-100 w-full h-screen leading-[60.75px] bg-[radial-gradient(ellipse_at_bottom,rgba(121,12,105,0.129)_0%,rgba(13,5,28,0)_85%)]" />
    <motion.div
      className='w-full'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <h2 className='font-themeFont text-[#a7a5a5] sm:text-2xl text-xl text-center font-[500]'> Login to your account </h2>
    </motion.div>
    <motion.form
        className="mt-8 flex flex-col gap-3 sm:w-96 w-[90vw] mx-auto"
        initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      >
        <InputField type="text" name="name" placeholder="Your Email" />
        <InputField type="password" name="name" placeholder="Your Password" />
  
      </motion.form>
  </div>
  )
}

export default LoginPage

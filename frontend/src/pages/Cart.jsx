import React from 'react'
import CartItem from '../components/CartItem'
import { motion } from 'framer-motion'


const Cart = () => {
  return (
    <section className="relative xl:h-[97vh] h-screen xl:w-[95vw] w-screen xl:border border-[rgba(255,255,255,0.2)] xl:rounded-lg bg-[#141414] backdrop-blur-md flex px-4 py-2">
        <div className="absolute top-100 w-full h-screen leading-[60.75px] bg-[radial-gradient(ellipse_at_bottom,rgba(121,12,105,0.129)_0%,rgba(13,5,28,0)_85%)]" />
        <motion.div className='relative w-full h-[82vh] overflow-y-scroll flex flex-wrap justify-center gap-1 ' initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.9}}>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        </motion.div>
    </section>
  )
}

export default Cart

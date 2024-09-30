import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Search = () => {
  return (
    <div className="relative xl:h-[97vh] h-screen xl:w-[95vw] w-screen xl:border border-[rgba(255,255,255,0.2)] xl:rounded-lg bg-[#141414] backdrop-blur-md flex p-8">
      <div className="absolute top-100 w-full h-screen leading-[60.75px] bg-[radial-gradient(ellipse_at_bottom,rgba(121,12,105,0.129)_0%,rgba(13,5,28,0)_85%)]" />
      <motion.div className='flex items-center h-fit' initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}>
      <Globe className='w-6 h-6 text-[#FAF9F6] mr-2'/>
      <p className='text-[#FAF9F6] text-sm'>Making an experience for you</p>
      </motion.div>
    </div>
  )
}

export default Search

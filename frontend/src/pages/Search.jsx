import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from "../lib/axios.js"

const Search = () => {

	const params = useParams();
  const [ searchResult, setSearchResult ] = useState([]);

  const searchTerm = params.searchTerm;

  useEffect(() => {
	const searchResult = async () => {
		try {
		  const res = await axios.get('/products/search', {
			params : { searchTerm }
		  })
			setSearchResult(res.data.searchResult)         
		} catch (error) {
		  toast.error(error?.response?.data?.message || "Failed to fetch products");
		}
	  };
	  searchResult()
  }, [searchTerm])

  return (
    <div className="relative xl:h-[97vh] h-screen xl:w-[95vw] w-screen xl:border border-[rgba(255,255,255,0.2)] xl:rounded-lg bg-[#141414] backdrop-blur-md flex p-8">
      <div className="absolute top-100 w-full h-screen leading-[60.75px] bg-[radial-gradient(ellipse_at_bottom,rgba(121,12,105,0.129)_0%,rgba(13,5,28,0)_85%)]" />
      
      <div className='min-h-full overflow-scroll mx-auto'>
      <motion.div className='flex items-center h-fit relative justify-center' initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}>
      <Globe className='w-6 h-6 text-[#FAF9F6] mr-2'/>
      <p className='text-[#FAF9F6] text-sm'>Making an experience for you</p>
      </motion.div>
			<div className='relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-2 py-10'>
				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{searchResult?.length === 0 && (
						<h2 className='text-3xl font-semibold text-gray-300 text-center col-span-full'>
							No products found
						</h2>
					)}

					{searchResult?.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</motion.div>
			</div>
		</div>
    </div>
  )
};

export default Search

import React from 'react'
import { motion } from 'framer-motion'
import { handleChange, handleSubmit } from '../constatnts/constants'
import InputField from '../components/InputField'
import Button from '../components/Button'
import { edit } from '../assets'

const ProductCreation = () => {
  return (
    <div className="relative xl:h-[97vh] h-screen xl:w-[95vw] w-screen xl:border border-[rgba(255,255,255,0.2)] xl:rounded-lg bg-[#141414] backdrop-blur-md flex flex-col justify-center">
      <div className="absolute top-100 w-full h-screen leading-[60.75px] bg-[radial-gradient(ellipse_at_bottom,rgba(121,12,105,0.129)_0%,rgba(13,5,28,0)_85%)]" />
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="font-themeFont text-[#FAF9F6] sm:text-2xl text-xl text-center font-semibold">
          Add New Product
        </h2>
      </motion.div>
      <motion.form
        className="mt-8 flex flex-col gap-3 sm:w-96 w-[90vw] mx-auto"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <InputField
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="price"
          placeholder="Product Price"
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="category"
          placeholder="Product Category"
          onChange={handleChange}
        />
        <textarea
        rows={4}
          name="description"
          placeholder="Product Description"
          onChange={handleChange}
          className="bg-[#292929] px-6 py-2 placeholder:text-[#464647] text-[#BCBCBC] rounded-2xl outline-none border-none font-medium"
        />
        <InputField
          type="file"
          name="image"
          placeholder="Product Images"
          onChange={handleChange}
        />
        <Button name="Create" icon={edit} />
      </motion.form>
    </div>
  )
}

export default ProductCreation 

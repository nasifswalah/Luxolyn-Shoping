
import { sample, trash } from '../assets'
import { Minus, Plus} from 'lucide-react'
import React from 'react'
import Button from './Button'

const CartItem = () => {
  return (
    <div className='w-60 md:h-[16.1rem] h-fit bg-[#292929] rounded border border-[rgba(255,255,255,0.2)] flex  flex-col items-center justify-between p-2 md:gap-1 gap-5'>
          <img src={sample} alt="image" className='h-32 rounded object-cover' />
          <p className='text-center'>T-shirt </p>
          <div className='flex justify-around w-full'>
          <div className=' flex gap-2'>
            <button className='hover:text-white'><Minus className=' mx-auto w-4 h-4 text-[#767677] '/></button>
            <p>5</p>
            <button><Plus className='w-4 h-4 text-[#767677]  mx-auto'/></button>
          </div>
          
            <p className='font-semibold'>500</p>
          </div>
          <Button name="Remove" icon={trash} />
        </div>
  )
}

export default CartItem

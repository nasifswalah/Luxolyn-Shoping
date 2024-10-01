import React from 'react'

const Loader = () => {
  return (
    <div className="absolute z-20 w-screen h-screen flex items-center bg-[rgba(0,0,0,0.6)] backdrop-blur-sm">
      <Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
    </div>
  )
}

export default Loader;

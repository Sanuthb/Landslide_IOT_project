import React from 'react'
import {User} from 'lucide-react'

const Topnavbar = () => {
  return (
    <div className='bg-[#4a4a4a] w-full flex items-center justify-between text-white'>
          <div className='bg-[#24373a] px-5 py-2 w-[14rem]'><span className='text-xl'>LandSlide IOT</span></div>
          <div className='px-3 cursor-pointer'><User/></div>
      </div>
  )
}

export default Topnavbar

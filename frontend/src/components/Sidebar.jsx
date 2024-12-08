import React from 'react'
import {Gauge} from 'lucide-react'
const Sidebar = () => {
  return (
    <div className='w-[14rem] bg-[#22bfcc] h-screen'>
        <div className='flex gap-10 px-5 py-5 bg-[#15a0a8]'>
            <div><Gauge size={30}/></div>
            <span className='text-xl font-normal'>Dashboard</span>
        </div>
    </div>
  )
}

export default Sidebar

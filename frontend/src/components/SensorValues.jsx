import React from 'react'

const SensorValues = ({value,sensor_name,color,icon}) => {
  return (
    <div className='bg-white w-1/3 h-48 p-3 flex flex-col justify-between'>
      <div className={`${color}  rounded-full w-20 h-20 flex items-center justify-center text-white`}>{icon}</div>
      <div>
        <h1 className='text-3xl'>{value}</h1>
        <span>{sensor_name}</span>
      </div>
    </div>
  )
}

export default SensorValues

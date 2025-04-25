import React from 'react'

const ElementLayoutCard = ({layout}) => {
  return (
    
         <div className='flex flex-col items-center p-2 border border-dashed rounded-xl cursor-pointer group hover:shadow-md hover:border-primary '>
                   {<layout.icon className='text-primary bg-gray-100 p-1 h-8 w-8 group-hover:bg-purple-100 rounded-full' />}
                    <h2 className='text-sm group-hover:text-primary'>{layout.label}</h2>
                </div>
   
  )
}

export default ElementLayoutCard
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const WebTemplateList = () => {
    const router = useRouter()
    const [webList, setWebList] = useState([]);
  return (
    <div>
        <h2 className='font-bold text-primary text-2xl'>Kidspace</h2>
        {webList?.length ==0 && <div className='flex flex-col items-center justify-center mt-10'> 
            <p className='text-center text-lg mt-4'>No websites created yet.</p> 
            <Image src={"/email.png"} alt='No Web' width={250} height={250} /> 
            <Button className='mt-5' onClick={() => router.push("/editor/123")}>Create New</Button>
            </div>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            {webList?.map((item, index) => (
                <div key={index} className='border rounded-lg p-4 shadow-md'>
                    <h3 className='font-bold text-xl'>{item.name}</h3>
                    <p className='text-gray-600'>{item.description}</p>
                    <button className='mt-4 bg-primary text-white px-4 py-2 rounded'>View</button>
                </div>
            ))}
            </div>
    </div>
  )
}

export default WebTemplateList
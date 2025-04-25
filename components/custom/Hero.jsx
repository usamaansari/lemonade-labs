'use client';
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Hero = () => {
   const router = useRouter();
  return (
    <div className='px-10 md:px-28 lg:px-44 py-10 flex flex-col items-center justify-center mt-10'>
        <h2 className='font-extrabold text-5xl text-center'>Pathway to <span className='text-primary'>Kids Entrepreneurship</span></h2>
        <p className='text-center text-lg mt-4'>Empowering the next generation of entrepreneurs through hands-on learning and real-world experience.</p>
    <div className='flex gap-4 mt-10'>
        <Button variant="outline" >Try Demo</Button>
        <Button onClick={() => router.push("/dashboard")}>Get Started</Button>
    </div>
    <Image src={'/landing.jpg'} alt='landing' width={1000} height={800} className='mt-12 rounded-2xl'/>
    </div>
  )
}

export default Hero
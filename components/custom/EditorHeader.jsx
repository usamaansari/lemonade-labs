"use client";
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Code, CodeSquare, Monitor, Phone, Smartphone, Tablet } from 'lucide-react'
import { useScreenSize } from '@/app/layout'
import { useRouter } from 'next/navigation';

const EditorHeader = ({viewHTMLCode}) => {
    const {screenSize, setScreenSize} = useScreenSize();
    const router = useRouter();

  return (
    <div className='px-10 flex flex-row items-center justify-between mt-5 shadow-md'>
        <Image src={'/LemonadeLogo-NoBG.png'} alt='logo' width={165} height={150} onClick={() => router.push("/")} />
        <div>
          <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-400'>Kids Website Builder</h1>
        </div>
        <div className='flex flex-row gap-3'>
        <Button variant="ghost" className={`hover:text-primary hover:bg-purple-200 border-1 ${screenSize == 'desktop' ? 'text-primary bg-purple-200' : ''}`} onClick={() => setScreenSize('desktop')}>
                <Monitor /> Desktop</Button>
            <Button variant='ghost' className={`ml-2 hover:text-primary hover:bg-purple-200 border-1 ${screenSize == 'mobile' ? 'text-primary bg-purple-200' : ''}`} onClick={() => setScreenSize('mobile')}><Smartphone /> Mobile</Button>
        </div>
    </div>
  )
}

export default EditorHeader
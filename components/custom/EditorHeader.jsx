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
    <div className='px-10 md:px-20 lg:px-25 flex flex-row items-center justify-between mt-5 shadow-md'>
        <Image src={'/LemonadeLogo-NoBG.png'} alt='logo' width={165} height={150} onClick={() => router.push("/")} />
        <div>
            <Button variant="ghost" className={`hover:text-primary hover:bg-purple-200 border-1 ${screenSize == 'desktop' ? 'text-primary bg-purple-200' : ''}`} onClick={() => setScreenSize('desktop')}>
                <Monitor /> Desktop</Button>
            <Button variant='ghost' className={`ml-2 hover:text-primary hover:bg-purple-200 border-1 ${screenSize == 'mobile' ? 'text-primary bg-purple-200' : ''}`} onClick={() => setScreenSize('mobile')}><Smartphone /> Mobile</Button>

        </div>
        <div className='flex gap-3'>
            <Button variant='ghost' className='hover:text-primary hover:bg-purple-200 border-1' onClick={()=>viewHTMLCode(true)}><Code /></Button>
            <Button variant="outline"  onClick={()=>viewHTMLCode(true)}>Preview</Button>
            <Button>Save</Button>
        </div>
    </div>
  )
}

export default EditorHeader
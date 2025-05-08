"use client";
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Code, CodeSquare, Monitor, Phone, PlayCircle, Redo, Rocket, Save, Smartphone, Tablet, Undo } from 'lucide-react'
import { useScreenSize } from '@/app/layout'
import { useRouter } from 'next/navigation';
import { toast } from "sonner"

const EditorFooter = ({viewHTMLCode}) => {
    const {screenSize, setScreenSize} = useScreenSize();
    const router = useRouter();

    const onClickSave = () =>{
        toast(<div className='flex flex-row gap-3'> <Save size={40} color='#7f57f1'/> <h1 className='text-lg'>Website has been saved successfully</h1></div>)


    }

  return (
    <div className='pl-70 pr-70 flex flex-row items-center justify-between shadow-md'>
        <div className='flex flex-row gap-3 items-center border border-black p-4 cursor-pointer' onClick={()=>viewHTMLCode(true)}><PlayCircle color='#138411'/>
            <h1 className='text-black text-2xl'>Preview</h1>
        </div>
        <div className='flex flex-row gap-3 items-center border border-black p-4 cursor-pointer' onClick={()=>onClickSave()}><Save color='#7f57f1'/>
            <h1 className='text-black text-2xl'>Save</h1>
        </div>
        <div className='flex flex-row gap-3 items-center border border-black p-4 cursor-pointer'><Undo color='#433ade'/>
            <h1 className='text-black text-2xl'>Undo</h1>
        </div>
        <div className='flex flex-row gap-3 items-center border border-black p-4 cursor-pointer'><Redo color='#FEA819'/>
            <h1 className='text-black text-2xl'>Redo</h1>
        </div>
        <div className='flex flex-row gap-3 items-center border border-black p-4 cursor-pointer' onClick={()=>viewHTMLCode(true)}><Rocket color='#FF7813'/>
            <h1 className='text-black text-2xl'>Publish Website</h1>
        </div>
    </div>
  )
}

export default EditorFooter
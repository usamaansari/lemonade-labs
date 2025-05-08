'use client';

import Canvas from '@/components/custom/Canvas';
import EditorFooter from '@/components/custom/EditorFooter';
import EditorHeader from '@/components/custom/EditorHeader';
import ElementsSideBar from '@/components/custom/ElementsSideBar';
import Settings from '@/components/custom/Settings';
import React, { useState } from 'react'

const Editor = () => {
  const [viewHTMLCode, setViewHTMLCode] = useState();
  return (
    <div>
      <EditorHeader viewHTMLCode={(v)=>setViewHTMLCode(v)}/>
      <div className='grid grid-cols-6'>
       
        <ElementsSideBar />
       
        <div className='col-span-4 bg-gray-100'>
          <Canvas viewHTMLCode={viewHTMLCode} closeDialog={()=>setViewHTMLCode(false)}/>
        </div>
        <Settings />

      </div>
      <div className="sticky bottom-0 left-0 w-full bg-gray-200 text-white">
      
      <EditorFooter viewHTMLCode={(v)=>setViewHTMLCode(v)}/>
      </div>
    </div>
  )
}

export default Editor;
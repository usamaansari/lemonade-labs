"use client";

import { useDragDropLayoutElement, useScreenSize, useWebTemplate } from '@/app/layout';
import React, { useEffect, useRef, useState } from 'react'
import ColumnLayout from '../layoutElements/ColumnLayout';
import ViewHtmlDialog from './ViewHtmlDialog';

const Canvas = ({viewHTMLCode, closeDialog}) => {
  const htmlRef = useRef();
        const {screenSize, setScreenSize} = useScreenSize();
        const {dragElementLayout, setDragElementLayout} = useDragDropLayoutElement();
        const {webTemplate, setWebTemplate} = useWebTemplate();
        const [dragOver, setDragOver] =useState(false);
        const [htmlCode, setHtmlCode] = useState()
      
        const onDragOver = (e) => {
            e.preventDefault();
            setDragOver(true);
            //e.dataTransfer.dropEffect = 'copy';
        }
        
    const onDropHandle= () => {
        console.log('dropped', dragElementLayout?.dragLayout);
        setDragOver(false);
      
        if(dragElementLayout?.dragLayout){
            setWebTemplate(prev => [...prev, dragElementLayout?.dragLayout]);
            setDragElementLayout({dragLayout: null});
        }
        // setWebTemplate((prev) => [...prev, dragElementLayout?.dragLayout]);
        // setDragElementLayout({dragLayout: null});
        // console.log('webTemplate', webTemplate);
    }

    const getLayoutComponent = (layout) => {
      if(layout?.type == 'column'){
        return <ColumnLayout layout={layout}/>
      }
      
    }
    useEffect(()=>{
viewHTMLCode&&GetHTMLCode()
    }, [viewHTMLCode])

    const GetHTMLCode=()=> {
      if(htmlRef.current)
      {
        const htmlContent = htmlRef.current.innerHTML;
        console.log(htmlContent)
        setHtmlCode(htmlContent)
      }

    }
  return (
    <div className='mt-20 flex justify-center'>
        <div className={`w-full bg-white p-6 ${screenSize == 'desktop' ? 'max-w-2xl' : 'max-w-md'}
        ${dragOver && 'bg-purple-100 p-4'}`}
        onDragOver={onDragOver}
        onDrop={()=> onDropHandle()}
        ref={htmlRef}
        >
{ webTemplate?.length>0 ? webTemplate?.map((layout, index) => (
                <div key={index}>
                   
                    {getLayoutComponent(layout)}
                </div>
            )):
           <h2 className='p-4 text-center bg-gray-100 border border-dashed'>Add Layout Here</h2>
        }
        </div>
        <ViewHtmlDialog openDialog= {viewHTMLCode} htmlCode={htmlCode} closeDialog={closeDialog}/>
    </div>
  )
}

export default Canvas
"use client";
import Layout from '@/data/Layout'
import React from 'react'
import ElementLayoutCard from './ElementLayoutCard'
import ElementList from '@/data/ElementList'
import { useDragDropLayoutElement } from '@/app/layout';

const ElementsSideBar = () => {
    const {dragElementLayout, setDragElementLayout} = useDragDropLayoutElement();
    const onDragLayoutStart = (layout) => {
        console.log(layout)
        setDragElementLayout({dragLayout: {...layout, id: Date.now()}});
    }

    const onDragElementStart = (element) => {
        console.log(element)
        setDragElementLayout({dragElement:{...element, id:Date.now()}})
    }
  return (
    <div className='p-4 h-screen shadow-sm'>
         <h2 className='text-lg font-bold text-primary'>Layouts</h2>
        <div className='grid grid-cols-1 gap-3 mt-3'> {/* md:grid-cols-2 */}
           
            {Layout.map((layout, index) => (
                <div key={index} draggable onDragStart={()=>onDragLayoutStart(layout)}>
               <ElementLayoutCard  layout={layout} />
               </div>
            ))}
        </div>

        <h2 className='text-lg font-bold text-primary mt-5'>Elements</h2>
        <div className='grid grid-cols-1  gap-3 mt-3'>
           
            {ElementList.map((element, index) => (
                <div key={index} draggable onDragStart={()=>onDragElementStart(element)}>
               <ElementLayoutCard layout={element} />
               </div>
            ))}
        </div>
        
    </div>
  )
}

export default ElementsSideBar
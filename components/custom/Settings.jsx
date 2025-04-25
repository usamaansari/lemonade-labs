'use client';

import React, { useEffect, useState } from 'react'
import InputField from './settingComponents/InputField'
import { useSelectedElement } from '@/app/layout'
import ColorPickerField from './settingComponents/ColorPickerField';
import InputStyleField from './settingComponents/InputStyleField';
import { Slider } from '@radix-ui/react-slider';
import SliderField from './settingComponents/SliderField';
import TextAreaField from './settingComponents/TextAreaField';
import ToggleGroupField from './settingComponents/ToggleGroupField';
import { AlignCenter, AlignLeft, AlignRight, CaseLower, CaseSensitive, CaseUpper } from 'lucide-react';
import DropDownField from './settingComponents/DropDownField';
import ImagePreview from './settingComponents/ImagePreview';

const TextAlignOptions=[
  {
    value:'left',
    icon:AlignLeft
  },
  {
    value:'center',
    icon:AlignCenter
  },
  {
    value:'right',
    icon:AlignRight
  },
]

const TextTransformOptions=[
  {
    value:'uppercase',
    icon:CaseUpper
  },
  {
    value:'lowercase',
    icon:CaseLower
  },
  {
    value:'capitaized',
    icon:CaseSensitive
  },
]

const Settings = () => {
  const {selectedElement, setSelectedElement } = useSelectedElement();
  const[element, setElement] = useState()
  useEffect(()=>{
setElement(selectedElement?.layout?.[selectedElement?.index])
  }, [selectedElement])

  const onHandleInputChange=(fieldName, value)=> {
    console.log("value")
    const updatedData = {...selectedElement}
    updatedData.layout[selectedElement.index][fieldName] = value
    setSelectedElement(updatedData)

  }

  const onHandleStyleChange=(fieldName, fieldValue)=> {
   let updateElement = {
    ...selectedElement,
    layout:{
      ...selectedElement?.layout,
      [selectedElement?.index]:{
        ...selectedElement?.layout[selectedElement?.index],
        style:{
          ...selectedElement?.layout[selectedElement?.index]?.style,
          [fieldName]:[fieldValue]
        }
      }
    }
   }
    setSelectedElement(updateElement)


  }
  return (
    <div className='p-5 flex flex-col gap-4'>
      <h2 className='font-bold text-xl'>Settings</h2>
      {element?.imageUrl &&  <ImagePreview label='Image Preview' value={element?.imageUrl} onHandleInputChange={(value)=>onHandleInputChange('imageUrl',value)}/> }

      {element?.content &&  <InputField label='Content' value={element?.content} onHandleInputChange={(value)=>onHandleInputChange('content',value)}/> }
    {element?.style?.backgroundColor && <ColorPickerField label='Background Color' value={element?.style?.backgroundColor} onHandleStyleChange={(fieldValue)=>onHandleStyleChange('backgroundColor',fieldValue) } /> }
    {element?.url &&  <InputField label='Url' value={element?.url} onHandleInputChange={(value)=>onHandleInputChange('url',value)}/> }
    {element?.style?.color && <ColorPickerField label='Text Color' value={element?.style?.color} onHandleStyleChange={(fieldValue)=>onHandleStyleChange('color',fieldValue) } /> }
    {element?.style?.fontSize && <InputStyleField label='Font Size' value={element?.style?.fontSize} onHandleStyleChange={(fieldValue)=>onHandleStyleChange('fontSize',fieldValue) } /> }
    {element?.style?.padding && <InputStyleField label='Padding' value={element?.style?.padding} onHandleStyleChange={(fieldValue)=>onHandleStyleChange('padding',fieldValue) } /> }
    {element?.style?.borderRadius && <SliderField label='Border Radius' value={element?.style?.borderRadius} onHandleStyleChange={(fieldValue)=>onHandleStyleChange('borderRadius',fieldValue) } /> }
    {element?.style?.width && <SliderField label='Width' value={element?.style?.width} type='%' onHandleStyleChange={(fieldValue)=>onHandleStyleChange('width',fieldValue) } /> }
    {element?.textarea &&  <TextAreaField label='Text' value={element?.textarea} onHandleInputChange={(value)=>onHandleInputChange('textarea',value)}/> }
    {element?.style?.textAlign && <ToggleGroupField label='Text Align' value={element?.style?.textAlign} options={TextAlignOptions} onHandleStyleChange={(fieldValue)=>onHandleStyleChange('textAlign',fieldValue) } /> }
    {element?.style?.textTransform && <ToggleGroupField label='Text Transform' value={element?.style?.textTransform} options={TextTransformOptions} onHandleStyleChange={(fieldValue)=>onHandleStyleChange('textTransform',fieldValue) } /> }
    {element?.style?.fontWeight && <DropDownField label='Font Weight' value={element?.style?.fontWeight} options={['normal','bold']} onHandleStyleChange={(fieldValue)=>onHandleStyleChange('fontWeight',fieldValue) } /> }


      </div>
  )
}

export default Settings
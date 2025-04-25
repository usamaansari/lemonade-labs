import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const ToggleGroupField = ({label, value, options, onHandleStyleChange}) => {
  return (
    <div>
        <label>{label}</label>
        <ToggleGroup type="single" className="w-full" defaultValue={value} onValueChange={(v)=>onHandleStyleChange(v)}>
            {options.map((option,index)=> (
  <ToggleGroupItem key={index} value={option?.value}><option.icon/></ToggleGroupItem>
            ))}


</ToggleGroup>

    </div>
  )
}

export default ToggleGroupField
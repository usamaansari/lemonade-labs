import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const DropDownField = ({label, value, options, onHandleStyleChange}) => {
  return (
    <div>
 <Select onValueChange={(v)=>onHandleStyleChange(v)} defaultValue={value}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder={value} />
  </SelectTrigger>
  <SelectContent>
    {options?.map((option, index)=> (
 <SelectItem key={index} value={option}>{option}</SelectItem>
    ))}
   
  </SelectContent>
</Select>

 
    </div>
  )
}

export default DropDownField
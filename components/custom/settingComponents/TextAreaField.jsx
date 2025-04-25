import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TextAreaField = ({label, value, onHandleInputChange}) => {
  return (
    <div>
        <label>{label}</label>
        <Textarea value={value} onChange = {(event)=>onHandleInputChange(event.target.value)} />
    </div>
  )
}

export default TextAreaField
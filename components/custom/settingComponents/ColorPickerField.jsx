import React from 'react'

const ColorPickerField = ({label, value, onHandleStyleChange}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label>{label}</label>
        <input type='color' value={value}
        onChange={(e)=> onHandleStyleChange(e.target.value)}
        />
    </div>
  )
}

export default ColorPickerField
import React from 'react'

const ImageComponent = ({style,imageUrl, content, outStyle}) => {
  return (
    <div>
        <img src={imageUrl} alt='image' style={style} />
    </div>
  )
}

export default ImageComponent
import React from 'react'

const LemonBottomRight = ({ imageUrl, size = 100 }) => {
    const style = {
        position: 'fixed',
        bottom: 20,
        right: 100,
        width: size,
        height: 'auto',
        zIndex: -1,
        borderRadius: '0 20px 0 20px',
      };
    // className="fixed bottom-5 right-5 z-50"
  return (
    <img
    src={imageUrl}
    alt="Lemon"
   
    style={style}
  />
  )
}

export default LemonBottomRight
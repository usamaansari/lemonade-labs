import React from 'react'

const SocialIconsComponent = ({socialIcons, style, outerStyle}) => {
  return (
    <div style={outerStyle}>
        {socialIcons?.map((icon, index)=>(
             <img  src={icon.icon} alt='image' style={style} key={index} />
        ))}
    </div>
  )
}

export default SocialIconsComponent
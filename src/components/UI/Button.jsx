import React from 'react'

const Button = ({children,textOnly,className,type, ...props}) => {
    const cssClass=textOnly?`text-button ${className}`:`button  ${className}`;
  return (
    <button  {...props} className={cssClass}>{children}</button>
  )
}

export default Button;
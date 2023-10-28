"use client";
import React from 'react'

import { CustomButtonProps } from '../Types';

const CustomButton = ({title, containerstyle,HandelClick , btntype} : CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={'button' || btntype} 
    className= {`custom-btn ${containerstyle}`}
    onClick={HandelClick}
    >
     <span className={ ` flex-1 ` }>
       {title}
     </span>
    </button>
  )
}

export default CustomButton
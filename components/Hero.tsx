"use client";
import React from 'react'
import CustomButton from './CustomButton'
import Image from "next/image";
import car_hero from "../public/hero.png";
import background_hero from "../public/hero-bg.png";

const Hero = () => {
    const handelscroll = ()=> {
    }
  return (
    <div className='hero overflow-hidden'>
        <div className=' flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
               Find ,Book or rent a car __ quickly and easily
            </h1>
            <p className='hero__subtitle'>
                Streamline your experience with your effortless rental car and booking process
            </p>
            <CustomButton 
            title="Explore Cars"
            containerstyle=" bg-primary-blue text-white rounded-full mt-20"
            HandelClick={handelscroll}
            />
        </div>
        <div className='hero__image-container'>
           <div className='hero__image'>
           <Image src="/hero.png" alt="hero" fill className="object-contain" />
           </div>
           <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero
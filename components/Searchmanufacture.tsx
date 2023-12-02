import React from 'react'
import {useState} from "react" 
import { Combobox , Transition } from '@headlessui/react'
import { searchmanufactureprops } from '../Types'
import Image from 'next/image'
const Searchmanufacture = 
({ manufacture  , setmanufacture }:searchmanufactureprops ) => {
  const [query , setquery] = useState('')

  return (
    <div className='search_manufaturer'>
      <Combobox >
        <div className=' relative w-full'>
        <Combobox.Button className="absolute top-[14px] ">
           <Image src="/car-logo.svg" alt='car-logo' width={20} height={20} className='ml-4'/>
        </Combobox.Button>
        <Combobox.Input 
        placeholder='volkswagon'
         className="search-manufacturer__input"
         displayValue={(manufacture : string)=> manufacture}
         onChange={(e) => setquery(e.target.value)}/>
        </div>
      </Combobox>
    </div>
  )
}

export default Searchmanufacture
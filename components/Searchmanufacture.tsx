import React from 'react'
import {useState , Fragment} from "react" 
import { Combobox , Transition } from '@headlessui/react'
import { searchmanufactureprops } from '../Types'
import Image from 'next/image'
import { manufacturers } from '../constants'
const Searchmanufacture = 
({ manufacture  , setmanufacture }:searchmanufactureprops ) => {
  const [query , setquery] = useState('')
 const filtermanufacturer = query === "" ? manufacturers : manufacturers.filter((items) =>
  items.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))) 
  return (
    <div className='search_manufaturer'>
      <Combobox value={manufacture} onChange={setmanufacture} >
        <div className=' relative w-full'>
        <Combobox.Button className="absolute top-[14px] ">
           <Image src="/car-logo.svg" alt='car-logo' width={20} height={20} className='ml-4'/>
        </Combobox.Button>
        <Combobox.Input 
        placeholder='volkswagon'
         className="search-manufacturer__input"
         displayValue={(manufacture : string)=> manufacture}
         onChange={(e) => setquery(e.target.value)}/>
      <Transition
      as={Fragment}
      leave='transition ease-in duration-100'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
      afterLeave={()=>setquery("")}>

         <Combobox.Option>
            {filtermanufacturer.map((item)=> (
                <Combobox.Option
                key={item}
                className={({active})=> `
                relative search-manufacturer__option ${active ?
                 'bg-primary-blue text-white' :
                  'text-gray-900'}`}
                  value={item}>
                     {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                </Combobox.Option>
              ))
            }  
         </Combobox.Option>
      </Transition>
        </div>
        
      </Combobox>
         
    </div>
  )
}

export default Searchmanufacture
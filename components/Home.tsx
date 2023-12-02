import React from 'react'
import SearchBra from './SearchBra'
import Customfilter from './Customfilter'

const Homee = () => {
  return (
    <div className=" mt-10 padding-x padding-y max-width" id="discover">
    <div className="home__text-container">
    <h1 className=" text-4xl font-extrabold">
     Car Catalogue</h1>
    <p>Explore the future right now with this cars</p>
    </div>
    <div className='home__filters'>
      <SearchBra/>
      <div className='home__filter-container'>
       <Customfilter title= "fuel"/>
       <Customfilter title="year"/>
       
      </div>
    </div>
   </div>
  )
}

export default Homee
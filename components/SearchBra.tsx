"use client";
import {useState} from 'react';
import Searchmanufacture from "./Searchmanufacture";

const SearchBra = () => {
  const [manufacture , setmanufacture] = useState('');
  const handelsubmit= ()=> {

  }
  return (
    <form action="" className='searchbar' onSubmit={handelsubmit}>
        <div className="searchbar__item">
          <Searchmanufacture manufacture={manufacture} setmanufacture={setmanufacture} />
        </div>
    </form>
  )
}

export default SearchBra
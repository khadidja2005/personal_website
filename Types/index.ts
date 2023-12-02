import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : String ,
    containerstyle?:String,
    HandelClick?:MouseEventHandler<HTMLButtonElement> ,
    btntype?:"button" | "submit",
}

export interface searchmanufactureprops {
  manufacture : string ,
  setmanufacture : (manufacture : string)=> void ;
}
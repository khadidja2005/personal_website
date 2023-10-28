import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : String ,
    containerstyle?:String,
    HandelClick?:MouseEventHandler<HTMLButtonElement> ,
    btntype?:"button" | "submit",
}
import { useState } from "react"
import '../App.css'
export const InputBox=({inputType,textPlaceholder,mobileNumber})=>{
    const [error,setError]=useState('Value wrong')
    return(
        <>
        <input type={inputType} placeholder={textPlaceholder} style={inputType=="text"?StyleCss.text:StyleCss.number} name={mobileNumber} id={mobileNumber}/>
        <span>{error}</span>
  </>
    )
}
const StyleCss={
    number:{
        color:'red',
        borderColor:'red',
        borderWidth:'1px',
        borderStyle:'Solid'
    },
     text:{
        color:'blue',
        borderColor:'blue',
        borderWidth:'1px',
        borderStyle:'Solid'
    }
}
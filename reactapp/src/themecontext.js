import { createContext, useEffect,useState } from "react";
const ThemeContext=createContext("dark");
// const ThemeContext=()=>{
//     const [data,setData]=useState("dark");
//     const dataContect= createContext(data);  
//     useEffect(()=>{
//         console.log('Theme context file')
//     },[])
//     return dataContect
// }
export default ThemeContext;
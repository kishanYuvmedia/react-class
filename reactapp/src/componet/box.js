import { useContext } from "react";
import ThemeContext from "../themecontext";
const Box=()=>{
    const Theme=useContext(ThemeContext)
    console.log('Theme context',Theme)
    return(
        <>
        <div style={{backgroundColor:Theme==='dark'?'yellow':'black',color:Theme==='dark'?'black':'yellow'}}>
            <h1>Hello Ajmer</h1>
        </div>
        </>
    )
}
export default Box;
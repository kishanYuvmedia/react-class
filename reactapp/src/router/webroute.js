import Home from '../page/home';
import About from '../page/about';
import Contact from '../page/contact';
import { Routes,Route } from "react-router"
const WebRoute=()=>{
  return(
    <>
    <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
    </>
  )
}
export default WebRoute;
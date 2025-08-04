import './App.css'
import Login from './auth/login'
import Home from './page/home'
import { Routes,BrowserRouter,Route } from "react-router"
import ProductUser from './protectuser'
import InputComp from './page/input-comp'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/input-com" element={<InputComp/>} />
          <Route path="/home" element={<ProductUser><Home/> </ProductUser>} />
        </Routes>
      </BrowserRouter> 
   
    </>
  )
}

export default App

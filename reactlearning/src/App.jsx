import './App.css'
import Login from './auth/login'
import Home from './page/home'
import { Routes,BrowserRouter,Route } from "react-router"
import ProductUser from './protectuser'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          
          <Route path="/home" element={<ProductUser><Home/> </ProductUser>} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

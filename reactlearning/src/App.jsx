import './App.css'
import { UseStateHooks,UseEffectHooks } from './classes/UseStateHooks'
import { Routes,BrowserRouter,Route } from "react-router"
import Home from './home'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/usestate" element={<UseStateHooks />} />
          <Route path="/useeffect" element={<UseEffectHooks />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

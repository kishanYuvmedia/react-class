import { useEffect,useState } from "react";
import { Navigate, useLocation } from "react-router";
const Home=()=>{
    const location=useLocation();
    const {name,password}=location.state || {}
    const [data,setData] = useState({username: '', password: ''});
    useEffect(()=>{
        const auth = localStorage.getItem('auth');
        setData(JSON.parse(auth));
        console.log(location.location)
    })
    const HandlerLogout=()=>{
        localStorage.removeItem('auth');
        Navigate("/login", { replace: true });
    }
    return(<>
    <h1>{name}</h1>
    <p> {data.username}</p>
   <button type="submit" onClick={HandlerLogout}>Logout</button>
    </>)
}
export default Home;
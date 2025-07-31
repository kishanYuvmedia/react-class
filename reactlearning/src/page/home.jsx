import { useEffect,useState } from "react";

const Home=()=>{
    const [data,setData] = useState({username: '', password: ''});
    useEffect(()=>{
        const auth = localStorage.getItem('auth');
        console.log(auth);
        setData(JSON.parse(auth));
    })
    const HandlerLogout=()=>{
        localStorage.removeItem('auth');
    }
    return(<>
    <h1>Home</h1>
    <p> {data.username}</p>
   <button type="submit" onClick={HandlerLogout}>Logout</button>
    </>)
}
export default Home;
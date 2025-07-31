import React, { useState } from 'react';
import { useNavigate } from "react-router";
const Login=()=>{
    const navigate=useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const HandlerSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('auth', JSON.stringify({username,password}));
        navigate('/home');
    }
    return(<>
        <div>
            <h1>Login</h1>
            <form onSubmit={HandlerSubmit}>
                <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    </>)
}
export default Login;
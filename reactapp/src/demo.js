import React,{useEffect, useState} from 'react';
import './App.css';
import {Button,IconButton} from './componet/buttton';
import Heading from './componet/heading';
import Layout from './auth/layout';
import Login from './auth/login';
import Signup from './auth/signup';
function App() {
  let[count,setcount]=useState(1);
  let[resetcount,setresetcount]=useState(0);
  
  useEffect(()=>{
    setcount(1);
    setInterval(() => {
      setcount(count=>count+1);
    }, 1000);
  },[resetcount]);

  return (
    <div className="App">
      <h1 onClick={()=>{setresetcount(resetcount=>resetcount+1)}}>{count}</h1>



      
      
      
      {/* <Layout headlertype={setType} >
        {type==='signup'?<Signup/>: <Login/>}
      </Layout> */}
    
    
    
    
    
    
   
   
    {/* <Button title={'Get New Lead'}/>
  <IconButton title={'Get New Icon'}/>
    <Heading type='h1'>
      Welcome to React JS
    </Heading>
    <Heading type='h2'>
      Welcome to React JS
    </Heading> */}
    </div>
  );
}

export default App;

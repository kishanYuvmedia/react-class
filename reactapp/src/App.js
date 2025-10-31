import React,{useState} from 'react';
import './App.css';
import {Button,IconButton} from './componet/buttton';
import Heading from './componet/heading';
import Layout from './auth/layout';
import Login from './auth/login';
import Signup from './auth/signup';
function App() {
  const[type,setType]=useState('signup');
  return (
    <div className="App">
      <Layout headlertype={setType} >
        {type==='signup'?<Signup/>: <Login/>}
      </Layout>
    
    
    
    
    
    
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

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import TiyingApi from './components/apiCalling/TiyingApi';
import { useSelector } from 'react-redux';
import Display from './components/display/Display';

function App() {
    const [isrendered,setisrendered]=useState(false);
  return (
    <div className="App">
      <h1>trying axios </h1>
       <button type="button" onClick={()=>{setisrendered(true)}} >click this to show component</button>
    {isrendered&&<Display/>}
      <div>
        {/* <ul>
          {
            disp.map((item,i)=>{
              return(
                <li key={i}>{item.title}</li>
              )
            })
          }
        </ul> */}
        <TiyingApi/>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { LC, UC, NC,SC} from './data/PassChar';

function App() {
  let [uppercase,setUppercase] =useState(false)
  let [lowercase,setLowercase] =useState(false)
  let [number,setNumber] =useState(false)
  let [symbols,setSymbols] =useState(false)
  let [passwordlen,setPasswordlen]=useState(10)
  let [fPass,setPass]= useState('')
let createPassword=()=>{
  let finalPass=''
  let charSet='' 
  if(uppercase || lowercase || number || symbols){
      if(uppercase)charSet+= UC;
      if(lowercase) charSet += LC;
      if(number) charSet += NC;
      if(symbols) charSet += SC;

      for(let i=0;i<passwordlen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length));
      }
      setPass(finalPass);
     }
   else{
    alert("please select one checkbox!......")
   }
}

  return (
    <div className='passwordBox'>
      <h2>Password Generator</h2>
      
      <div className='passwordBoxIn'>
        <input type='text' value={fPass} readOnly /> <button>Copy</button>
      </div>

      <div className='passLength'>
        <label>Password Length</label>
        <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordlen(event.target.value)}/>
      </div>

      <div className='passLength'>
        <label>Include uppercase letters</label>
        <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>

      <div className='passLength'>
        <label>Include lowercase letters</label>
        <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
      </div>
      <div className='passLength'>
        <label>Include numbers</label>
        <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
      </div>
      <div className='passLength'>
        <label>Include symbols </label>
        <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
      </div>
      <div>
        <button className='btn' onClick={createPassword} >
         Generate password
        </button>
      </div>

    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Api from './components/Api'
import {
 
  Routes,
  Route,
} from "react-router-dom";
import Show from './components/Show';

function App() {


  return (
    <div className="App">

<Routes>
      <Route path="/add" element={  <Api/>}/>
      <Route path="/show" element={ <Show/>}/>
       
      
    
    </Routes>

 
    
    </div>
  )
}

export default App

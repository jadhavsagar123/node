import { useState } from 'react'
import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Show from './components/Show';
import Navbar from './components/Navbar';
import Adduser from './components/Adduser';


function App() {
  return (
    <div className="App">
<Navbar/>
<Routes>
      <Route path="/adduser" element={  <Adduser/>}/>
      <Route path="/" element={ <Show/>}/>
    </Routes>
    </div>
  )
}

export default App

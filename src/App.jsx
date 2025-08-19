import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {AuthProvider} from "./contexts/AuthContext";

function App() {
  const [count, setCount] = useState(0)

  return (
      <AuthProvider>
        <Router>
          
          <Routes>
            
            
            
          </Routes>
          
          
        </Router>
        
        
      </AuthProvider>
      
  )


}

export default App


import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

//Component
import Home from './home/Home'
import Comment from './comment/Comment'


import './App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home/comment' element={<Comment/>} />
    </Routes>
  </Router>
  )
  

   
  
}

export default App;

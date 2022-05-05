import React,{useEffect,useState,useRef} from 'react';
import {Route,Routes} from 'react-router-dom';
import './App.css';

//components
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

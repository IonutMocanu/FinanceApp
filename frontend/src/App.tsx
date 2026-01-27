import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';


function App() {
  
  
  return <>
    <Navbar />
    <Outlet />
  </>
}

export default App;

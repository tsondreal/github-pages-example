import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppLayout from './pages/AppLayout';
import TableOfContents from './components/TableOfContents';
import MainAppBar from './components/MainAppBar';

import * as OnThisPageConstants from './components/OnThisPageConstants'


//First level
import GettingStarted from './pages/GettingStarted';
//GettingStarted Second Level
  import TSA from './docs/TSA'
  import AppRat from './docs/AppRat'
import P2A from './pages/P2A'

import ServiceManual from './pages/ServiceManual';
import ServiceGuide from './pages/ServiceGuide';


function App() {

  return (

  <div>      
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes >
        <Route element={ <AppLayout/>}>
        
          <Route path="/" element={ <GettingStarted />} >
              <Route index element={ <TSA/>} />
              <Route path="tsa" element={ <TSA/>} />
              <Route path="apprat" element={ <AppRat/>} />
          </Route>

          <Route path="p2a" element={ <P2A/>} />

          <Route path="manual" element={ <ServiceManual/>} />
          
          <Route path="guide" element={ <ServiceGuide/>} />

        </Route>
      </Routes>
    </BrowserRouter>`
  </div>

  );
}

export default App;



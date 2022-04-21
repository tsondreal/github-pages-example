import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AppLayout from './pages/AppLayout';


//First level
import GettingStarted from './pages/GettingStarted';
//GettingStarted Second Level
  import TSADoc from './docs/TSADoc'
  import AppRatDoc from './docs/AppRatDoc'
import P2A from './pages/P2A'

import ServiceManual from './pages/ServiceManual';
import ServiceGuide from './pages/ServiceGuide';


function App() {

  return (

  <div>      
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes >
        <Route element={ <AppLayout/>}>
          <Route path="/start" element={ <GettingStarted />} >
              <Route index element={ <TSADoc/>} />
              <Route path="start/tsa" element={ <TSADoc/>} />
              <Route path="start/apprat" element={ <AppRatDoc/>} />
          </Route>

          <Route path="p2a" element={ <P2A/>} />

          <Route path="manual" element={ <ServiceManual/>} />
          
          <Route path="guide" element={ <ServiceGuide/>} />

          <Route path="*" element={<Navigate to="/start" replace />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;


//{`/${process.env.PUBLIC_URL}`} 

/*
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
*/
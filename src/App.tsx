import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AppLayout from './pages/AppLayout';


//First level
import GettingStarted from './pages/GettingStarted';
//GettingStarted Second Level
  import TSADoc from './docs/TSADoc';
  import AppRatDoc from './docs/AppRatDoc';
  import SWClassVSM from './docs/SWClassVSMDoc';
import P2A from './pages/P2A';

import SoftwareTypeTool from './pages/SoftwareTypeTool';
import SoftwareTaxonomy from './pages/SoftwareTaxonomy';

import ServiceGuide from './pages/ServiceGuide';
import ServiceManual from './pages/ServiceManual';

import EAOffice from './pages/EAOffice';


function App() {

  return (

  <div>      
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes >
        <Route element={ <AppLayout/>}>
          <Route path="/start" element={ <GettingStarted />} >
              <Route index element={ <TSADoc/>} />
              <Route path="tsa" element={ <TSADoc/>} />
              <Route path="apprat" element={ <AppRatDoc/>} />
              <Route path="classvsm" element={ <SWClassVSM/>} />
          </Route>

          <Route path="p2a" element={ <P2A/>} />

          <Route path="swtypetool" element={ <SoftwareTypeTool/>} />
          <Route path="swtaxonomy" element={ <SoftwareTaxonomy/>} />

          <Route path="manual" element={ <ServiceManual/>} />
          
          <Route path="guide" element={ <ServiceGuide/>} />

          <Route path="eaoffice" element={ <EAOffice/>} />

          <Route path="*" element={<Navigate to="/start" replace />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;


//{`/${process.env.PUBLIC_URL}`} 

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AppLayout from './pages/AppLayout';
import ScrollToTop from "./components/ScrollToTop";

//First level
import GettingStarted from './pages/GettingStarted';
//GettingStarted Second Level
  import ProblemStatementDoc from './docs/ProblemStatementDoc';
  import SolutionOptionsDoc from './docs/SolutionOptionsDoc';
  import AppropriateSolutionDoc from './docs/AppropriateSolutionDoc';
  import RFXDoc from './docs/RFXDoc';
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
      <ScrollToTop>
      <Routes >
        <Route element={ <AppLayout/>}>
          <Route path="/start" element={ <GettingStarted />} >
              <Route index element={ <ProblemStatementDoc/>} />
              <Route path="problem-statement" element={ <ProblemStatementDoc/>} />
              <Route path="solution-options" element={ <SolutionOptionsDoc/>} />
              <Route path="solution" element={ <AppropriateSolutionDoc/>} />
              <Route path="rfx" element={ <RFXDoc/>} />
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
      </ScrollToTop>
    </BrowserRouter>
  </div>

  );
}

export default App;


//{`/${process.env.PUBLIC_URL}`} 
/*
  import TSADoc from './docs/TSADoc';
  import AppRatDoc from './docs/AppRatDoc';
  import SWClassVSM from './docs/SWClassVSMDoc';

*/

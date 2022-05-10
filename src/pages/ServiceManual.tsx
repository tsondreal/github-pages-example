import * as React from 'react';
import '../App.css';
import OnThisPage from '../components/OnThisPage';
import ServiceManualDoc from '../docs/ServiceManualDoc';
import * as OnThisPageConstants from '../components/OnThisPageConstants';
import LightFooter from '../components/LightFooter';


export default function ServiceManual() {
    document.title = "Service Manual"
    
  return (

    <div className="flex flex-row  ">
        <div className="w-4/5 h-full">
           
            <div className="maindoc flex flex-col overflow-scroll " >
                
                <div className="h-5/6">
                    <ServiceManualDoc/>
                </div>
                <div className="h-1/6">
                    <LightFooter />
                </div>
            </div>
            
        </div>

        <div className="w-1/5">

            <div className="mainonthispage">
                <OnThisPage resourceName={OnThisPageConstants.SERVICE_MANUAL}/>
            </div>

        </div> 

    </div>

    );
}

import '../App.css';
import Box from '@mui/material/Box';

import OnThisPage from '../components/OnThisPage';
import * as OnThisPageConstants from '../components/OnThisPageConstants'
import GettingStartedDoc from '../docs/GettingStartedDoc';
import LightFooter from '../components/LightFooter'


export default function GettingStarted() {
    document.title = "Get Started"
    
  return (

    <div className="flex flex-row overflow-hidden">
        <div className="w-4/5 ">
           
            <div className="maindoc flex flex-col h-screen" >
                <GettingStartedDoc />
                <LightFooter />
            </div>
            
        </div>

        <div className="w-1/5">

            <div className="mainonthispage">
                <OnThisPage resourceName={OnThisPageConstants.GETTING_STARTED}/>
            </div>

        </div> 

    </div>

    );
}

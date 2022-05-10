import '../App.css';

import OnThisPage from '../components/OnThisPage';
import * as OnThisPageConstants from '../components/OnThisPageConstants'
import EAOfficeDoc from '../docs/EAOfficeDoc';
import LightFooter from '../components/LightFooter'


export default function EAOffice() {
    document.title = "EA Office"
    
  return (

    <div className="flex flex-row overflow-hidden">
        <div className="w-4/5 ">
           
            <div className="maindoc flex flex-col h-screen" >
                <EAOfficeDoc />
                <LightFooter />
            </div>
            
        </div>

        <div className="w-1/5">

            <div className="mainonthispage">
                <OnThisPage resourceName={OnThisPageConstants.EA_OFFICE}/>
            </div>

        </div> 

    </div>

    );
}

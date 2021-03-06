import '../App.css';
import OnThisPage from '../components/OnThisPage';
import P2ADoc from '../docs/P2ADoc';
import * as OnThisPageConstants from '../components/OnThisPageConstants'
import LightFooter from '../components/LightFooter';


export default function P2A() {
    document.title = "P2A"
    
  return (

    <div className="flex flex-row  ">
        <div className="w-4/5 h-full">
           
            <div className="maindoc flex flex-col overflow-scroll " >
                
                <div className="h-5/6">
                    <P2ADoc/>
                </div>
                <div className="h-1/6">
                    <LightFooter />
                </div>
            </div>
            
        </div>

        <div className="w-1/5">

            <div className="mainonthispage">
                <OnThisPage resourceName={OnThisPageConstants.P2A}/>
            </div>

        </div> 

    </div>

    );
}
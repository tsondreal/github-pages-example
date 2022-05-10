import '../App.css';
import OnThisPage from '../components/OnThisPage';
import ServiceGuideDoc from '../docs/ServiceGuideDoc';
import * as OnThisPageConstants from '../components/OnThisPageConstants';
import LightFooter from '../components/LightFooter';


export default function ServiceGuide() {
    document.title = "Service Guide"
    
  return (

    <div className="flex flex-row  ">
        <div className="w-4/5 h-full">
           
            <div className="maindoc flex flex-col overflow-scroll " >
                
                <div className="h-5/6">
                    <ServiceGuideDoc/>
                </div>
                <div className="h-1/6">
                    <LightFooter />
                </div>
            </div>
            
        </div>

        <div className="w-1/5">

            <div className="mainonthispage">
                <OnThisPage resourceName={OnThisPageConstants.SERVICE_GUIDE}/>
            </div>

        </div> 

    </div>

    );
}

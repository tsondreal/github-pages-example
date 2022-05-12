import '../App.css';
import OnThisPage from '../components/OnThisPage';
import * as OnThisPageConstants from '../components/OnThisPageConstants'
import TemplateTabsDoc from '../docs/TemplateTabsDoc';
import LightFooter from '../components/LightFooter';


export default function TemplatePage() {
    document.title = "Get Started"
    
  return (

    <div className="flex flex-row  ">
        <div className="w-4/5 h-full">
           
            <div className="maindoc flex flex-col overflow-scroll " >
                
                <div className="h-5/6">
                    <TemplateTabsDoc/>
                </div>
                <div className="h-1/6">
                    <LightFooter />
                </div>
            </div>
            
        </div>

        <div className="w-1/5">

            <div className="mainonthispage">
                <OnThisPage resourceName={OnThisPageConstants.TABS_TEMPLATE}/>
            </div>

        </div> 

    </div>

    );
}

import '../App.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import OnThisPage from '../components/OnThisPage';
import ServiceGuideDoc from '../docs/ServiceGuideDoc';
import * as OnThisPageConstants from '../components/OnThisPageConstants'

export default function ServiceGuide() {

  return (

    <div className="flex">
        <div className="basis-10/12">

            <Box sx={{ my: 3}}>
                <div className="maindoc1left" >
                    <Toolbar id="back-to-top-anchor" />
                    <ServiceGuideDoc/>
                </div>
            </Box>

        </div>

        <div className="basis-2/12">

            <Box sx={{ my: 3}}>
                <div className="maindoc1right">
                    <Toolbar id="back-to-top-anchor" />
                    <OnThisPage resourceName={OnThisPageConstants.SERVICE_GUIDE}/>
                </div>
            </Box>

        </div> 

    </div>

    );
}

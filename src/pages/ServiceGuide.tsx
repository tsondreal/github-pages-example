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

            <Box sx={{ my: 2}}>
                <div className="maindoc1left" >
                    <ServiceGuideDoc/>
                </div>
            </Box>

        </div>

        <div className="basis-2/12">

            <Box sx={{ my: 2}}>
                <div className="maindoc1right">
                    
                    <OnThisPage resourceName={OnThisPageConstants.SERVICE_GUIDE}/>
                </div>
            </Box>

        </div> 

    </div>

    );
}

/*
<Toolbar id="back-to-top-anchor" />
*/
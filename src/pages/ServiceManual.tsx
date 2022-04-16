import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import OnThisPage from '../components/OnThisPage';
import ServiceManualDoc from '../docs/ServiceManualDoc';
import * as OnThisPageConstants from '../components/OnThisPageConstants'

export default function ServiceGuide() {

  return (

    <div className="flex">
        <div className="basis-10/12">

            <Box sx={{ my: 2}}>
                <div className="maindoc1left" >
                <ServiceManualDoc/>
                
                </div>
            </Box>

        </div>

        <div className="basis-2/12">

            <Box sx={{ my: 2}}>
                <div className="maindoc1right">
                <OnThisPage resourceName={OnThisPageConstants.SERVICE_MANUAL}/>
                </div>
            </Box>

        </div> 

    </div>

    );
}

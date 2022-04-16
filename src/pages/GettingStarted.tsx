import '../App.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import OnThisPage from '../components/OnThisPage';
import * as OnThisPageConstants from '../components/OnThisPageConstants'
import GettingStartedDoc from '../docs/GettingStartedDoc';


export default function GettingStarted() {

    console.log("Getting Started");

  return (

    <div className="flex">
        <div className="basis-10/12">

            <Box sx={{ my: 2}}>
                <div className="maindoc1left" >
                    <GettingStartedDoc />
                </div>
            </Box>

        </div>

        <div className="basis-2/12">

            <Box sx={{ my: 2}}>
                <div className="maindoc1right">
                    <OnThisPage resourceName={OnThisPageConstants.GETTING_STARTED}/>
                </div>
            </Box>

        </div> 

    </div>

    );
}

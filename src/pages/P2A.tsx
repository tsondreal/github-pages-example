import '../App.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import OnThisPage from '../components/OnThisPage';
import P2ADoc from '../docs/P2ADoc';
import * as OnThisPageConstants from '../components/OnThisPageConstants'

export default function P2A() {

    console.log("P2A");

  return (

    <div className="flex">
        <div className="basis-10/12">

            <Box sx={{ my: 2}}>
                <div className="maindoc1left" >
                    <P2ADoc/>
                </div>
            </Box>

        </div>

        <div className="basis-2/12">

            <Box sx={{ my: 2}}>
                <div className="maindoc1right">
                    <OnThisPage resourceName={OnThisPageConstants.P2A}/>
                </div>
            </Box>

        </div> 

    </div>

    );
}

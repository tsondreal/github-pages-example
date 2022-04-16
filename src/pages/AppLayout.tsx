import { Outlet } from 'react-router-dom';
import '../App.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import TableOfContents from '../components/TableOfContents';
import MainAppBar from '../components/MainAppBar';
import LightMenuBar from '../components/LightMenuBar';


function AppLayout() {
  return (

    <div >
      <section>    
        <LightMenuBar/>
      </section>  

      <section >
        <div className="flex">

          <div className="basis-3/12">

            <Box sx={{ my: 2}}>
              <div className="maindoc1right">
                
                <TableOfContents/>
              </div>
            </Box>

          </div>

          <div className="basis-9/12">

            <div>      
                <Outlet />
            </div>

          </div>

        </div>
      </section>
      
      {/*  Site footer */}

    </div>

  );
}

export default AppLayout;




import { Outlet } from 'react-router-dom';
import '../App.css';

import TableOfContents from '../components/TableOfContents';
import LightMenuBar from '../components/LightMenuBar';


function AppLayout() {
  return (

    <div id="app-layout" className="h-screen flex flex-col overflow-hidden">

        <div id="menu-bar" className="flex flex-none items-center justify-between flex-wrap">
          <LightMenuBar/>
        </div>

        <div className="flex-row flex overflow-hidden">

          <div className="w-1/5">
            
              <div className="maintoc">
                <TableOfContents/>
              </div>
            
          </div>

          <div className="w-4/5">

            <div className="">      
                <Outlet />
            </div>

          </div>

        </div>
      
      {/*  Site footer */}

    </div>

  );
}

export default AppLayout;

/*
    <div >
 

      <section >

        <div id="menu-bar" className="sticky top-0 z-50">
          <LightMenuBar/>
        </div>

        <div className="flex flex-row">

          <div className="w-1/5">
            
              <div className="maintoc">
                <TableOfContents/>
              </div>
            
          </div>

          <div className="w-4/5">

            <div className="">      
                <Outlet />
            </div>

          </div>

        </div>
      </section>
      
      {/*  Site footer */ /*}

      </div>
*/


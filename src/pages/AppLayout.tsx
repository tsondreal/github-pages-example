import { Outlet } from 'react-router-dom';
import '../App.css';
import TableOfContents from '../components/TableOfContents';
import LightMenuBar from '../components/LightMenuBar';


function AppLayout() {
  return (

    <div id="app-layout" className="h-screen flex flex-col">

        <div id="menu-bar" className="sticky top-0 z-50 items-center justify-between flex-wrap">
          <LightMenuBar/>
        </div>

        <div className="flex-row flex ">

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
      
    </div>

  );
}

export default AppLayout;


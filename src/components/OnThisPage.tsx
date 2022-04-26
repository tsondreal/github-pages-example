import { useState, useEffect } from 'react';
import { emitCustomEvent } from 'react-custom-events';
import * as OnThisPageConstants from '../components/OnThisPageConstants'
import { test } from '../resources/onthispage-test';
import { P2A } from '../resources/onthispage';
import { GETSTARTED } from '../resources/onthispage';
import { EAOFFICE } from '../resources/onthispage';


interface IOnThisPage {
        resourceName: string;
}

export default function OnThisPage(props: IOnThisPage) {

        const [resourceName, setResourceName] = useState(props.resourceName);
        const [alignedArr, setAlignedArr] = useState<any>([]);

        useEffect(() => {
                switch (resourceName) {
                        case OnThisPageConstants.GETTING_STARTED:
                                setAlignedArr(GETSTARTED);
                                break;
                        case OnThisPageConstants.P2A:
                                setAlignedArr(P2A);
                                break;
                        case OnThisPageConstants.EA_OFFICE:
                                setAlignedArr(EAOFFICE);
                                break;
                        default:
                                setAlignedArr(test);
                                break;
                }
        });

        //let c_event = new CustomEvent("something", {detail: 3})
        const anchorTagSelection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                console.log("OnThisPage - anchorTagSelection - event.currentTarget.id = " + event.currentTarget.id );
                console.log(event.currentTarget.id);
                if (event.currentTarget.id !== "#") {
                        console.log("OnThisPage - anchorTagSelection - ready to emit custom event " + event.currentTarget.id );
                        emitCustomEvent('on-this-page-tab-event', event.currentTarget.id);
                }

        }

  return (
        <div className="pt-10 hidden md:block fixed h-screen px-3">
        <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page</h5>
        <ul className="text-slate-700 text-sm leading-6">
            {
                    
                    alignedArr.map((item:any, index:number) => (
                    <li key={index}>
                            <a href={item.href} className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            {item.level1}
                            </a>  
                            {item.level2arr.map((c:any, i:number) => (
                                <div className="ml-4" key={i}>
                                        <a href={c.href} onClick={anchorTagSelection} id={c.tabid} className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                                <svg
                                                width="3" height="24" viewBox="0 -9 3 24"
                                                className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                                </path>
                                                </svg>
                                                {c.level2}
                                        </a>
                                </div>               
                            ))}

                    </li>

            ))

            }

        </ul>
        </div>   
  )
}

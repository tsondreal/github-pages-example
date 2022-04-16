import React, { useState, useEffect } from 'react';
import _ from "lodash";
import * as OnThisPageConstants from '../components/OnThisPageConstants'
import { test } from '../resources/onthispage-test';
import { P2A } from '../resources/onthispage'


interface IOnThisPage {
        resourceName: string;
}

export default function OnThisPage(props: IOnThisPage) {

        const [resourceName, setResourceName] = useState(props.resourceName);
        const [alignedArr, setAlignedArr] = useState<any>([]);

        useEffect(() => {
                switch (resourceName) {
                        case OnThisPageConstants.GETTING_STARTED:
                                setAlignedArr(test);
                                break;
                        case OnThisPageConstants.P2A:
                                setAlignedArr(P2A);
                                break;
                        default:
                                setAlignedArr(test);
                                break;
                }
        });


  return (
        <div className="py-6 overflow-y-auto hidden md:block">
        <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page</h5>
        <ul className="text-slate-700 text-sm leading-6">
            {
                    
                    alignedArr.map((item:any, index:number) => (
                    <li key={index}>
                            <a href="#className-reference" className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            {item.level1}
                            </a>  
                            {item.level2arr.map((c:any, i:number) => (
                                    <div className="ml-4" key={i}>
                                            <a href="#setting-the-flex-basis" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
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

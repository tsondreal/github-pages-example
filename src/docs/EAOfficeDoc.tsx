import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCustomEventListener } from 'react-custom-events';

export default function EAOfficeDoc() {

    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState("start/tsa");


    const tabClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        //console.log("GettingStartedDoc - tabClick - " + event.currentTarget.id);
        console.log(event.currentTarget.id)
        setCurrentTab(event.currentTarget.id)
        navigate(event.currentTarget.id)
    }

    useCustomEventListener('on-this-page-tab-event', data => {
        //console.log("GettingStartedDoc - useCustomEventListener - " + data);
        let targetID:any = data;
        setCurrentTab(targetID)
        navigate(targetID)
    });

    //console.log("Getting Started Doc");
  return (

        <main className="max-w-3xl mx-auto pt-8 xl:max-w-none pr-6 pl-4 overflow-scroll w-full">
            <header id="header" className="mb-10 md:flex md:items-start">
                <div className="flex-auto max-w-4xl">

                    <h1 id="get-started" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                        EA Office
                    </h1>
                    <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
                        TBD
                    </p>

                </div>
            </header>
            <div className="mb-16">
                <div className="relative z-10">
                    <h2 data-docsearch-ignore="true" id="conditions" className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">
                        TBD
                    </h2>
                </div>
            </div>
        </main>
    );
}

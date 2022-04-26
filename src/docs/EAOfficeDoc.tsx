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
                When looking to purchase or acquire a new software solution, or renew a contract on existing software, your
                solution is required to meet the conditions outlined below. Please be aware that based on the classification of the
                software solution, the conditions may vary.
            </p>

        </div>
    </header>
    <div className="mb-16">
        <div className="relative z-10">
            <h2 data-docsearch-ignore="true" id="conditions" className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">
                Required Conditions
            </h2>
            <ul className="list-disc list-inside mt-4 text-slate-700 dark:text-slate-400 marker:text-slate-500">
                <li>Software Classification and Value Stream Mapping</li>
                <li>Application Portfolio Management (APM) practices</li>
                <li>TSA and TSDD principles and standards</li>
                <li>External Data standards</li>
                <li>Privacy and compliance standards</li>
                <li>Information security standards</li>
            </ul>   

            <div className="flex overflow-auto mb-6 mt-6 -mx-4 sm:-mx-6">
                <div className="flex-none min-w-full px-4 sm:px-6">
                    <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5">
                        <li>
                            <h2>
                                <a className = {currentTab === "start/tsa" ? "flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-sky-500 border-current" : "flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700"} 
                                    id="start/tsa"
                                    onClick={ tabClick }
                                    >
                                    Target State Architecture (TSA)
                                </a>
                            </h2>
                        </li>
                        <li>
                            <h2>
                            <a className = {currentTab === "start/apprat" ? "flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-sky-500 border-current" : "flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700"} 
                                    id="start/apprat"
                                    onClick={ tabClick }
                                    >Application Rationalization
                                </a>
                            </h2>
                        </li>
                        <li>
                            <h2>
                            <a className = {currentTab === "ARP" ? "flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-sky-500 border-current" : "flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700"} 
                                    id="ARP"
                                    onClick={tabClick}                                    
                                    href="/docs/installation/framework-guides">Asset Risk Profile
                                </a>
                            </h2>
                        </li>
                        <li>
                            <h2>
                            <a className = {currentTab === "SAAS" ? "flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-sky-500 border-current" : "flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700"} 
                                    id="SAAS"
                                    onClick={tabClick}                                    
                                    href="/docs/installation/play-cdn">
                                        SaaS
                                </a>
                            </h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="">
            <Outlet />
        </div>

    </div>
    <div className="">
        <h2 className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">What to read next</h2>
        <div className="mb-10 max-w-2xl prose prose-slate xl:mb-0 dark:prose-dark">
            <p>Get familiar with some of the core concepts that make Tailwind CSS different from writing traditional
                CSS.</p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-2 xl:gap-y-10">
            <li className="relative flex items-start">
                <div
                    className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20">
                    <div className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
                        >
                    </div>
                    <div className="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"
                        >
                    </div>
                </div>
                <div className="peer group flex-auto ml-6">
                    <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200"><a
                            className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                            href="/docs/utility-first">Utility-First Fundamentals<svg viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
                                <path d="M0 0L3 3L0 6" fill="none" strokeWidth="2" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></a></h3>
                    <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                        <p>Using a utility-first workflow to build complex components from a constrained set of
                            primitive utilities.</p>
                    </div>
                </div>
                <div
                    className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4">
                </div>
            </li>
            <li className="relative flex items-start">
                <div
                    className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20">
                    <div className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
                        >
                    </div>
                    <div className="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"
                        >
                    </div>
                </div>
                <div className="peer group flex-auto ml-6">
                    <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200"><a
                            className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                            href="/docs/responsive-design">Responsive Design<svg viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
                                <path d="M0 0L3 3L0 6" fill="none" strokeWidth="2" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></a></h3>
                    <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                        <p>Build fully responsive user interfaces that adapt to any screen size using responsive
                            modifiers.</p>
                    </div>
                </div>

            </li>


        </ul>
    </div>
</main>

    );
}

/*

                <div
                    className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4">
                </div>

*/
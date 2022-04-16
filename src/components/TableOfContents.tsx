import { useNavigate } from 'react-router-dom';

export default function TableOfContents() {

        const navigate = useNavigate();

        const tocClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        
                console.log("tocClick");
                let tocName = event.currentTarget.id;
                console.log("tocClick - tocName = " + tocName);
                switch (tocName) {
                        case "start":
                                navigate("/");
                                //navigate(`${process.env.PUBLIC_URL}/`);
                                break;
                        case "p2a":
                                navigate(tocName);
                                break;
                        case "manual":
                                navigate(tocName);
                                break;
                        case "guide":
                                navigate(tocName);
                                break;
                        default:
                                navigate(tocName);
                                break;
                }                

            }

  return (
<div className="hidden md:block pb-10 px-2 py-2 overflow-y-auto">
    <nav id="nav" className="text-sm leading-6 relative">

        <ul>
            
            <li className="mt-4 lg:mt-4">          
            <a id="start" onClick={ tocClick } className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                    <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" className="fill-green-200 group-hover:fill-green-400 dark:fill-green-300 dark:group-hover:fill-green-500"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-200">Getting Started</h5>
                </a>
                <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                        <li>
                        <a id="p2a" onClick={ tocClick } className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            >
                                Purchasing New Software
                        </a>
                        </li>
                    <li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            href="/docs/editor-setup">Evaluating and Experimenting with Software</a></li>
                    <li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            href="/docs/using-with-preprocessors">Managing the Lifecycle of Purchased Software</a></li>
                </ul>
            </li>
            <li className="mt-12 lg:mt-8">

            <a id="manual" onClick={ tocClick } className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                    <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#3346FF" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                className="fill-blue-300 group-hover:fill-blue-400 dark:fill-blue-300 dark:group-hover:fill-blue-500">
                            </path>
                        </svg>
                        </div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-200">Service Manual</h5>
                </a>
               
                <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            href="/docs/utility-first">What Software is Applicable</a></li>
                    <li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            href="/docs/hover-focus-and-other-states">Pre-Requisites</a></li>
                    <li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            href="/docs/responsive-design">Use Cases and Scenarios</a></li>
                </ul>
            </li>
            <li className="mt-12 lg:mt-8">
            <a id="guide" onClick={ tocClick } className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                    <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#3346FF" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                className="fill-indigo-300 group-hover:fill-indigo-400 dark:fill-slate-400"></path>

                        </svg></div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-200">Service Guide</h5>
                </a>
                <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    <li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            href="/docs/configuration">Introduction to GetTech</a></li>
                    <li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            href="/docs/content-configuration">What is GetTech</a></li>
                    <li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            href="/docs/theme">Why Do You Need GetTech</a></li>
                    <li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            href="/docs/screens">Key Terms</a></li>
                    <li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            href="/docs/customizing-colors">The Importance to Allstate</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</div>
    );
}

/*
{`${process.env.PUBLIC_URL}/ServiceManual`} 
*/
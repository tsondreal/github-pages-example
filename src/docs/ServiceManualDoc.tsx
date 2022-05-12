import * as React from 'react';

export default function ServiceManualDoc() {

  return (

    <main className="max-w-3xl mx-auto relative z-20 pt-4 xl:max-w-none">
    <header id="header" className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                Service Manual
            </h1>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
                TBD
            </p>

        </div>
    </header>
    <section className="mb-16 relative">
        <div className="relative z-10">
            <h2 data-docsearch-ignore="true" className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">
                TBD
            </h2>
        </div>
    </section>
    <section className="relative">
        <h2 className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">TBD</h2>
        <div className="mb-10 max-w-2xl prose prose-slate xl:mb-0 dark:prose-dark">
            <p>TBD.</p>
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
                            href="">TBD<svg viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
                                <path d="M0 0L3 3L0 6" fill="none" strokeWidth="2" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></a></h3>
                    <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                        <p>
                            TBD
                        </p>
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
                            href="">TBD<svg viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
                                <path d="M0 0L3 3L0 6" fill="none" strokeWidth="2" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></a></h3>
                    <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                        <p>
                            TBD
                        </p>
                    </div>
                </div>
                <div
                    className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4">
                </div>
            </li>


        </ul>
    </section>
    </main>

    );
}

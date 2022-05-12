import SoftwareTypeSurvey from '../components/SoftwareTypeSurvey';

export default function AppropriateSolutionDoc() {

  return (

    <div className="">

        <div id="content-wrapper" className="relative z-10 prose prose-slate mb-16 min-w-full dark:prose-dark">
            <h3 className="sr-only">Most Appropriate Solution</h3>
            <p>
            Most Appropriate Solution
            </p>
        </div>
        <div className="hidden sm:block absolute top-0 left-[15%] pt-[40%] 2xl:left-[40%] 2xl:pt-[8%] dark:hidden"><img
                src="/_next/static/media/installation.9713bc44d9403301b053edfbc12e7b1c.jpg" alt=""
                className="w-[52.6875rem] max-w-none"/></div>
        <ol className="relative space-y-2 mb-16">
            <li className="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-['1'] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"
                >
                <div className="mb-6 col-span-2 xl:mb-0">
                    <h4 className="text-sm leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200">Add the Play CDN
                        script to your HTML</h4>
                    <div className="prose prose-slate prose-sm dark:prose-dark">
                        <p>Add the Play CDN script tag to the <code>&lt;head&gt;</code> of your HTML file, and start
                            using Tailwind’s utility classNamees to style your content.</p>
                    </div>
                </div>
                <div
                    className="relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
                    <div className="relative flex text-slate-400 text-xs leading-6">
                        <div
                            className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                            index.html</div>
                        <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                            <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                        </div>
                        <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                            <div className="relative flex -mr-2"><button type="button"
                                    className="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                        aria-hidden="true" className="w-8 h-8">
                                        <path
                                            d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19">
                                        </path>
                                        <path
                                            d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5">
                                        </path>
                                    </svg></button></div>
                        </div>
                    </div>
                    <div className="relative">
                        <pre className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto"><code className="flex-none min-w-full p-5"><span className="token block"><span className="token doctype punctuation">&lt;!</span><span className="token doctype doctype-tag">doctype</span><span className="token doctype"> </span><span className="token doctype name">html</span><span className="token doctype punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token block"><span className="token plain"></span><span className="token tag punctuation">&lt;</span><span className="token tag">html</span><span className="token tag punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token block"><span className="token plain"></span><span className="token tag punctuation">&lt;</span><span className="token tag">head</span><span className="token tag punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token block"><span className="token plain">  </span><span className="token tag punctuation">&lt;</span><span className="token tag">meta</span><span className="token tag"> </span><span className="token tag attr-name">charset</span><span className="token tag attr-value punctuation attr-equals">=</span><span className="token tag attr-value punctuation">"</span><span className="token tag attr-value">UTF-8</span><span className="token tag attr-value punctuation">"</span><span className="token tag punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token block"><span className="token plain">  </span><span className="token tag punctuation">&lt;</span><span className="token tag">meta</span><span className="token tag"> </span><span className="token tag attr-name">name</span><span className="token tag attr-value punctuation attr-equals">=</span><span className="token tag attr-value punctuation">"</span><span className="token tag attr-value">viewport</span><span className="token tag attr-value punctuation">"</span><span className="token tag"> </span><span className="token tag attr-name">content</span><span className="token tag attr-value punctuation attr-equals">=</span><span className="token tag attr-value punctuation">"</span><span className="token tag attr-value">width=device-width, initial-scale=1.0</span><span className="token tag attr-value punctuation">"</span><span className="token tag punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span className="token plain">  </span><span className="token tag punctuation">&lt;</span><span className="token tag">script</span><span className="token tag"> </span><span className="token tag attr-name">src</span><span className="token tag attr-value punctuation attr-equals">=</span><span className="token tag attr-value punctuation">"</span><span className="token tag attr-value">https://cdn.tailwindcss.com</span><span className="token tag attr-value punctuation">"</span><span className="token tag punctuation">&gt;</span><span className="token script"></span><span className="token tag punctuation">&lt;/</span><span className="token tag">script</span><span className="token tag punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token block"><span className="token plain"></span><span className="token tag punctuation">&lt;/</span><span className="token tag">head</span><span className="token tag punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token block"><span className="token plain"></span><span className="token tag punctuation">&lt;</span><span className="token tag">body</span><span className="token tag punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span className="token plain">  </span><span className="token tag punctuation">&lt;</span><span className="token tag">h1</span><span className="token tag"> </span><span className="token tag attr-name">className</span><span className="token tag attr-value punctuation attr-equals">=</span><span className="token tag attr-value punctuation">"</span><span className="token tag attr-value">text-3xl font-bold underline</span><span className="token tag attr-value punctuation">"</span><span className="token tag punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token plain block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">    Hello world!
</span><span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span className="token plain">  </span><span className="token tag punctuation">&lt;/</span><span className="token tag">h1</span><span className="token tag punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token block"><span className="token plain"></span><span className="token tag punctuation">&lt;/</span><span className="token tag">body</span><span className="token tag punctuation">&gt;</span><span className="token plain"></span>
</span><span className="token block"><span className="token plain"></span><span className="token tag punctuation">&lt;/</span><span className="token tag">html</span><span className="token tag punctuation">&gt;</span>
</span></code></pre>
                    </div>
                </div>
            </li>
            <li className="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-['2'] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"
                >
                <div className="mb-6 col-span-2 xl:mb-0">
                    <h4 className="text-sm leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200">Try customizing
                        your config</h4>
                    <div className="prose prose-slate prose-sm dark:prose-dark">
                        <p>Edit the <code>tailwind.config</code> object to <a href="/docs/configuration">customize your
                                configuration</a> with your own design tokens.</p>
                    </div>
                </div>
                <div
                    className="relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
                    <div className="relative flex text-slate-400 text-xs leading-6">
                        <div
                            className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                            index.html</div>
                        <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                            <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                        </div>
                        <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                            <div className="relative flex -mr-2"><button type="button"
                                    className="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                        aria-hidden="true" className="w-8 h-8">
                                        <path
                                            d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19">
                                        </path>
                                        <path
                                            d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5">
                                        </path>
                                    </svg></button></div>
                        </div>
                    </div>
                    <div className="relative">

                    </div>
                </div>
            </li>
            <li className="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"
                >
                <div className="mb-6 col-span-2 xl:mb-0">
                    <h4 className="text-sm leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200">Try adding some
                        custom CSS</h4>
                    <div className="prose prose-slate prose-sm dark:prose-dark">
                        <p>Use <code>type="text/tailwindcss"</code> to add custom CSS that supports all of Tailwind's
                            CSS features.</p>
                    </div>
                </div>
                <div
                    className="relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
                    <div className="relative flex text-slate-400 text-xs leading-6">
                        <div
                            className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                            index.html</div>
                        <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                            <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                        </div>
                        <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                            <div className="relative flex -mr-2"><button type="button"
                                    className="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                        aria-hidden="true" className="w-8 h-8">
                                        <path
                                            d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19">
                                        </path>
                                        <path
                                            d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5">
                                        </path>
                                    </svg></button></div>
                        </div>
                    </div>
                    <div className="relative">

                    </div>
                </div>
            </li>
            <li className="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5"
                >
                <div className="mb-6 col-span-2 xl:mb-0">
                    <h4 className="text-sm leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200">Try using a
                        first-party plugin</h4>
                    <div className="prose prose-slate prose-sm dark:prose-dark">
                        <p>Enable first-party plugins, like forms and typography, using the <code>plugins</code> query
                            parameter.</p>
                    </div>
                </div>
                <div
                    className="relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
                    <div className="relative flex text-slate-400 text-xs leading-6">
                        <div
                            className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                            index.html</div>
                        <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                            <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                        </div>
                        <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                            <div className="relative flex -mr-2"><button type="button"
                                    className="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                        aria-hidden="true" className="w-8 h-8">
                                        <path
                                            d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19">
                                        </path>
                                        <path
                                            d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5">
                                        </path>
                                    </svg></button></div>
                        </div>
                    </div>
                    <div className="relative">

                    </div>
                </div>
            </li>
        </ol>
    </div>



    );
}

import * as React from 'react';

import Typography from '@mui/material/Typography';

import logo from '../assets/images/gettechlogoicon.svg'

const pages = ['Overview', 'Service Guide', 'Latest News'];

const LightMenuBar = () => {

  return (
    <div className="w-full backdrop-blur flex-none transition-colors duration-500 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <a className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
            href={`${process.env.PUBLIC_URL}/`}>

          <img src={logo} width="30" height="30" alt="GetTech" />
          </a>
          <div className="text-slate-900 text-lg tracking-tight font-bold dark:text-slate-200" >
            GetTech
          </div>
          <a className="ml-3 text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 hidden md:flex items-center hover:bg-sky-400/20"
            href="/blog/tailwindcss-v3">
            <strong className="font-semibold">GetTech v1.0</strong>
            <svg
              width="2"
              height="2"
              fill="currentColor"
              aria-hidden="true"
              className="ml-2 text-sky-600 dark:text-sky-400/70">
              <circle cx="1" cy="1" r="1"></circle></svg>
              <span className="ml-2">
                Just-in-Time all the time, colored shadows
              </span>
              <svg
              width="3"
              height="6"
              className="ml-3 overflow-visible text-sky-300 dark:text-sky-400"
              aria-hidden="true"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
              </path>
              </svg>
          </a>
          <div className="relative sm:flex items-center ml-auto">
            <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 mr-8">
              <ul className="flex space-x-8">
                <li>
                  <a
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/docs/installation"
                    >
                      Start
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com"
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      Guide
                    </a>
                </li>
                <li>
                  <a
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/blog"
                    >
                      Manual
                    </a>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </div>
  </div>
  
  );
};
export default LightMenuBar;

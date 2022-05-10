import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SoftwareTypeSurvey from '../components/SoftwareTypeSurvey';

export default function SoftwareTaxonomyDoc() {


  return (


<main className="max-w-3xl mx-auto pt-8 xl:max-w-none pr-6 pl-4 overflow-scroll w-full">
    <header id="header" className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">

            <h1 id="get-started" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                Software Taxonomy
            </h1>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
                tbd.
            </p>

        </div>
    </header>
    <div>
        More to come 
    </div>
</main>

    );
}

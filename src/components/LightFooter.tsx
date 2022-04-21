import eaofflogo from '../assets/images/aics_logo_plain.svg'

export default function LightFooter() {



  return (

    <div className="pt-5 pb-20 border-t border-slate-200 text-slate-500 dark:border-slate-200/5 w-full">
        <div className="flex place-content-center text-sm">
            <img src={eaofflogo} width="15" height="15" alt="EA Office" />
            <p className="pr-2 ml-2">Enterprise Architecture Office</p>
            <p className="pl-2 border-l-2 sm:border-slate-200 dark:sm:border-slate-200/5">
                <a className="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">
                    Our Team
                </a>
            </p>
        </div>
    </div>    

    );
}

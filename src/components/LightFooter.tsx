import { useNavigate } from 'react-router-dom';

import eaofflogo from '../assets/images/aics_logo_plain.svg'

export default function LightFooter() {

    const navigate = useNavigate();

    const tocClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        
        console.log("LightFooter - tocClick");
        let tocName = event.currentTarget.id;
        console.log("LightFooter - tocClick - tocName = " + tocName);
        switch (tocName) {
                case "eaoffice":
                        navigate("/eaoffice");
                        //navigate(`${process.env.PUBLIC_URL}/`);
                        break;
                default:
                        navigate(tocName);
                        break;
        }                

    }

  return (

    <div className="pt-5 pb-10 border-t border-slate-200 text-slate-500 dark:border-slate-200/5 w-full">
        <div className="flex place-content-center text-sm">
            <img src={eaofflogo} width="20" height="20" alt="EA Office" />
            <p className="pr-2 ml-2">Enterprise Architecture Office</p>
            <p className="pl-2 border-l-2 sm:border-slate-200 dark:sm:border-slate-200/5">
                <a id="eaoffice" onClick={ tocClick } className="hover:text-slate-900 dark:hover:text-slate-400">
                    Our Team
                </a>
            </p>
        </div>
    </div>    

    );
}

// href={`${process.env.PUBLIC_URL}/eaoffice`}
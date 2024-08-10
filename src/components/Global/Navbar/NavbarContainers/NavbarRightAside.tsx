'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { DisplayingButtons } from '@/constants/data_compressed'
import { CiMenuFries } from "react-icons/ci";
import Dashboard from '@/app/news/page';

type Props = {}

const NavbarRightAside: React.FC<Props> = (props: Props) => {
    const dashboard_displaying_button = DisplayingButtons['DashboardClassic'];
    const getting_started_displaying_button = DisplayingButtons['GetStarted'];
    const [button_displaying, set_button_displaying] = useState<boolean>(true);

    return (
        // <div>
        //     <aside className="flex items-center gap-4">
        //         <Link
        //             href="/dashboard"
        //             className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        //         >
        //             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        //             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        //                 {button_displaying ? (
        //                     <div>{dashboard_displaying_button}</div>
        //                 ) : (
        //                     <div>{getting_started_displaying_button}</div>
        //                 )}
        //             </span>
        //         </Link>
        //       <CiMenuFries className='md:hidden'/>
        //     </aside>
        // </div>
        <div>
        <aside className="flex items-center gap-4">
            <Link
                href="/news"
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px]"
            >
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">
                    Dashboard
                </span>
            </Link>
        </aside>
    </div>
    )
}

export default NavbarRightAside

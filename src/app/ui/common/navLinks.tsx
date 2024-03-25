import Link from "../../../../node_modules/next/link";
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';

export default function NavLinks(){
    const links = [
        // {name: 'info', href:'/info', icon: UserGroupIcon},
        {name: '경력', href:'/experience', icon: UserGroupIcon},
        {name: '자기소개', href:'/introduction', icon: UserGroupIcon},
        {name: '포트폴리오', href:'/portfolio', icon: UserGroupIcon},
    ]
    return (
        <>
            {
                links.map((link)=>{
                    return(
                        <Link href={link.href} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                            <p>{link.name}</p>
                        </Link>
                    )
                })
            }
        </>
    )
}
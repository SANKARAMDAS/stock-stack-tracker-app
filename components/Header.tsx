import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
    return (
        <header className='sticky top-0 header'>
            <div className='container header-wrapper'>
                <Link href='/'>
                    <Image src='/assets/icons/logo.svg' alt='Stock-Stack logo' width={120} height={32} className='h-8 w-auto cursor-pointer'/>
                </Link>
                <nav className='hidden sm:block'>
                    {/*NavItems*/}
                    <NavItems />
                </nav>
                {/*UserDropdown*/}
                <UserDropdown user={undefined} initialStocks={[]} />
            </div>
        </header>
    )
}
export default Header

// 38:22
'use client';

import { useState } from "react";
import Link from "@/app/ui/Link";
import { Link as LinkType } from "@/app/types/global";
import ThomasLogo from "@/app/ui/ThomasLogo";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links: LinkType[] = [
        { name: 'Presentation', path: '/' },
        { name: 'Experiences', path: '/experiences' },
        { name: 'Projets', path: '/projets' },
        { name: 'Me contacter', path: '/contact' }
    ];

    return (
        <div className="relative flex flex-row bg-primary-dark h-16 shadow shadow-primary-light justify-between items-center gap-5 px-5">

            <ThomasLogo />

            {/* Liens de navigation visibles uniquement sur les écrans moyens et plus grands */}
            <div className='hidden md:flex gap-5'>
                {links.map((link) =>
                    <Link key={link.name} link={link} />
                )}
            </div>

            {/* Icône de l'hamburger visible uniquement sur les petits écrans */}
            <img
                onClick={() => setOpen(!open)}
                src='/icons/hamburger-menu.svg'
                alt='hamburger-menu-icon'
                className='md:hidden absolute top-2 right-5 hover:cursor-pointer'
            />

            {/* Menu mobile pour petits écrans avec animation */}
            <div
                className={`absolute top-0 right-0 w-screen h-screen bg-primary-dark flex flex-col gap-8 justify-center items-center transform transition-transform duration-500 ease-in-out
                ${open ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <img
                    onClick={() => setOpen(!open)}
                    src='/icons/close-menu.svg'
                    alt='close-menu-icon'
                    className='absolute top-2 right-5 hover:cursor-pointer'
                />

                {links.map((link) =>
                    <Link key={link.name} link={link} />
                )}
            </div>
        </div>
    );
};

export default Navbar;

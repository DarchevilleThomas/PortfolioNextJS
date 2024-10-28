"use client";

import { useState } from "react";
import Link from "@/app/ui/layout/navbar/Link";
import { Link as LinkType } from "@/app/types/global";
import ThomasLogo from "@/app/ui/layout/navbar/ThomasLogo";
import { Icon } from "@iconify/react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links: LinkType[] = [
        { name: "Presentation", path: "#presentation" },
        { name: "Compétences", path: "#competences" },
        { name: "Projets", path: "#projets" },
        { name: "Me contacter", path: "#contact" }
    ];

    return (
        <div
            className="fixed top-0 left-0 w-full flex flex-row bg-dark h-16 min-h-16 justify-between items-center gap-5 px-[9%] py-12 border-b border-black/20 z-50">

            <ThomasLogo />

            {/* Liens de navigation visibles uniquement sur les écrans moyens et plus grands */}
            <div className="hidden lg:flex gap-12">
                {links.map((link) =>
                    <Link key={link.name} link={link} />
                )}
            </div>

            {/* Icône de l'hamburger visible uniquement sur les petits écrans */}
            <Icon onClick={() => setOpen(!open)} icon={"solar:hamburger-menu-linear"} width={50} height={50} className="lg:hidden absolute top-6 right-12 hover:cursor-pointer" />

            {/* Menu mobile pour petits écrans avec animation */}
            <div
                className={`fixed top-0 right-0 w-screen h-screen bg-dark-light/60 flex flex-col gap-8 justify-center items-center transform transition-transform duration-500 ease-in-out backdrop-blur-xl
                ${open ? "translate-y-0" : "-translate-y-full"}`}
            >
                <Icon icon="material-symbols:close" width={50} height={50} className="absolute top-6 right-12 hover:cursor-pointer" onClick={() => setOpen(!open)} />

                {links.map((link) =>
                    <Link key={link.name} link={link} onClick={() => setOpen(!open)} />
                )}
            </div>
        </div>
    );
};

export default Navbar;

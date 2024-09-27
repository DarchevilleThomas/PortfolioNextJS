'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {name: 'Presentation', href: '/'},
    {name: 'Projets', href: '/projets'},
    {name: 'Experiences', href: '/experiences'},
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] items-center gap-2 rounded-md  text-sm font-medium hover:bg-custom-bg hover:font-bold justify-start p-2 px-3',
                            {
                                'bg-custom-bg text-white font-bold': pathname === link.href,
                            },
                        )}                    >
                        <p className="block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}

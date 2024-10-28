'use client';

import Image from "next/image";

const GoUpButton = () => {

    return (
        <button
            className="fixed w-12 h-12 md:w-16 md:h-16 bottom-4 right-4 flex items-center justify-center bg-primary text-white p-2 rounded-lg shadow-[0_0_1rem] shadow-primary hover:shadow-none transition duration-300 opacity-70"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Image src="/icons/arrow-up.svg" alt="up-arrow-icon" width={50} height={50}/>
        </button>
    )
}

export default GoUpButton;
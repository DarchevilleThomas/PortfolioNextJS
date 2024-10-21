'use client';

import Presentation from "@/app/ui/sections/Presentation";
import Competences from "@/app/ui/sections/Competences";
import Projets from "@/app/ui/sections/Projets";
import Contact from "@/app/ui/sections/Contact";
import {useEffect, useState} from "react";
import GoUpButton from "@/app/ui/layout/GoUpButton";

export default function Home() {

    const [showFab, setShowFab] = useState(false);

    // Fonction pour gérer le scroll et afficher le bouton
    useEffect(() => {
        const handleScroll = () => {
            const presentationSection = document.getElementById('presentation');
            const scrollPosition = window.scrollY * 1.5;
            const presentationBottom = presentationSection?.offsetHeight || 0;

            if (scrollPosition > presentationBottom) {
                setShowFab(true);
            } else {
                setShowFab(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Presentation />
            <Competences />
            <Projets />
            <Contact />
            {showFab && <GoUpButton />}
        </div>
    );
}


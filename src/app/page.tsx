import Presentation from "@/app/ui/sections/Presentation";
import Competences from "@/app/ui/sections/Competences";
import Projets from "@/app/ui/sections/Projets";
import Contact from "@/app/ui/sections/Contact";

export default function Home() {

    return (
        <div>
            <Presentation />
            <Competences />
            <Projets />
            <Contact />
        </div>
    );
}


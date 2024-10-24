import { CardType } from "@/app/types/global";
import { Card } from "@/app/ui/components/Card";

const Projets = () => {


    const projects: CardType[] = [
        {
            imageLink: "/images/raytracer.svg",
            title: "Raytracer",
            description: "Lanceur de rayons réalisé lors d'une SAE (Situation d'apprentissage et d'évaluation) par groupe de 4 personnes.",
            link: "https://github.com/DarchevilleThomas/RayTracer"
        },
        {
            imageLink: "/images/juste_prix.svg",
            title: "Juste Prix",
            description: "Célébre épreuve du Juste Prix créée sur Eclipse à l'aide de JavaFX afin de réaliser son interface graphique.",
            link: "https://github.com/DarchevilleThomas/JustePrix"
        },
        {
            imageLink: "/images/tictactoe.svg",
            title: "Morpion",
            description: "Jeu du morpion (Java) avec une interface graphique créée à l'aide de JavaFX sur Eclipse.",
            link: "https://github.com/DarchevilleThomas/MorpionJavaFX"
        },
        {
            imageLink: "/images/taquin.svg",
            title: "Taquin",
            description: "Taquin (Java) avec interface graphique créée à l'aide de JavaFX sur Eclipse.",
            link: "https://github.com/DarchevilleThomas/TaquinJavaFX"
        },
        {
            imageLink: "/images/bataille_navale.svg",
            title: "Bataille navale",
            description: "Bataille navale (Java) avec une interface graphique créée à l'aide de JavaFX sur IntelliJ et Eclipse.",
            link: "https://github.com/DarchevilleThomas/BatailleNavale"
        },
        {
            imageLink: "/images/github.svg",
            title: "Github",
            description: "Retrouvez tous mes futurs projets sur mon Github.",
            link: "https://github.com/DarchevilleThomas"
        }
    ];

    return (
        <div id="projets" className="min-h-screen w-full bg-dark flex flex-col items-center pt-28">
            <p className="text-3xl lg:text-5xl md:text-4xl font-bold">
                Mes <span className="text-primary">projets</span>
            </p>
            <div
                className="mt-5 w-full flex gap-7 items-start justify-center max-w-screen-2xl flex-wrap flex-grow h-full mb-3">
                {projects.map((project, index) => (
                    <Card card={project} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Projets;
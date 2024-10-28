import { CardInfo } from "@/app/types/global";
import CarouselContainer from "@/app/ui/components/CarouselContainer";
import { CardCompetence } from "@/app/ui/components/CardCompetence";
import { CompetenceItem } from "@/app/ui/components/CompetenceItem";

const Competences = () => {

    const cards: CardInfo[] = [
        { icon: "mdi:react", title: "React" },
        { icon: "mdi:symfony", title: "Symfony" },
        { icon: "mdi:laravel", title: "Laravel" },
        { icon: "akar-icons:postgresql-fill", title: "PostgreSQL" },
        { icon: "lineicons:mysql", title: "MySQL" },
        { icon: "akar-icons:typescript-fill", title: "TypeScript" },
        { icon: "akar-icons:python-fill", title: "Python" },
        { icon: "akar-icons:php-fill", title: "PHP" },
        { icon: "ri:java-fill", title: "Java" },
        { icon: "mdi:tailwind", title: "Tailwind CSS" },
        { icon: "ic:baseline-plus", title: "..." }
    ];

    const otherCards: CardInfo[] = [
        { icon: "mdi:docker", title: "Docker" },
        { icon: "mdi:git", title: "Git" },
        { icon: "mdi:linux", title: "Linux" }
    ];

    const softSkills: CardInfo[] = [
        { icon: "iconoir:agile", title: "Méthodes agiles" },
        { icon: "fluent-mdl2:teamwork", title: "Travail en équipe" },
        { icon: "icon-park-outline:muscle", title: "Persévérance" },
        { icon: "material-symbols:sentiment-stressed", title: "Gestion du stress" },
    ];

    return (
        <div id="competences"
             className="min-h-screen w-full bg-dark-light flex flex-col items-center pt-28">
            <p className="text-3xl lg:text-5xl md:text-4xl font-bold">Mes <span
                className="text-primary">compétences</span></p>
            <div className="mt-5 flex-1 w-full flex flex-col gap-7 items-center justify-center max-w-screen-2xl">
                <CarouselContainer cards={cards} title={"Langages et frameworks"} />
                <div className="bg-neutral-500 w-[95%] h-[1px] m-3" />
                <div
                    className="flex flex-1 w-full h-auto flex-col gap-4 lg:h-[250px] lg:flex-row px-4 mb-4"
                >
                    <CardCompetence
                        className="flex-1 cursor-pointer shadow-2xl flex flex-col items-start text-2xl lg:text-4xl"
                    >
                        <div className="p-4 flex flex-col flex-1 min-h-full">
                            <p className="font-bold mb-2">Autres</p>
                            <div className="flex lg:flex-col gap-4 items-center justify-center flex-1 w-full">
                                {otherCards.map((card) => (
                                    <CompetenceItem cardInfo={card} key={card.title} />
                                ))}
                            </div>
                        </div>
                    </CardCompetence>

                    <CardCompetence
                        className="flex-[2] cursor-pointer shadow-2xl flex flex-col items-start text-2xl lg:text-4xl"
                    >
                        <div className="p-4 flex flex-col flex-1 min-h-full">
                            <p className="font-bold mb-2">Soft skills</p>
                            <div className="flex flex-wrap gap-4 justify-center items-center flex-1 w-full">
                                {softSkills.map((card) => (
                                    <CompetenceItem cardInfo={card} key={card.title} />
                                ))}
                            </div>
                        </div>
                    </CardCompetence>
                </div>

            </div>
        </div>
    );
};

export default Competences;
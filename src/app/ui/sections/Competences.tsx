import { CardInfo } from "@/app/types/global";
import CarouselContainer from "@/app/ui/components/CarouselContainer";
import { CardCompetence } from "@/app/ui/components/CardCompetence";

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

    return (
        <div id="competences"
             className="min-h-screen w-full bg-dark-light flex flex-col items-center pt-28">
            <p className="text-3xl lg:text-5xl md:text-4xl font-bold">Mes <span className="text-primary">compétences</span></p>
            <div className="mt-5 flex-1 w-full flex flex-col gap-7 items-center justify-center max-w-screen-2xl">
                <CarouselContainer cards={cards} title={"Langages et frameworks"} />
                <div className="bg-neutral-500 w-[95%] h-[1px] m-3" />
                <div
                    className={
                        "flex flex-1 h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row px-3 mb-3"
                    }
                >
                    <CardCompetence
                        className="grow-[1] cursor-pointer flex-col items-start shadow-2xl whitespace-nowrap text-4xl"
                    >
                        <div className="p-3">
                            <p className="font-bold">Autres</p>
                        </div>
                    </CardCompetence>
                    <CardCompetence
                        className="grow-[2] cursor-pointer flex-col items-start shadow-2xl whitespace-nowrap text-4xl"
                    >
                        <div className="p-3">
                            <p className="font-bold">Soft skills</p>
                        </div>
                    </CardCompetence>
                </div>
            </div>
        </div>
    );
};

export default Competences;
import {CardInfo} from "@/app/types/global";
import CarouselContainer from "@/app/ui/components/CarouselContainer";

const Competences = () => {

    const cards: CardInfo[] = [
        {icon: 'mdi:react', title: 'React'},
        {icon: 'mdi:symfony', title: 'Symfony'},
        {icon: 'akar-icons:postgresql-fill', title: 'PostgreSQL'},
        {icon: 'akar-icons:typescript-fill', title: 'TypeScript'},
        {icon: 'akar-icons:python-fill', title: 'Python'},
        {icon: 'akar-icons:php-fill', title: 'PHP'},
        {icon: 'mdi:tailwind', title: 'Tailwind CSS'},
    ]

    return (
        <div id="competences" className="min-h-screen w-full bg-dark-light flex flex-col items-center pt-28">
            <p className="text-3xl md:text-4xl font-bold">Mes <span className="text-primary">compétences</span></p>
            <div className="mt-5 flex-1 w-full flex flex-col gap-7">
                <CarouselContainer cards={cards} title={"Langages et frameworks"} />
            </div>
        </div>
    )
}

export default Competences
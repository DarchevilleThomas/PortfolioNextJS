import {Carousel} from "@/app/ui/components/Carousel";
import {CardInfo} from "@/app/types/global";

type Props = {
    cards: CardInfo[],
    title: string,
    vertical?: boolean
}

const CarouselContainer = ({cards, title, vertical}: Props) => {

    return (
        <div className={`relative ${vertical ? 'h-full' : 'w-full'}`}>
            <div className="border-primary border-4 mx-3 rounded-3xl p-5 flex justify-center">
                <Carousel cardInfos={cards} vertical={vertical}/>
            </div>
            <p className="absolute bottom-[-18px] text-center w-[80%] sm:w-fit left-1/2 transform -translate-x-1/2 px-3 bg-dark-light rounded-xl">
                {title}
            </p>
        </div>
    )

}

export default CarouselContainer
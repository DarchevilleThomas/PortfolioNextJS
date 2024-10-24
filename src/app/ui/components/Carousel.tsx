import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {CardInfo} from "@/app/types/global";
import CarouselCard from "@/app/ui/components/CarouselCard";
import AutoScroll from "embla-carousel-auto-scroll";

type Props = {
    cardInfos: CardInfo[],
    vertical?: boolean
}

export function Carousel({cardInfos, vertical}: Props) {

    const [emblaRef] = useEmblaCarousel({ loop: true, axis: vertical ? 'y' : 'x' }, [AutoScroll({startDelay: 500, stopOnInteraction: false})])

    return (
        <div className="overflow-hidden scroll-container" ref={emblaRef}>
            <div className={`flex ${vertical && "flex-col"}`}>
                {cardInfos.map((card, index) => {
                    return (
                        <div className="flex pl-2" key={index}>
                            <CarouselCard cardInfo={card}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

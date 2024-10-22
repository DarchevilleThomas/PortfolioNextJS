import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {CardInfo} from "@/app/types/global";
import Card from "@/app/ui/components/Card";
import AutoScroll from "embla-carousel-auto-scroll";

type Props = {
    cardInfos: CardInfo[]
}

export function Carousel({cardInfos}: Props) {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll({startDelay: 500, stopOnInteraction: false})])

    return (
        <div className="overflow-hidden scroll-container" ref={emblaRef}>
            <div className="flex">
                {cardInfos.map((card, index) => {
                    return (
                        <div className="flex pl-2" key={index}>
                            <Card cardInfo={card}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

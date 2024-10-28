import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CardInfo } from "@/app/types/global";
import CarouselCard from "@/app/ui/components/CarouselCard";

type Props = {
    cardInfos: CardInfo[],
    vertical?: boolean
}

export function Carousel({ cardInfos, vertical }: Props) {
    // State to control the Embla carousel instance
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, axis: vertical ? "y" : "x" },
        []
    );

    // Enable or disable navigation buttons based on carousel state
    const [prevEnabled, setPrevEnabled] = useState(false);
    const [nextEnabled, setNextEnabled] = useState(false);

    // Enable or disable buttons based on emblaApi states
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevEnabled(emblaApi.canScrollPrev());
        setNextEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    // Scroll to the previous slide
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    // Scroll to the next slide
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Set up the onSelect listener whenever emblaApi changes
    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect(); // Set initial state for buttons
    }, [emblaApi, onSelect]);

    return (
        <div className="relative overflow-hidden scroll-container" ref={emblaRef}>
            <div className={`flex ${vertical ? "flex-col" : ""}`}>
                {cardInfos.map((card, index) => (
                    <div className="flex pl-2" key={index}>
                        <CarouselCard cardInfo={card} />
                    </div>
                ))}
            </div>

            <button
                onClick={scrollPrev}
                disabled={!prevEnabled}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
            >
                ◀
            </button>
            <button
                onClick={scrollNext}
                disabled={!nextEnabled}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
            >
                ▶
            </button>
        </div>
    );
}

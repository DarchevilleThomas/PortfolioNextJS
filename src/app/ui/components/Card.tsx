"use client";

import React, {
    createContext,
    useState,
    useContext,
    useRef,
    useEffect
} from "react";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { CardType } from "@/app/types/global";

type Props = {
    card: CardType;
}

export const Card = ({card}: Props) => {

    const {title, description, imageLink, link} = card;

return (
    <CardContainer className="inter-var flex-grow h-full">
        <CardBody
            className="bg-dark-light relative group/card border-black/[0.1] w-[calc(100vw-5rem)] md:w-full rounded-xl p-6 border hover:shadow-2xl hover:shadow-primary h-full flex flex-col"
        >
            <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
            >
                {title}
            </CardItem>
            <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-200 text-md max-w-sm min-h-20 mt-2 flex-grow"
            >
                {description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
                <Image
                    src={imageLink}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
                <CardItem
                    translateZ={20}
                    as={Link}
                    href={link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal bg-primary w-full flex items-center justify-center"
                >
                    <Icon icon={"bx:right-arrow"} width={40} height={40} />
                </CardItem>
            </div>
        </CardBody>
    </CardContainer>
);


};

const MouseEnterContext = createContext<
    [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
                                  children,
                                  className,
                                  containerClassName
                              }: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsMouseEntered(true);
        if (!containerRef.current) return;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };
    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn(
                    "flex items-center justify-center",
                    containerClassName
                )}
                style={{
                    perspective: "1000px"
                }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "flex items-center justify-center relative transition-all duration-200 ease-linear",
                        className
                    )}
                    style={{
                        transformStyle: "preserve-3d"
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
};

export const CardBody = ({
                             children,
                             className
                         }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardItem = ({
                             as: Tag = "div",
                             children,
                             className,
                             translateX = 0,
                             translateY = 0,
                             translateZ = 0,
                             rotateX = 0,
                             rotateY = 0,
                             rotateZ = 0,
                             ...rest
                         }: {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotateZ?: number | string;
    [key: string]: any;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
        handleAnimations();
    }, [isMouseEntered]);

    const handleAnimations = () => {
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        }
    };

    return (
        <Tag
            ref={ref}
            className={cn("w-fit transition duration-200 ease-linear", className)}
            {...rest}
        >
            {children}
        </Tag>
    );
};

// Create a hook to use the context
export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};

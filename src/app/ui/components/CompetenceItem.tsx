import { CardInfo } from "@/app/types/global";
import { Icon } from "@iconify/react";

type Props = {
    cardInfo: CardInfo
}

export const CompetenceItem = ({cardInfo}: Props) => {

    return (
        <div className="flex flex-col justify-center items-center">
            <Icon icon={cardInfo.icon} className="text-primary w-20 h-20" />
            <p className="text-white">{cardInfo.title}</p>
        </div>
    )
}

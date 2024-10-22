import {CardInfo} from "@/app/types/global";
import { Icon } from '@iconify/react';

type Props = {
    cardInfo: CardInfo
}

const Card = ({cardInfo}: Props) => {

  return (
      <div className="bg-dark p-2 border-primary border-2 rounded-lg w-30 sm:w-40 sm:h-40 flex flex-col justify-center items-center">
          <Icon icon={cardInfo.icon} className="text-primary w-20 h-20"/>
            <p className="text-white">{cardInfo.title}</p>
      </div>
  );
}

export default Card;
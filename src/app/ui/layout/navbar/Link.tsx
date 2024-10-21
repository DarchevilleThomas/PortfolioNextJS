import { Link as LinkType} from "@/app/types/global";

type Props = {
    link: LinkType,
    onClick?: () => void
}

const Link = ({link, onClick}: Props) => {

    return (
        <a href={link.path} onClick={onClick}
           className='hover:text-primary transition duration-300 text-xl'>
            {link.name}
        </a>
    )
}

export default Link
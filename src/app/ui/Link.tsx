import { Link as LinkType} from "@/app/types/global";

type Props = {
    link: LinkType
}

const Link = ({link}: Props) => {

    return (
        <a href={link.path}
           className='hover:text-primary-light font-bold transition duration-300'>
            {link.name.toUpperCase()}
        </a>
    )
}

export default Link
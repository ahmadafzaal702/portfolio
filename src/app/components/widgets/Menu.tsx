// import Link from "next/link";
import { Link, animateScroll as scroll } from 'react-scroll';

interface MenuInterface {
    title: string,
    children: React.ReactNode
}

// Menu Functional Component
const Menu: React.FC<MenuInterface> = ({ title, children }) => {
    return <li className='cursor-pointer'><Link to={title} spy={true} smooth={true} duration={500} activeClass="active" className="block py-2 px-2 font-link text-lg text-menu-color hover:text-white">{children}</Link></li>
}

export default Menu;

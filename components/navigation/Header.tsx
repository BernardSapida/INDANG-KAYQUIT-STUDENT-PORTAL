// Next Modules
import Image from "next/image";

// React-Icons
import { GiHamburgerMenu } from 'react-icons/gi';

// CSS
import style from "@/public/css/header.module.css";

function Header() {
    return (
        <header className={`${style.header}`}>
            <nav>
                <div>
                    <GiHamburgerMenu className="hamburger_menu" />
                </div>
            </nav>
            <div className="logo">
                <Image src="/images/kayquit-header.png" alt="Logo" width={220} height={40} priority={true} />
            </div>
        </header>
    );
}

export default Header;
import Image from "next/image";

import { GiHamburgerMenu } from 'react-icons/Gi';

import style from "@/public/css/header.module.css";

function Header() {
    return (
        <header className={`${style.header_portal}`}>
            <nav>
                <div>
                    <GiHamburgerMenu className="hamburger_menu" />
                </div>
            </nav>
            <div className="logo">
                <Image src="/images/2.png" alt="Logo" width={220} height={40} priority={true} />
            </div>
        </header>
    );
}

export default Header;
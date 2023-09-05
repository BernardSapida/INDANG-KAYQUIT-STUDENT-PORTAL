import Image from "next/image";

import { Dispatch, SetStateAction } from "react";

import { GiHamburgerMenu } from 'react-icons/gi';

import style from "@/public/css/header.module.css";

function Header({ showNavigation, setShowNavigation }: { showNavigation: boolean, setShowNavigation: Dispatch<SetStateAction<boolean>> }) {
    const clickMenu = () => setShowNavigation(!showNavigation);

    return (
        <header className={`${style.header}`}>
            <nav>
                <div>
                    <GiHamburgerMenu className="hamburger_menu" onClick={clickMenu} />
                </div>
            </nav>
            <div className="logo">
                <Image src="/images/kayquit-header.png" alt="Logo" width={220} height={40} priority={true} />
            </div>
        </header>
    );
}

export default Header;
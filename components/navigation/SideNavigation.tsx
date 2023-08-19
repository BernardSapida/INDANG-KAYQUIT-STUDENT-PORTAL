// React Modules
import { Dispatch, SetStateAction } from "react";

// Next Modules
import Link from "next/link";

// React-Icons
import { AiOutlineLogin } from 'react-icons/ai';
import { AiFillUnlock } from 'react-icons/ai';

// CSS
import style from "@/public/css/side-navigation.module.css";

function SideNavigation({ showNavigation, setShowNavigation }: { showNavigation: boolean, setShowNavigation: Dispatch<SetStateAction<boolean>> }) {
    return (
        <aside className={`${style.aside_navigation} ${showNavigation ? style.active : ''}`}>
            <h2>Navigation</h2>
            <ul>

                <li><Link href="/" onClick={() => setShowNavigation(!showNavigation)}><AiOutlineLogin /> Login</Link></li>
                <li><Link href="/forgot-password" onClick={() => setShowNavigation(!showNavigation)}><AiFillUnlock /> Forgot Password</Link></li>
            </ul>
        </aside>
    );
}

export default SideNavigation;
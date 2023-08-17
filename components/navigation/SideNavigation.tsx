// Next Modules
import Link from "next/link";

// React-Icons
import { AiOutlineLogin } from 'react-icons/Ai';
import { AiFillUnlock } from 'react-icons/Ai';

// CSS
import style from "@/public/css/side-navigation.module.css";

function SideNavigation() {
    return (
        <aside className={`${style.aside_navigation}`}>
            <h2>Navigation</h2>
            <ul>

                <li><Link href="/auth/signin"><AiOutlineLogin /> Login</Link></li>
                <li><Link href="/signup"><AiFillUnlock /> Forgot Password</Link></li>
            </ul>
        </aside>
    );
}

export default SideNavigation;
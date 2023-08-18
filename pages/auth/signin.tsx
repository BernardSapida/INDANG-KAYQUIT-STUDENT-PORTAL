// Next Modules
import Link from "next/link";

// React-Icons
import { FaGraduationCap } from 'react-icons/Fa';

// Components
import PortalGuide from "@/components/signin/PortalGuide";
import Login from "@/components/signin/Login";

// CSS
import style from "@/public/css/signin.module.css";

function Signin() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Student Portal</h1>
            </div>
            <div className={`${style.container}`}>
                <Login />
                <PortalGuide />
            </div>
        </div>
    );
}

export default Signin;
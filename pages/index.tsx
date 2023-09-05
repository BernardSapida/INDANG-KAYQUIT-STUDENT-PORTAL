import { FaGraduationCap } from 'react-icons/fa';

import PortalGuide from "@/components/signin/PortalGuide";
import Login from "@/components/signin/Login";

import headerStyle from "@/public/css/section-header.module.css";
import style from "@/public/css/signin.module.css";

function Signin() {
    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><FaGraduationCap /> Student Portal</h1>
            </div>
            <div className={`${style.content_container}`}>
                <Login />
                <PortalGuide />
            </div>
        </section>
    );
}

export default Signin;
// Next Modules
import Link from "next/link";

// React-Icons
import { FaGraduationCap } from 'react-icons/Fa';
import { AiOutlineLogin, AiOutlineInfoCircle } from 'react-icons/Ai';

// Components
import SigninForm from "@/components/signin/Form";

// CSS
import style from "@/public/css/signin.module.css";

function Signin() {
    return (
        <>
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Student Portal</h1>
            </div>
            <div className={`${style.container}`}>
                <div>
                    <p><AiOutlineLogin /> Login your account</p>
                    <SigninForm />
                </div>
                <div>
                    <p><AiOutlineInfoCircle /> Portal Guide</p>
                </div>
            </div>
        </>
    );
}

export default Signin;
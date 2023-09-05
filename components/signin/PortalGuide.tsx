import Link from "next/link";

import { AiOutlineInfoCircle } from 'react-icons/ai';

import style from "@/public/css/portal-guide.module.css";

function PortalGuide() {
    return (
        <div className={`${style.guide_container}`}>
            <div className={`${style.title}`}>
                <p><AiOutlineInfoCircle /> Portal Guide</p>
            </div>
            <div className={`${style.topic}`}>
                <p className={`${style.title}`}>Logging In</p>
                <div className={`${style.descriptions}`}>
                    <p>• Make sure to enter working email address.</p>
                    <p>• Enter the information in the required format.<br />Ex: john.doe@kayquit.edu.ph</p>
                    <p>• The student account will be provided by their class adviser.</p>
                </div>
            </div>
            <div className={`${style.topic}`}>
                <p className={`${style.title}`}>Trouble logging into your account?</p>
                <div className={`${style.descriptions}`}>
                    <p>• Account must be activated</p>
                    <p>• Make sure to enter valid email and password</p>
                    <p>• Account information must match our record</p>
                    <p>• Forgot your password? Click here to recover</p>
                </div>
            </div>
            <div className={`${style.topic}`}>
                <p className={`${style.title}`}>Logging In</p>
                <div className={`${style.descriptions}`}>
                    <p>• Please fill up this <Link href="#">form</Link></p>
                </div>
            </div>
        </div>
    );
}

export default PortalGuide;
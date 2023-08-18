// Next Modules
import Link from "next/link";

// React-Icons
import { FaGraduationCap } from 'react-icons/fa';

// Components


// CSS
import style from "@/public/css/teacher-profile.module.css";
import PersonalDetails from "@/components/student/profile/PersonalDetails";
import SectionHandle from "@/components/teacher/profile/SectionHandle";
import ContactDetails from "@/components/teacher/profile/ContactDetails";
import KayquitGoogleAccount from "@/components/teacher/profile/KayquitGoogleAccount";

function Profile() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Teacher Profile</h1>
            </div>
            <div className={`${style.container}`}>
                <PersonalDetails />
                <SectionHandle />
                <ContactDetails />
                <KayquitGoogleAccount />
            </div>
        </div>
    );
}

export default Profile;
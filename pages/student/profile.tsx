// Next Modules
import Link from "next/link";

// React-Icons
import { FaGraduationCap } from 'react-icons/fa';

// Components


// CSS
import style from "@/public/css/student-profile.module.css";
import PersonalDetails from "@/components/students/profile/PersonalDetails";
import EnrollmentDetails from "@/components/students/profile/EnrollmentDetails";
import ContactDetails from "@/components/students/profile/ContactDetails";
import KayquitGoogleAccount from "@/components/students/profile/KayquitGoogleAccount";

function Profile() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Student Profile</h1>
            </div>
            <div className={`${style.container}`}>
                <PersonalDetails />
                <EnrollmentDetails />
                <ContactDetails />
                <KayquitGoogleAccount />
            </div>
        </div>
    );
}

export default Profile;
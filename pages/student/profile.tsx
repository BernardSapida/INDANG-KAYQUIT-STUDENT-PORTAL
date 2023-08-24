// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React-Icons
import { FaGraduationCap } from 'react-icons/fa';

// Components
import PersonalDetails from "@/components/student/profile/PersonalDetails";
import EnrollmentDetails from "@/components/student/profile/EnrollmentDetails";
import ContactDetails from "@/components/student/profile/ContactDetails";
import KayquitAccount from "@/components/student/profile/KayquitAccount";

import { fetchStudentProfile } from "@/helpers/student/Profile";

import { Student } from "@/types/global";

// CSS
import style from "@/public/css/student-profile.module.css";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "student") {
            return { notFound: true }
        }

        const student = await fetchStudentProfile(session.user.email);

        return {
            props: { student: student },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Profile({ student }: { student: Student }) {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Student Profile</h1>
            </div>
            <div className={`${style.container}`}>
                <PersonalDetails personalDetails={student.personalDetails} />
                <EnrollmentDetails enrollmentDetails={student.enrollmentDetails} />
                <ContactDetails contactDetails={student.contactDetails} />
                <KayquitAccount kayquitAccount={student.kayquitAccount} />
            </div>
        </div>
    );
}

export default Profile;
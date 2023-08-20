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
import KayquitGoogleAccount from "@/components/student/profile/KayquitGoogleAccount";

// CSS
import style from "@/public/css/student-profile.module.css";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session) {
            return { notFound: true }
        }

        return {
            props: {
                user: session.user,
            },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

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
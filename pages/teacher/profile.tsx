// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React-Icons
import { FaGraduationCap } from 'react-icons/fa';

// Components
import PersonalDetails from "@/components/student/profile/PersonalDetails";
import SectionHandle from "@/components/teacher/profile/SectionHandle";
import ContactDetails from "@/components/teacher/profile/ContactDetails";
import KayquitGoogleAccount from "@/components/teacher/profile/KayquitGoogleAccount";

// CSS
import style from "@/public/css/teacher-profile.module.css";

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
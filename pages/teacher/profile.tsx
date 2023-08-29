// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React-Icons
import { FaGraduationCap } from 'react-icons/fa';

// Components
import PersonalDetails from "@/components/profile/teacher/PersonalDetails";
import SectionHandle from "@/components/profile/teacher/SectionHandle";
import ContactDetails from "@/components/profile/teacher/ContactDetails";
import KayquitAccount from "@/components/profile/teacher/KayquitAccount";

import { fetchTeacherProfile } from "@/helpers/teacher/Profile";

// CSS
import style from "@/public/css/teacher-profile.module.css";
import { Teacher } from "@/types/global";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "teacher") {
            return { notFound: true }
        }

        const studentProfileResponse = await fetchTeacherProfile(session.user.email);

        return {
            props: { teacher: studentProfileResponse.data },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Profile({ teacher }: { teacher: Teacher }) {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Teacher Profile</h1>
            </div>
            <div className={`${style.container}`}>
                <PersonalDetails personalDetails={teacher.personalDetails} />
                <SectionHandle sectionHandle={teacher.sectionHandle} />
                <ContactDetails contactDetails={teacher.contactDetails} />
                <KayquitAccount kayquitAccount={teacher.kayquitAccount} />
            </div>
        </div>
    );
}

export default Profile;
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { FaGraduationCap } from 'react-icons/fa';

import PersonalDetails from "@/components/profile/PersonalDetails";
import SectionHandle from "@/components/profile/SectionHandle";
import ContactDetails from "@/components/profile/ContactDetails";
import KayquitAccount from "@/components/profile/KayquitAccount";

import { fetchTeacherProfile } from "@/helpers/teacher/Profile";

import { Teacher } from "@/types/global";

import headerStyle from "@/public/css/section-header.module.css";

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
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><FaGraduationCap /> Teacher Profile</h1>
            </div>
            <PersonalDetails personalDetails={teacher.personalDetails} />
            <SectionHandle sectionHandle={teacher.sectionHandle} />
            <ContactDetails contactDetails={teacher.contactDetails} />
            <KayquitAccount kayquitAccount={teacher.kayquitAccount} />
        </section>
    );
}

export default Profile;
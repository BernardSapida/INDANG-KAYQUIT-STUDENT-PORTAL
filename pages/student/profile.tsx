import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { FaGraduationCap } from 'react-icons/fa';

import PersonalDetails from "@/components/profile/PersonalDetails";
import EnrollmentDetails from "@/components/profile/EnrollmentDetails";
import ContactDetails from "@/components/profile/ContactDetails";
import KayquitAccount from "@/components/profile/KayquitAccount";

import { fetchStudentProfile } from "@/helpers/student/Profile";

import { Student } from "@/types/global";

import headerStyle from "@/public/css/section-header.module.css";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "student") {
            return { notFound: true }
        }

        const studentProfileResponse = await fetchStudentProfile(session.user.email);

        return {
            props: { student: studentProfileResponse.data },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Profile({ student }: { student: Student }) {
    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><FaGraduationCap /> Student Profile</h1>
            </div>
            <PersonalDetails personalDetails={student.personalDetails} />
            <EnrollmentDetails enrollmentDetails={student.enrollmentDetails} />
            <ContactDetails contactDetails={student.contactDetails} />
            <KayquitAccount kayquitAccount={student.kayquitAccount} />
        </section>
    );
}

export default Profile;
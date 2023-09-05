import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { IoMdNotifications } from 'react-icons/io';

import { getAcademicYear } from "@/utils/date/date";

import Announcement from "@/components/announcements/Announcement";

import { fetchAnnouncements } from "@/helpers/student/Announcements";
import { fetchStudentProfile } from "@/helpers/student/Profile";

import { Announcements, ClassAnnouncement, ProfileResponse, Student } from "@/types/global";

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

        const studentProfileResponse: ProfileResponse = await fetchStudentProfile(session.user.email);
        const { enrollmentDetails: { currentGradeLevel, currentSection, academicYear } }: Student = studentProfileResponse.data!;
        const announcementsResponse = await fetchAnnouncements(currentGradeLevel, currentSection, academicYear);

        return {
            props: { announcement: announcementsResponse.data }
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Announcements({ announcement }: { announcement: ClassAnnouncement }) {
    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><IoMdNotifications /> Class Announcement(s) {getAcademicYear()}</h1>
            </div>
            {
                announcement.announcements?.map((announcements: Announcements, key: number) => (
                    <Announcement key={key} title={announcements.title} description={announcements.description} createdAt={announcements.createdAt!} />
                ))
            }
        </section>
    );
}

export default Announcements;
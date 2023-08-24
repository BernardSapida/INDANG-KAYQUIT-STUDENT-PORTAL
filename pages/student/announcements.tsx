import axios from "axios";

import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { IoMdNotifications } from 'react-icons/io';

import Event from "@/components/student/announcements/Event";

import { getAcademicYear } from "@/utils/date/date";

import Announcement from "@/components/teacher/announcements/Announcement";

import style from "@/public/css/student-announcements.module.css";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "student") {
            return { notFound: true }
        }

        const announcementList = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/v1/teacher/get/announcements`,
            {
                gradeLevel: "6",
                section: "Narra",
                academicYear: "2023-2024",
            }
        );

        return {
            props: {
                user: session.user,
                announcementList: announcementList.data
            },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Announcements({ user, announcementList }: { user: any, announcementList: Record<string, any> }) {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><IoMdNotifications /> Class Announcement(s) {getAcademicYear()}</h1>
            </div>
            <div className={`${style.container}`}>
                {
                    announcementList.announcements?.map((a: Record<string, any>, key: number) => (
                        <Announcement key={key} title={a.title} description={a.description} createdAt={a.createdAt} />
                    ))
                }
            </div>
        </div>
    );
}

export default Announcements;
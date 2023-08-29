import axios from "axios";

// Next
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

// Next-Auth
import { getSession } from "next-auth/react";

// React
import { useEffect, useState } from "react";

// React Bootstrap
import Button from "react-bootstrap/Button";

// React-Icons
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';

// React-Ripples
import Ripples from 'react-ripples'

import Announcement from "@/components/announcements/Announcement";
const ModalForm = dynamic(() => import("@/components/announcements/ModalForm"), {
    ssr: false,
});

// Utilities
import { getAcademicYear } from "@/utils/date/date";

// CSS
import style from "@/public/css/teacher-announcements.module.css";
import { fetchTeacherProfile } from "@/helpers/teacher/Profile";
import { Announcements, ClassAnnouncement, Teacher, User } from "@/types/global";
import { fetchAnnouncements } from "@/helpers/teacher/Announcements";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "teacher") {
            return { notFound: true }
        }

        const teacherProfileResponse = await fetchTeacherProfile(session.user.email);
        const { sectionHandle: { currentGradeLevel, currentSection, academicYear } }: Teacher = teacherProfileResponse.data!;
        const announcementsResponse = await fetchAnnouncements(currentGradeLevel, currentSection, academicYear);

        return {
            props: {
                teacher: {
                    ...session.user,
                    ...teacherProfileResponse.data?.sectionHandle
                },
                announcement: announcementsResponse.data
            },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Announcements(
    { teacher, announcement }:
        {
            teacher: {
                email: string,
                role: string,
                currentGradeLevel: string,
                currentSection: string,
                academicYear: string
            },
            announcement: ClassAnnouncement
        }
) {
    const [modalShow, setModalShow] = useState(false);
    const [cards, setCards] = useState<JSX.Element[]>([]);

    console.log(teacher)

    useEffect(() => {
        const res = announcement.announcements?.map((announcements: Announcements, key: number) => (
            <Announcement key={key} title={announcements.title} description={announcements.description} createdAt={announcements.createdAt} />
        ));
        setCards(res!);
    }, []);

    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><IoMdNotifications /> Announcement(s) {getAcademicYear()}</h1>
            </div>
            <div className={`${style.container}`}>
                <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                    <Button type="button" className={`d-block ms-auto mb-4 ${style.btn_post}`} onClick={() => setModalShow(true)}>
                        <AiOutlinePlus /> New Announcement
                    </Button>
                </Ripples>
                {cards}
            </div>
            <ModalForm modalShow={modalShow} setModalShow={setModalShow} setCards={setCards} teacher={teacher} />
        </div>
    );
}

export default Announcements;
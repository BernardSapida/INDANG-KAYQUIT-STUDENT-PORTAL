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

import Announcement from "@/components/teacher/announcements/Announcement";
const ModalForm = dynamic(() => import("@/components/teacher/announcements/ModalForm"), {
    ssr: false,
});

// Utilities
import { getAcademicYear } from "@/utils/date/date";

// CSS
import style from "@/public/css/teacher-announcements.module.css";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "teacher") {
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
    const [modalShow, setModalShow] = useState(false);
    const [cards, setCards] = useState<any[]>([]);

    useEffect(() => {
        let res = announcementList.announcements.map((a: Record<string, any>, key: number) => (
            <Announcement title={a.title} description={a.description} createdAt={a.createdAt} />
        ));
        setCards(res);
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
            <ModalForm modalShow={modalShow} setModalShow={setModalShow} setCards={setCards} teacher={user} />
        </div>
    );
}

export default Announcements;
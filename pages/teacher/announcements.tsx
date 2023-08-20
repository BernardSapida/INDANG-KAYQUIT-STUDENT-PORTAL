// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React Modules
import { useState } from "react";

// React Bootstrap Components
import Button from "react-bootstrap/Button";

// React-Icons
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';

// Components
import Event from "@/components/teacher/announcements/Event";
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

function Announcements() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><IoMdNotifications /> Announcement(s) {getAcademicYear()}</h1>
            </div>
            <div className={`${style.container}`}>
                <Button type="button" className={`d-block ms-auto mb-3 ${style.btn_post}`} onClick={() => setModalShow(true)}>
                    <AiOutlinePlus /> New Announcement
                </Button>
                <Event />
                <Event />
                <Event />
            </div>
            <ModalForm modalShow={modalShow} setModalShow={setModalShow} />
        </div>
    );
}

export default Announcements;
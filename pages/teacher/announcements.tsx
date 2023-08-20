// Next
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

// Next-Auth
import { getSession } from "next-auth/react";

// React
import { useState } from "react";

// React Bootstrap
import Button from "react-bootstrap/Button";

// React-Icons
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';

// React-Ripples
import Ripples from 'react-ripples'

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

function Announcements({ user }: { user: any }) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><IoMdNotifications /> Announcement(s) {getAcademicYear()}</h1>
            </div>
            <div className={`${style.container}`}>
                <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                    <Button type="button" className={`d-block ms-auto mb-3 ${style.btn_post}`} onClick={() => setModalShow(true)}>
                        <AiOutlinePlus /> New Announcement
                    </Button>
                </Ripples>
                <Event />
                <Event />
                <Event />
            </div>
            <ModalForm modalShow={modalShow} setModalShow={setModalShow} teacher={user} />
        </div>
    );
}

export default Announcements;
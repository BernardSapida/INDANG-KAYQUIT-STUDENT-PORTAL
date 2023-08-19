// Next Modules
import dynamic from "next/dynamic";

// React Modules
import { useState } from "react";

// React Bootstrap Components
import Button from "react-bootstrap/Button";

// React-Icons
import { BsFillSendFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';

// Components
import Event from "@/components/teacher/announcements/Event";
const ModalForm = dynamic(() => import("@/components/teacher/announcements/ModalForm"), {
    ssr: false,
});

// Utilities
import { getAcademicYear } from "@/utils/date/date";

// CSS
import style from "@/public/css/teacher-announcements.module.css";

function Announcements() {
    const [modalShow, setModalShow] = useState(true);

    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Class Announcement(s) {getAcademicYear()}</h1>
                <Button type="button" className={`d-block ms-auto ${style.btn_post}`} onClick={() => setModalShow(true)}>
                    <BsFillSendFill /> New Announcement
                </Button>
            </div>
            <div className={`${style.container}`}>
                {/* Components / Contents Goes here */}
                <Event />
                <Event />
                <Event />
            </div>
            <ModalForm modalShow={modalShow} setModalShow={setModalShow} />
        </div>
    );
}

export default Announcements;
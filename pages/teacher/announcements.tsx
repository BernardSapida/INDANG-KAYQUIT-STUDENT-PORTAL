// React Bootstrap Components
import Button from "react-bootstrap/Button";

// React-Icons
import { BsFillSendFill } from 'react-icons/bs';

// React-Icons
import { FaGraduationCap } from 'react-icons/fa';

// Components
import Event from "@/components/teacher/announcements/Event";

// Utilities
import { getAcademicYear } from "@/utils/date/date";

// CSS
import style from "@/public/css/teacher-announcements.module.css";

function Announcements() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Class Announcement(s) {getAcademicYear()}</h1>
                <Button type="button" className={`d-block ms-auto ${style.btn_add}`}>
                    <BsFillSendFill /> Post Announcement
                </Button>
            </div>
            <div className={`${style.container}`}>
                {/* Components / Contents Goes here */}
                <Event />
                <Event />
                <Event />
            </div>
        </div>
    );
}

export default Announcements;
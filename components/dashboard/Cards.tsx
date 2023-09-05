import { TbNumbers } from 'react-icons/tb';
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillCalendarDateFill } from 'react-icons/bs';

import { getAcademicYear, getCurrentQuarter } from "@/utils/date/date";

import style from "@/public/css/dashboard-cards.module.css";

import { User } from '@/types/global';

function Cards({ user }: { user: User }) {
    return (
        <div className={`${style.dashboard_container} mb-3`}>
            <article className={`${style.dashboard_card}`}>
                <div className={`${style.card_info}`}>
                    <p className={`${style.card_value}`}>{getAcademicYear()}</p>
                    <p className={`${style.card_label}`}>Current Academic Year</p>
                </div>
                <BsFillCalendarDateFill />
            </article>
            <article className={`${style.dashboard_card}`}>
                <div className={`${style.card_info}`}>
                    <p className={`${style.card_value}`}>{getCurrentQuarter()}</p>
                    <p className={`${style.card_label}`}>Current Quarter</p>
                </div>
                <TbNumbers />
            </article>
            <article className={`${style.dashboard_card}`}>
                <div className={`${style.card_info}`}>
                    <p className={`${style.card_value}`}>{user.gradeLevel} - {user.section}</p>
                    <p className={`${style.card_label}`}>Grade Level & Section</p>
                </div>
                <FaGraduationCap />
            </article>
        </div>
    );
}

export default Cards;
// React-Icons
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { TbNumbers } from 'react-icons/tb';
import { FaGraduationCap } from 'react-icons/fa';

// Utilities
import { getAcademicYear } from "@/utils/date/date";

// CSS
import style from "@/public/css/cards.module.css";

function Cards() {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.card}`}>
                <div className={`${style.card_info}`}>
                    <p className={`${style.value}`}>{getAcademicYear()}</p>
                    <p className={`${style.label}`}>Current Academic Year</p>
                </div>
                <BsFillCalendarDateFill />
            </div>
            <div className={`${style.card}`}>
                <div className={`${style.card_info}`}>
                    <p className={`${style.value}`}>First</p>
                    <p className={`${style.label}`}>Current Quarter</p>
                </div>
                <TbNumbers />
            </div>
            <div className={`${style.card}`}>
                <div className={`${style.card_info}`}>
                    <p className={`${style.value}`}>6 - Peace</p>
                    <p className={`${style.label}`}>Grade Level & Section</p>
                </div>
                <FaGraduationCap />
            </div>
        </div >
    );
}

export default Cards;
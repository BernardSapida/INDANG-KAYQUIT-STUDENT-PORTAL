// Next Modules
import Link from "next/link";

// React-Icons
import { TbSpeakerphone } from 'react-icons/tb';

// CSS
import style from "@/public/css/teacher-news.module.css";

function NewsUpdates() {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.title}`}>
                <h2><TbSpeakerphone /> News and Updates</h2>
            </div>
            <div className={`${style.topic}`}>
                <p className={`${style.title}`}>Class Announcemnent(s)</p>
                <div className={`${style.descriptions}`}>
                    <p>• Teachers have the capability to share class-related updates based on the designated class timetable. Take a moment to visit <Link href="#">this link</Link> and verify if any announcements have been posted for your specific class.</p>
                </div>
            </div>
            <div className={`${style.topic}`}>
                <p className={`${style.title}`}>Teacher Information</p>
                <div className={`${style.descriptions}`}>
                    <p>• Feel free to access <Link href="#">this link</Link> to explore the details included in the teacher profile information.</p>
                </div>
            </div>
            <div className={`${style.topic}`}>
                <p className={`${style.title}`}>Students</p>
                <div className={`${style.descriptions}`}>
                    <p>• Visit <Link href="#">this link</Link> to easily access the list of students who will be sharing your classroom in the upcoming section.</p>
                </div>
            </div>
        </div >
    );
}

export default NewsUpdates;
import Link from "next/link";

import { TbSpeakerphone } from 'react-icons/tb';

import style from "@/public/css/dashboard-news.module.css";

function NewsUpdates() {
    return (
        <div className={`${style.dashboard_container}`}>
            <div className={`${style.dashboard_title}`}>
                <h2><TbSpeakerphone /> News and Updates</h2>
            </div>
            <article className={`${style.dashboard_topic}`}>
                <p className={`${style.dashboard_title}`}>Class Announcement(s)</p>
                <div className={`${style.dashboard_descriptions}`}>
                    <p>• Teachers have the capability to share class-related updates based on the designated class timetable. Take a moment to visit <Link href="#">this link</Link> and verify if any announcements have been posted for your specific class.</p>
                </div>
            </article>
            <article className={`${style.dashboard_topic}`}>
                <p className={`${style.dashboard_title}`}>Teacher Information</p>
                <div className={`${style.dashboard_descriptions}`}>
                    <p>• Feel free to access <Link href="#">this link</Link> to explore the details included in the teacher profile information.</p>
                </div>
            </article>
            <article className={`${style.dashboard_topic}`}>
                <p className={`${style.dashboard_title}`}>Students</p>
                <div className={`${style.dashboard_descriptions}`}>
                    <p>• Visit <Link href="#">this link</Link> to easily access the list of students who will be sharing your classroom in the upcoming section.</p>
                </div>
            </article>
        </div>
    );
}

export default NewsUpdates;
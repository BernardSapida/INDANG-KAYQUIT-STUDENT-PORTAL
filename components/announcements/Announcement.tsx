import { formatDate } from "@/utils/date/date";

import style from "@/public/css/event.module.css";

function Announcement({
    title,
    description,
    createdAt
}: {
    title: string,
    description: string,
    createdAt: string
}) {
    const formattedDate = formatDate(createdAt);

    return (
        <article className={`mb-5 ${style.event_container}`}>
            <div className={`${style.event_time}`}>
                <p>{formattedDate.time}</p>
                <p>{`${formattedDate.date} ${formattedDate.year}`}</p>
            </div>
            <div className={`${style.event_content}`}>
                <p className={`${style.event_title}`}>{title}</p>
                <p className={`${style.event_description}`}>{description}</p>
            </div>
        </article>
    );
}

export default Announcement;
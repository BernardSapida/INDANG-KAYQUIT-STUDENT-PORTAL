// CSS
import style from "@/public/css/student-event.module.css";
import { formatDate } from "@/utils/date/date";

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
        <div className={`mb-5 ${style.container}`}>
            <div className={`${style.time}`}>
                <p>{formattedDate.time}</p>
                <p>{`${formattedDate.date} ${formattedDate.year}`}</p>
            </div>
            <div className={`${style.event_content}`}>
                <p className={`${style.title}`}>{title}</p>
                <p className={`${style.description}`}>{description}</p>
            </div>
        </div>
    );
}

export default Announcement;
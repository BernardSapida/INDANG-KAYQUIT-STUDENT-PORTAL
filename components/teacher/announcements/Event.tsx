// CSS
import style from "@/public/css/student-event.module.css";

function Event() {
    return (
        <div className={`mb-4 ${style.container}`}>
            <div className={`${style.time}`}>
                <p>12:00 AM</p>
                <p>Aug 16</p>
                <p>2023</p>
            </div>
            <div className={`${style.event_content}`}>
                <p className={`${style.title}`}>Announcement Title</p>
                <p className={`${style.description}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae non corrupti! Quidem, dolore aliquid, quo natus cum asperiores accusamus dicta maiores dignissimos quis itaque possimus sint veniam voluptatem. Odit quisquam earum, corrupti adipisci unde, facere nobis aperiam voluptas optio qui voluptate corporis mollitia commodi asperiores aliquam. Quos vitae ipsa placeat ipsam enim aut dolore ipsum minus quae unde suscipit quibusdam sapiente, repudiandae dolorum ut molestiae nemo tempore ad! Itaque nostrum aliquam dicta rerum nam reprehenderit temporibus consequatur alias ex error nemo totam veniam, cupiditate quos ullam, quia expedita quas quaerat esse odit vitae! Nulla aliquam libero laborum aperiam animi?</p>
            </div>
        </div>
    );
}

export default Event;
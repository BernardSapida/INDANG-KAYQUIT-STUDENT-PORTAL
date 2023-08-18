// Next Modules
import Link from "next/link";

// React-Icons
import { TbSpeakerphone } from 'react-icons/tb';

// Components
import Cards from "@/components/teacher/dashboard/Cards";
import News from "@/components/teacher/dashboard/news";

// CSS
import style from "@/public/css/teacher-dashboard.module.css";

// Utilities
import { getGreeting } from "@/utils/greetings";

function Dashboard() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>{getGreeting()}</div>
            <div className={`${style.container} mb-3`}>
                {/* Components / Contents Goes here */}
                <Cards />
            </div>
            <News />
        </div>
    );
}

export default Dashboard;
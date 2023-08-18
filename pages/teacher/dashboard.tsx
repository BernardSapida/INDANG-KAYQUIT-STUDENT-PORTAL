// Next Modules
import Link from "next/link";

// React-Icons


// Components


// CSS
import style from "@/public/css/signin.module.css";

// Utilities
import { getGreeting } from "@/utils/greetings";
import Card from "@/components/students/dashboard/Cards";

function Dashboard() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>{getGreeting()}</div>
            <div className={`${style.container}`}>
                {/* Components / Contents Goes here */}
            </div>
        </div>
    );
}

export default Dashboard;
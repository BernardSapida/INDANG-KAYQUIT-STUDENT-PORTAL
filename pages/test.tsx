// Next Modules
import Link from "next/link";

// React-Icons
import { FaGraduationCap } from 'react-icons/fa';

// Components


// CSS
import style from "@/public/css/signin.module.css";

function Dashboard() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Dashboard</h1>
            </div>
            <div className={`${style.content_container}`}>
                {/* Components / Contents Goes here */}
            </div>
        </div>
    );
}

export default Dashboard;
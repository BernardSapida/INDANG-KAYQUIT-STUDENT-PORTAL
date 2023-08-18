// React-Icons
import { HiOutlineDocumentReport } from 'react-icons/hi';

// CSS
import style from "@/public/css/teacher-password.module.css";

// Components
import ReportForm from "@/components/teacher/reports/ReportForm";

function Password() {


    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><HiOutlineDocumentReport /> Reports</h1>
            </div>
            <div className={`${style.container}`}>
                <p className="fw-bold">Generate Excel Report</p>
                <ReportForm />
            </div>
        </div>
    );
}

export default Password;
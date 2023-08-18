// React-Icons
import { MdPassword } from 'react-icons/md';

// CSS
import style from "@/public/css/student-password.module.css";

// Components
import ChangePassword from "@/components/student/password/ChangePassword";

function Password() {


    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><MdPassword /> Change Password</h1>
            </div>
            <div className={`${style.container}`}>
                <p className="fw-bold">Password</p>
                <ChangePassword />
            </div>
        </div>
    );
}

export default Password;
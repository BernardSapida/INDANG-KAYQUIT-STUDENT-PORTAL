// React-Icons
import { AiOutlineLogin } from 'react-icons/Ai';

// Components
import Form from "@/components/signin/Form";

// CSS
import style from "@/public/css/login.module.css";

function Login() {
    return (
        <div className={`${style.login_container}`} >
            <div className={`${style.title}`}>
                <p><AiOutlineLogin /> Login your account</p>
            </div>
            <Form />
        </div >
    );
}

export default Login;
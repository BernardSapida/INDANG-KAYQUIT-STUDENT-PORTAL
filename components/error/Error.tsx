// React-Icons module
import { BiSolidError } from "react-icons/bi";

function Error({ errMessage, showError }: { errMessage: string, showError: boolean }) {
    return (
        <div className={`px-3 py-2 bg-danger text-light rounded mb-3 ${showError ? 'd-block' : 'd-none'}`}>
            <p className="m-0"><BiSolidError className="mb-1" /> {errMessage}</p>
        </div>
    );
}

export default Error;
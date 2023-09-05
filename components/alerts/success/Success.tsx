import { AiFillCheckCircle } from "react-icons/ai";

function Success({ successMessage, showSuccess }: { successMessage: string, showSuccess: boolean }) {
    return (
        <div className={`px-3 py-2 bg-success text-light rounded mb-3 ${showSuccess ? 'd-block' : 'd-none'}`}>
            <p className="m-0"><AiFillCheckCircle className="mb-1" /> {successMessage}</p>
        </div>
    );
}

export default Success;
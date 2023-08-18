// Next Modules
import Image from "next/image";
import { useRouter } from 'next/router';

// React-Icons
import { BiArrowBack } from 'react-icons/bi';

// React Bootstrap Components
import Button from "react-bootstrap/Button";

// CSS
import style from "@/public/css/not-found.module.css";

function NotFound() {
    const router = useRouter();

    return (
        <div className={`${style.container}`}>
            <div className={`${style.content}`}>
                <Image src="/images/kayquit-logo-gray.png" alt="Logo" width={220} height={220} priority={true} />
                <h1 className={`${style.title}`}>Oops! That page can't be found.</h1 >
                <p>You may have mistyped the address or the page may have moved.</p>
                <Button type="button" className={`${style.btn_back}`} onClick={() => router.back()}>
                    <BiArrowBack /> Go back
                </Button>
            </div>
        </div>
    );
}

export default NotFound;
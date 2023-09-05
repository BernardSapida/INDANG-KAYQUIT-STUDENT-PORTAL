import Image from "next/image";
import { useRouter } from 'next/router';

import { BiArrowBack } from 'react-icons/bi';

import Button from "react-bootstrap/Button";

import style from "@/public/css/not-found.module.css";

function NotFound() {
    const router = useRouter();

    return (
        <section className={`${style.section_container}`}>
            <div className={`${style.content}`}>
                <Image src="/images/kayquit-logo-gray.png" alt="Logo" width={220} height={220} priority={true} />
                <h1 className={`${style.title}`}>Oops! That page can't be found.</h1 >
                <p>You may have mistyped the address or the page may have moved.</p>
                <Button type="button" className={`${style.btn_back}`} onClick={() => router.back()}>
                    <BiArrowBack /> Go back
                </Button>
            </div>
        </section>
    );
}

export default NotFound;
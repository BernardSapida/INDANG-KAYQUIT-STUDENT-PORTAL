// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React-Icons
import { MdPassword } from 'react-icons/md';

// CSS
import style from "@/public/css/student-password.module.css";

// Components
import ChangePassword from "@/components/student/password/ChangePassword";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session) {
            return { notFound: true }
        }

        return {
            props: {
                user: session.user,
            },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

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
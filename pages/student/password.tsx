import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { MdPassword } from 'react-icons/md';

import style from "@/public/css/teacher-password.module.css";

import ChangePassword from "@/components/student/password/ChangePassword";

import { User } from "@/types/global";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "student") {
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

function Password({ user }: { user: User }) {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><MdPassword /> Change Password</h1>
            </div>
            <div className={`${style.container}`}>
                <p className="fw-bold">Password</p>
                <ChangePassword user={user} />
            </div>
        </div>
    );
}

export default Password;
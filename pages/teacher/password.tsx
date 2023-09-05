import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { MdPassword } from 'react-icons/md';

import ChangePassword from "@/components/password/ChangePassword";

import { User } from "@/types/global";

import headerStyle from "@/public/css/section-header.module.css";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "teacher") {
            return { notFound: true }
        }

        return {
            props: { user: session.user },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Password({ user }: { user: User }) {
    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><MdPassword /> Change Password</h1>
            </div>
            <p className="fw-bold">Password</p>
            <ChangePassword user={user} />
        </section >
    );
}

export default Password;
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import Cards from "@/components/dashboard/Cards";
import NewsUpdates from "@/components/dashboard/student/NewsUpdates";

import { getGreeting } from "@/utils/greetings";

import headerStyle from "@/public/css/section-header.module.css";

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

function Dashboard() {
    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>{getGreeting()}</div>
            <Cards />
            <NewsUpdates />
        </section>
    );
}

export default Dashboard;
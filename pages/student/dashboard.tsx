import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import Cards from "@/components/dashboard/Cards";

import style from "@/public/css/student-dashboard.module.css";

import NewsUpdates from "@/components/dashboard/student/NewsUpdates";

import { getGreeting } from "@/utils/greetings";

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
        <div className="mb-5">
            <div className={`${style.title}`}>{getGreeting()}</div>
            <div className={`${style.container} mb-3`}>
                {/* Components / Contents Goes here */}
                <Cards />
            </div>
            <NewsUpdates />
        </div>
    );
}

export default Dashboard;
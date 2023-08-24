// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// Components
import Cards from "@/components/teacher/dashboard/Cards";
import NewsAndUpdates from "@/components/student/dashboard/NewsAndUpdates";


// CSS
import style from "@/public/css/teacher-dashboard.module.css";

// Utilities
import { getGreeting } from "@/utils/greetings";

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
            <NewsAndUpdates />
        </div>
    );
}

export default Dashboard;
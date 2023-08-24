// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React-Icons
import { HiOutlineDocumentReport } from 'react-icons/hi';

// CSS
import style from "@/public/css/teacher-password.module.css";

// Components
import ReportForm from "@/components/teacher/reports/ReportForm";

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

function Reports({ user }: { user: Record<string, any> }) {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><HiOutlineDocumentReport /> Reports</h1>
            </div>
            <div className={`${style.container}`}>
                <p className="fw-bold">Generate Excel Report</p>
                <ReportForm />
            </div>
        </div>
    );
}

export default Reports;
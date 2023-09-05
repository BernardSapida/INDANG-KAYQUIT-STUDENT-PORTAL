import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { HiOutlineDocumentReport } from 'react-icons/hi';

import ReportForm from "@/components/reports/ReportForm";

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

function Reports() {
    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><HiOutlineDocumentReport /> Reports</h1>
            </div>
            <p className="fw-bold">Generate Excel Report</p>
            <ReportForm />
        </section>
    );
}

export default Reports;
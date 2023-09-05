import axios from "axios";

import { GetServerSideProps, GetServerSidePropsContext } from "next";

import dynamic from "next/dynamic";

import { getSession } from "next-auth/react";

import { useEffect, useState } from "react";

import { AiOutlineUnorderedList } from 'react-icons/ai';

const TableList = dynamic(() => import("@/components/mystudents/TableList"), {
    ssr: false,
});

import headerStyle from "@/public/css/section-header.module.css";
import studentsStyle from "@/public/css/students.module.css";
import { fetchTeacherProfile } from "@/helpers/teacher/Profile";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "teacher") {
            return { notFound: true }
        }

        const teacherProfileResponse = await fetchTeacherProfile(session.user.email);
        const { currentGradeLevel, currentSection, academicYear } = teacherProfileResponse.data?.sectionHandle!;

        const sectionStudents = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/v1/teacher/get/section-students`,
            {
                gradeLevel: currentGradeLevel,
                section: currentSection,
                academicYear: academicYear
            }
        );

        return {
            props: { studentList: sectionStudents.data.data }
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Students({ studentList }: { studentList: any }) {
    const [students, setStudents] = useState<Record<string, any>[]>([]);

    useEffect(() => setStudents(studentList), [studentList]);

    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><AiOutlineUnorderedList /> My Students</h1>
            </div>
            <div className={`${studentsStyle.table_container}`}>
                <TableList studentList={students} />
            </div>
        </section>
    );
}

export default Students;
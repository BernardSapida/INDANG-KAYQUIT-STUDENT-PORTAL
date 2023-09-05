import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import AccordionDropdown from "@/components/subjects/student/Accordion";

import { MdSubject } from 'react-icons/md';

import { fetchStudentSubjects } from "@/helpers/student/Subjects";

import { StudentClasses, StudentSection } from "@/types/global";

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

        const SubjectResponse = await fetchStudentSubjects(session.user.email);

        return {
            props: { student: SubjectResponse.data },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Subjects({ student }: { student: StudentClasses }) {
    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><MdSubject /> Enrolled Subjects</h1>
            </div>
            {
                student.classes.map((item: StudentSection, key: number) => (
                    <AccordionDropdown
                        key={key}
                        section={item}
                        uniqueKey={key.toString()}
                    />
                ))
            }
        </section>
    );
}

export default Subjects;
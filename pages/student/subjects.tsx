import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { MdSubject } from 'react-icons/md';

import AccordionDropdown from "@/components/subjects/student/Accordion";

import style from "@/public/css/student-subjects.module.css";
import { Section, StudentClasses } from "@/types/global";
import { fetchStudentSubjects } from "@/helpers/student/Subjects";

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
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><MdSubject /> Enrolled Subjects</h1>
            </div>
            <div className={`${style.container}`}>
                {
                    student.classes.map((item: Section, key: number) => (
                        <AccordionDropdown
                            key={key}
                            section={item}
                            uniqueKey={key.toString()}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Subjects;
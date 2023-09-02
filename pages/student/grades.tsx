import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { FaGraduationCap } from 'react-icons/fa';

import style from "@/public/css/student-grades.module.css";
import AccordionDropdown from "@/components/grades/student/Accordion";

import { fetchStudentGrade } from "@/helpers/student/Grades";
import { SectionDetails, Grade } from "@/types/global";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "student") {
            return { notFound: true }
        }

        const studentGradeResponse = await fetchStudentGrade(session.user.email);

        return {
            props: { classes: studentGradeResponse.data },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Grades({
    classes
}: {
    classes: {
        sectionDetails: SectionDetails;
        grades: Grade[];
    }[]
}) {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> Grades</h1>
            </div>
            <div className={`${style.container}`}>
                {
                    classes?.map((c, key) => (
                        <AccordionDropdown
                            key={key}
                            subjectDetails={c.sectionDetails}
                            grades={c.grades}
                            uniqueKey={key.toString()}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Grades;
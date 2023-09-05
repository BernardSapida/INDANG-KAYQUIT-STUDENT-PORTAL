import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { FaGraduationCap } from 'react-icons/fa';

import AccordionDropdown from "@/components/grades/student/Accordion";

import { fetchStudentGrade } from "@/helpers/student/Grades";

import { SectionDetails, Grade } from "@/types/global";

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
        <section className={`${headerStyle.header_section} mb-5`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><FaGraduationCap /> Grades</h1>
            </div>
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
        </section>
    );
}

export default Grades;
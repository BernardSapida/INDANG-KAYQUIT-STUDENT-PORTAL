import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import { FaGraduationCap } from 'react-icons/fa';

import style from "@/public/css/student-grades.module.css";
import AccordionDropdown from "@/components/classmates/Accordion";

import { fetchStudentClassmates } from "@/helpers/student/Classmates";
import { SectionDetails, Grade, Section } from "@/types/global";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "student") {
            return { notFound: true }
        }

        const studentGradeResponse = await fetchStudentClassmates(session.user.email);

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
    const classmates: SectionDetails[] = [
        {
            name: "Narra",
            gradeLevel: "Kinder",
            academicYear: "2017-2018",
            students: [
                {
                    fullname: "Brix Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "brix.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Brix Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "brix.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Brix Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "brix.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Brix Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "brix.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Brix Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "brix.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Brix Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "brix.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Brix Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "brix.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Brix Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "brix.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Brix Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "brix.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Brix Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "brix.sapida@kayquit.edu.ph"
                }
            ]
        },
        {
            name: "Narra",
            gradeLevel: "1",
            academicYear: "2018-2019",
            students: [
                {
                    fullname: "Britney Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "Britney.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Britney Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "Britney.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Britney Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "Britney.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Britney Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "Britney.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Britney Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "Britney.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Britney Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "Britney.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Britney Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "Britney.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Britney Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "Britney.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Britney Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "Britney.sapida@kayquit.edu.ph"
                },
                {
                    fullname: "Britney Sapida",
                    sex: "Male",
                    studentNumber: "201702230",
                    email: "Britney.sapida@kayquit.edu.ph"
                }
            ]
        },
    ]
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> My Classmates</h1>
            </div>
            <div className={`${style.container}`}>
                {
                    classmates?.map((c, key) => (
                        <AccordionDropdown
                            key={key}
                            sectionDetails={c}
                            students={c.students!}
                            uniqueKey={key.toString()}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Grades;
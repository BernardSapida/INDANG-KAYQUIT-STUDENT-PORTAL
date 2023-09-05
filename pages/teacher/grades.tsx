import axios from "axios";

import { GetServerSideProps, GetServerSidePropsContext } from "next";

import dynamic from "next/dynamic";

import { getSession } from "next-auth/react";

import { useState, useEffect } from "react";

import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { MdGrade } from 'react-icons/md';
import { AiOutlineSearch } from "react-icons/ai";

const TableList = dynamic(() => import("@/components/grades/teacher/TableList"), {
    ssr: false,
});
const ModalForm = dynamic(() => import("@/components/grades/teacher/ModalForm"), {
    ssr: false,
});

import { Student } from "@/types/global";

import headerStyle from "@/public/css/section-header.module.css";

import style from "@/public/css/teacher-grades.module.css";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "teacher") {
            return { notFound: true }
        }

        const studentList = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/v1/teacher/post/student-grades`,
            { searchTerm: "" }
        );

        return {
            props: { studentList: studentList.data.data },
        };
    } catch (error: any) {
        console.log(error);

        return {
            props: { error: "Error" },
        };
    }
};

function Grades({ studentList }: { studentList: Student[] }) {
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [student, setStudent] = useState<Student>(studentList[0]);
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => setStudents(studentList), [studentList]);

    const handleChange = async (e: any) => {
        const result = await axios.post(
            '/api/v1/teacher/post/student-grades',
            { searchTerm: e.target.value }
        );
        const filteredStudentList = result.data.data;

        setStudents(filteredStudentList);
    }

    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><MdGrade /> Student Grade</h1>
            </div>
            <div className={`${style.table_search}`}>
                <InputGroup className="ms-auto mb-3">
                    <InputGroup.Text><AiOutlineSearch /></InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="keyword"
                        onChange={handleChange}
                        placeholder="Search student"
                    />
                </InputGroup>
            </div>
            <TableList
                studentList={students}
                setModalShow={setModalShow}
                setStudent={setStudent}
            />
            <ModalForm
                student={student}
                setStudents={setStudents}
                modalShow={modalShow}
                setModalShow={setModalShow}
            />
        </section>
    );
}

export default Grades;
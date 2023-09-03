// Axios
import axios from "axios";

// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React Modules
import { useState, useEffect } from "react";

// React Bootstrap Components
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// React-Icons
import { MdGrade } from 'react-icons/md';
import { AiOutlineSearch } from "react-icons/ai";

// Components
const TableList = dynamic(() => import("@/components/grades/teacher/TableList"), {
    ssr: false,
});
const ModalForm = dynamic(() => import("@/components/grades/teacher/ModalForm"), {
    ssr: false,
});

// CSS
import style from "@/public/css/teacher-students.module.css";
import { Student } from "@/types/global";

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

        );

        return {
            props: {
                user: session.user,
                studentList: studentList.data
            },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Students({ studentList }: { studentList: Student[] }) {
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [student, setStudent] = useState<Student>(studentList[0]);
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => setStudents(studentList), [studentList]);

    const handleChange = async (e: any) => {
        const result = await axios.post(
            '/api/v1/teacher/post/student-grades',
            { searchTerm: e.target.value }
        );
        const filteredStudentList = result.data;
        setStudents(filteredStudentList);
    }

    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><MdGrade /> Student Grade</h1>
            </div>
            <div className={`${style.container}`}>
                <div className={`${style.table_header}`}>
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
            </div>
            <ModalForm
                student={student}
                setStudents={setStudents}
                modalShow={modalShow}
                setModalShow={setModalShow}
            />
        </div>
    );
}

export default Students;
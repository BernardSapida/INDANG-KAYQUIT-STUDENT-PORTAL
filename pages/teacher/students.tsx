import axios from "axios";

import { GetServerSideProps, GetServerSidePropsContext } from "next";

import dynamic from "next/dynamic";

import { getSession } from "next-auth/react";

import { useEffect, useState } from "react";

import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Ripples from 'react-ripples'

import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

const TableList = dynamic(() => import("@/components/students/TableList"), {
    ssr: false,
});
const AddModalForm = dynamic(() => import("@/components/students/AddModalForm"), {
    ssr: false,
});
const EditModalForm = dynamic(() => import("@/components/students/EditModalForm"), {
    ssr: false,
});

import { Student } from "@/types/global";

import headerStyle from "@/public/css/section-header.module.css";
import studentsStyle from "@/public/css/students.module.css";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "teacher") {
            return { notFound: true }
        }

        const studentList = await axios.get(
            `${process.env.NEXTAUTH_URL}/api/v1/teacher/post/student-list`
        );

        return {
            props: { studentList: studentList.data.data }
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Students({ studentList }: { studentList: any }) {
    const [addModalShow, setAddModalShow] = useState<boolean>(false);
    const [editModalShow, setEditModalShow] = useState<boolean>(false);
    const [student, setStudent] = useState<Student>(studentList[0]);
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => setStudents(studentList), [studentList]);

    const handleChange = async (e: any) => {
        const result = await axios.post(
            '/api/v1/teacher/post/student-list',
            { searchTerm: e.target.value }
        );
        const filteredStudentList = result.data.data;
        setStudents(filteredStudentList);
    }

    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><AiOutlineUnorderedList /> List of Students</h1>
            </div>
            <div className={`${studentsStyle.table_container}`}>
                <div className={`${studentsStyle.table_header}`}>
                    <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="rounded">
                        <Button
                            type="submit"
                            className={`${studentsStyle.btn_add}`}
                            form="gradesForm"
                            onClick={() => setAddModalShow(true)}
                        >
                            <AiOutlinePlus /> Add Student
                        </Button>
                    </Ripples>
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
                    setModalShow={setEditModalShow}
                    studentList={students}
                    setStudent={setStudent}
                />
            </div>
            <AddModalForm
                modalShow={addModalShow}
                setModalShow={setAddModalShow}
                setStudents={setStudents}
            />
            <EditModalForm
                modalShow={editModalShow}
                setModalShow={setEditModalShow}
                student={student}
                setStudents={setStudents}
            />
        </section>
    );
}

export default Students;
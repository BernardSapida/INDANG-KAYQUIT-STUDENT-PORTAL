// Axios
import axios from "axios";

// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React Modules
import { useState } from "react";

// React Bootstrap Components
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// React-Ripples
import Ripples from 'react-ripples'

// React-Icons
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

// Components
const TableList = dynamic(() => import("@/components/students/TableList"), {
    ssr: false,
});
const AddModalForm = dynamic(() => import("@/components/students/AddModalForm"), {
    ssr: false,
});
const EditModalForm = dynamic(() => import("@/components/students/EditModalForm"), {
    ssr: false,
});

// CSS
import style from "@/public/css/teacher-students.module.css";

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
            `${process.env.NEXTAUTH_URL}/api/v1/teacher/get/student-list`
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

function Students({
    user,
    studentList
}: {
    user: Record<string, any>;
    studentList: any;
}) {
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [student, setStudent] = useState({});

    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><AiOutlineUnorderedList /> List of Students</h1>
            </div>
            <div className={`${style.container}`}>
                <div className={`${style.table_header}`}>
                    <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="rounded">
                        <Button
                            type="submit"
                            className={`${style.btn_add}`}
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
                            // onChange={handleChange}
                            // value={value}
                            placeholder="Search student"
                        />
                    </InputGroup>
                </div>
                <TableList setModalShow={setEditModalShow} studentList={studentList} setStudent={setStudent} />
            </div>
            <AddModalForm modalShow={addModalShow} setModalShow={setAddModalShow} />
            <EditModalForm modalShow={editModalShow} setModalShow={setEditModalShow} student={student} />
        </div>
    );
}

export default Students;
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
const TableList = dynamic(() => import("@/components/teacher/grades/TableList"), {
    ssr: false,
});
const ModalForm = dynamic(() => import("@/components/teacher/grades/ModalForm"), {
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
            `${process.env.NEXTAUTH_URL}/api/v1/teacher/get/student-grades`
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
    const [modalShow, setModalShow] = useState(false);
    const [student, setStudent] = useState({});
    const [grade, setGrade] = useState([]);

    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><MdGrade /> Student Grade</h1>
            </div>
            <div className={`${style.container}`}>
                <div className={`${style.table_header}`}>
                    <InputGroup className="ms-auto mb-3">
                        <InputGroup.Text id="basic-addon1"><AiOutlineSearch /></InputGroup.Text>
                        <Form.Control
                            type="text"
                            name="keyword"
                            // onChange={handleChange}
                            // value={value}
                            placeholder="Search student"
                        />
                    </InputGroup>
                </div>
                <TableList studentList={studentList} setModalShow={setModalShow} setStudent={setStudent} />
            </div>
            <ModalForm
                student={student}
                setStudent={setStudent}
                modalShow={modalShow}
                setModalShow={setModalShow}
            />
        </div>
    );
}

export default Students;
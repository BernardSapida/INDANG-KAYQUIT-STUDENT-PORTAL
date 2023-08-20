// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React Modules
import { useState } from "react";

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

        return {
            props: {
                user: session.user,
            },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Students() {
    const [modalShow, setModalShow] = useState(false);
    const [student, setStudent] = useState({});

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
                <TableList setModalShow={setModalShow} setStudent={setStudent} />
            </div>
            <ModalForm modalShow={modalShow} setModalShow={setModalShow} student={student} />
        </div>
    );
}

export default Students;
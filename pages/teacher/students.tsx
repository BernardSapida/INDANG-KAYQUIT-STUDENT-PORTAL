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

// React-Icons
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

// Components
const TableList = dynamic(() => import("@/components/teacher/students/TableList"), {
    ssr: false,
});
const ModalForm = dynamic(() => import("@/components/teacher/students/ModalForm"), {
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

    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><AiOutlineUnorderedList /> List of Students</h1>
            </div>
            <div className={`${style.container}`}>
                <div className={`${style.table_header}`}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><AiOutlineSearch /></InputGroup.Text>
                        <Form.Control
                            type="text"
                            name="keyword"
                            // onChange={handleChange}
                            // value={value}
                            placeholder="Search student"
                        />
                    </InputGroup>
                    <Button type="button" className={`d-block ms-auto ${style.btn_add}`} onClick={() => setModalShow(true)}>
                        <AiOutlinePlus /> Add Student
                    </Button>
                </div>
                <TableList />
            </div>
            <ModalForm modalShow={modalShow} setModalShow={setModalShow} />
        </div>
    );
}

export default Students;
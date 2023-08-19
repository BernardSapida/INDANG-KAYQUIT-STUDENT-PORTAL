// Next Modules
import Link from "next/link";

// React Bootstrap Components
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// React-Icons
import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

// Components
import TableList from "@/components/teacher/students/TableList";

// CSS
import style from "@/public/css/teacher-students.module.css";

function Students() {
    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><FaGraduationCap /> List of Students</h1>
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
                    <Button type="button" className={`d-block ms-auto ${style.btn_add}`}>
                        <AiOutlinePlus /> Add Student
                    </Button>
                </div>
                <TableList />
            </div>
        </div>
    );
}

export default Students;
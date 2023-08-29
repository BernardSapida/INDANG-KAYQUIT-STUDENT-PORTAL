// Axios
import axios from "axios";

// React Bootstrap Components
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

// React Modules
import { Dispatch, SetStateAction, useState, useRef } from "react";

// Sweet Alert Modules
import Swal from "sweetalert2";

// React-Ripples
import Ripples from 'react-ripples'

// React-Icons
import { BsSave } from 'react-icons/bs';
import { MdGrade } from 'react-icons/md';

// UID
import { nanoid } from 'nanoid';

// CSS
import style from "@/public/css/teacher-modal.module.css";
import { FloatingLabel } from "react-bootstrap";
import { Classes, Grade, Student } from "@/types/global";

function ModalForm({
    student,
    setStudent,
    modalShow,
    setModalShow
}: {
    student: Student | Record<string, any>;
    setStudent: Dispatch<SetStateAction<Student | Record<string, any>>>;
    modalShow: boolean;
    setModalShow: Dispatch<SetStateAction<boolean>>;
}) {
    const [loading, setLoading] = useState<boolean>(false);
    const [grades, setGrades] = useState<Grade[]>([]);
    const sectionId = useRef<string>("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setLoading(true);

        const formDataObject = new FormData(e.target);
        const formValues: Record<string, any> = {};

        formDataObject.forEach((value, key) => {
            let [subjectName, quarter] = key.split(".");

            if (formValues[subjectName] != undefined) {
                formValues[subjectName][quarter] = Number(value);
            } else {
                formValues[subjectName] = {};
                formValues[subjectName].subjectName = subjectName;
                formValues[subjectName][quarter] = Number(value);
            }
        });

        let studentGrade = Object.values(formValues);

        let newClass = student.classes.map((c: Classes) => {
            if (c.sectionDetails._id == sectionId.current) {
                c.grades = studentGrade;
            }

            return c;
        })

        student.classes = newClass;
        setStudent(JSON.parse(JSON.stringify(student)));

        syncTable();

        // Save to database
        updateGrade(studentGrade);

        setLoading(false);
    };

    const updateGrade = async (studentGrade: Grade[]) => {
        const res = await axios.post(
            `/api/v1/teacher/update/student-grades`,
            {
                email: student.kayquitAccount.email,
                sectionId: sectionId.current,
                grades: studentGrade
            }
        );
    }

    const syncTable = () => {
        let newGrades = student.classes.filter((c: Classes) => {
            return c.sectionDetails._id === sectionId.current;
        })[0]?.grades;

        setGrades(newGrades);
    }

    const changeAcademicYear = (e: any) => {
        sectionId.current = e.target.value;
        syncTable();
    }

    return (
        <Modal
            show={modalShow}
            onHide={() => {
                setModalShow(false);
                setGrades([]);
            }}
            backdrop="static"
            size="lg"
            centered
        >
            <>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <MdGrade className="mb-2" /> Edit student grade
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Student Name:</strong> {student.personalDetails?.fullname}</p>
                    <p><strong>Student LRN:</strong> {student.enrollmentDetails?.lrn}</p>
                    <p><strong>Student Number:</strong> {student.enrollmentDetails?.studentNumber}</p>
                    <FloatingLabel className="w-100" label={"Grade & Section"} onChange={changeAcademicYear}>
                        <Form.Select>
                            <option value="">--- Choose grade & section ---</option>
                            {student.classes?.map((c: Classes, key: number) => (
                                <option key={key} value={`${c.sectionDetails._id}`}>{`${c.sectionDetails.gradeLevel} - ${c.sectionDetails.name}`}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                    <Form onSubmit={handleSubmit} id="gradesForm">
                        {grades?.length ?
                            (<Table className='text-center mt-3' bordered striped responsive>
                                <thead className="align-middle">
                                    <tr>
                                        <th className="bg-dark text-light" rowSpan={2}>Subject Name</th>
                                        <th className="bg-dark text-light" colSpan={4}>Quarter</th>
                                    </tr>
                                    <tr>
                                        <th className="bg-dark text-light">1st</th>
                                        <th className="bg-dark text-light">2nd</th>
                                        <th className="bg-dark text-light">3rd</th>
                                        <th className="bg-dark text-light">4th</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    {
                                        grades?.map((g: Grade) => (
                                            <tr key={nanoid()}>
                                                <td>{g.subjectName}</td>
                                                <td>
                                                    <Form.Control
                                                        type="number"
                                                        name={`${g.subjectName}.firstQuarter`}
                                                        defaultValue={g.firstQuarter}
                                                        placeholder="0"
                                                        style={{ width: 90, margin: "auto", textAlign: "center" }}
                                                    />
                                                </td>
                                                <td>
                                                    <Form.Control
                                                        type="number"
                                                        name={`${g.subjectName}.secondQuarter`}
                                                        defaultValue={g.secondQuarter}
                                                        placeholder="0"
                                                        style={{ width: 90, margin: "auto", textAlign: "center" }}
                                                    />
                                                </td>
                                                <td>
                                                    <Form.Control
                                                        type="number"
                                                        name={`${g.subjectName}.thirdQuarter`}
                                                        defaultValue={g.thirdQuarter}
                                                        placeholder="0"
                                                        style={{ width: 90, margin: "auto", textAlign: "center" }}
                                                    />
                                                </td>
                                                <td>
                                                    <Form.Control
                                                        type="number"
                                                        name={`${g.subjectName}.fourthQuarter`}
                                                        defaultValue={g.fourthQuarter}
                                                        placeholder="0"
                                                        style={{ width: 90, margin: "auto", textAlign: "center" }}
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table >) : <></>
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                        <Button
                            type="submit"
                            className={`d-block ms-auto ${style.btn_post}`}
                            form="gradesForm"
                            disabled={loading}
                        >
                            {
                                loading ? (<><Spinner animation="grow" size="sm" /> Saving...</>) :
                                    (<><BsSave /> Save</>)
                            }

                        </Button>
                    </Ripples>
                </Modal.Footer>
            </>
        </Modal>
    );
}

export default ModalForm;
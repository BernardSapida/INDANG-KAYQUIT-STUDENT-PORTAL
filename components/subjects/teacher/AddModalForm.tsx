import axios from "axios";

import { FloatingLabel } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import Ripples from 'react-ripples'

import { AiOutlinePlus } from 'react-icons/ai';
import { PiNotebookBold } from 'react-icons/pi';
import { BsFillSendFill, BsTrash } from 'react-icons/bs';

import { Alert } from "@/utils/alert";
import { getGrades } from "@/utils/grades";

import style from "@/public/css/teacher-subjects.module.css";

function AddModalForm({
    modalShow,
    setModalShow,
    setSections,
}: {
    modalShow: boolean;
    setModalShow: Dispatch<SetStateAction<boolean>>;
    setSections: Dispatch<SetStateAction<any[]>>;
}) {
    const [tableRows, setTableRows] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    let fieldId = useRef(1);

    useEffect(() => addRow(), []);

    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault();
            setLoading(true);

            const formDataObject = new FormData(e.target);
            const formValues: Record<string, any> = {};
            let haveEmptyFields: boolean = false;

            formDataObject.forEach((value, key) => {
                let [fieldName, fieldNumber] = key.split(".");

                if (value === "") {
                    haveEmptyFields = true;
                    return null;
                }

                if (formValues[fieldNumber] != undefined) {
                    formValues[fieldNumber][fieldName] = value;
                } else {
                    formValues[fieldNumber] = {};
                    formValues[fieldNumber][fieldName] = value;
                }
            });

            if (haveEmptyFields) {
                setLoading(false);
                Alert(
                    "All fields are required",
                    "Make sure you answered all the required fields",
                    "error"
                );
                return;
            }

            let arr = Object.values(formValues);
            let academicYear = arr[0].academicYear;
            let name = arr[0].section;
            let gradeLevel = arr[0].gradeLevel;
            let subjects = [...arr.slice(1)];

            let output = {
                academicYear: academicYear,
                name: name,
                gradeLevel: gradeLevel,
                subjects: subjects,
                grades: getGrades(subjects)
            }

            // Replace schoolSchedule element with this
            const sectionId = await createSection(output);

            // Update sections state by appending new section
            setSections(prevSections => (
                [...prevSections, {
                    _id: sectionId,
                    gradeLevel: gradeLevel,
                    name: name,
                    academicYear: academicYear,
                    subjects: subjects,
                    updatedAt: new Date(),
                    createdAt: new Date()
                }]
            ))

            Alert(
                "Creation successfully",
                "Successfully created new section",
                "success"
            );

            setLoading(false);
        } catch (error: any) {
            setLoading(false);

            const errorMessage = error.response.data.message;

            Alert(
                "Failed to create new section",
                errorMessage,
                "error"
            );
        }
    }

    const createSection = async (output: Record<string, any>) => {
        const res = await axios.post(
            `/api/v1/teacher/post/section`,
            output
        );

        return res.data.data.insertedId;
    }

    const removeRow = (position: number) => {
        setTableRows(beforeFields => [...beforeFields.filter(f => f.key != position)]);
    }

    const addRow = () => {
        setTableRows(beforeFields => {
            const newFieldId = fieldId.current++;

            return [...beforeFields,
            <tr key={newFieldId}>
                <td>
                    <Form.Control
                        type="text"
                        name={`subjectName.field${newFieldId}`}
                        placeholder="Subject"
                        style={{ width: 150, margin: "auto", textAlign: "center" }}
                    />
                </td>
                <td>
                    <Form.Control
                        type="text"
                        name={`time.field${newFieldId}`}
                        placeholder="Time"
                        style={{ width: 150, margin: "auto", textAlign: "center" }}
                    />
                </td>
                <td>
                    <Form.Control
                        type="text"
                        name={`day.field${newFieldId}`}
                        placeholder="Day"
                        style={{ width: 150, margin: "auto", textAlign: "center" }}
                    />
                </td>
                <td>
                    <Form.Control
                        type="text"
                        name={`room.field${newFieldId}`}
                        placeholder="Room"
                        style={{ width: 150, margin: "auto", textAlign: "center" }}
                    />
                </td>
                <td>
                    <Button type="button" variant="danger" className={`d-block`} onClick={() => removeRow(newFieldId)}>
                        <BsTrash className="mb-1" />
                    </Button>
                </td>
            </tr>]
        });
    }

    return (
        <Modal
            show={modalShow}
            onHide={() => {
                setModalShow(false);
                setTableRows([]);
                addRow();
            }}
            backdrop="static"
            centered
            size="lg"
            scrollable
        >
            <>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <PiNotebookBold className="mb-2" /> Add subject
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} id="gradesForm">
                        <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                            <Form.Select name="gradeLevel">
                                <option value="">--- Choose grade level ---</option>
                                <option value="Kinder">Kinder</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel className="mb-3 w-100" label={"Section"}>
                            <Form.Select name="section">
                                <option value="">--- Choose section ---</option>
                                <option value="Akasya">Akasya</option>
                                <option value="Narra">Narra</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel className="w-100" label={"Academic Year"}>
                            <Form.Select name="academicYear">
                                <option value="">--- Choose academic year ---</option>
                                <option value="2017-2018">2017-2018</option>
                                <option value="2019-2020">2018-2019</option>
                                <option value="2019-2020">2019-2020</option>
                                <option value="2020-2021">2020-2021</option>
                                <option value="2021-2022">2021-2022</option>
                                <option value="2022-2023">2022-2023</option>
                                <option value="2023-2024">2023-2024</option>
                            </Form.Select>
                        </FloatingLabel>
                        <Table className='text-center mt-3' bordered striped responsive>
                            <thead className="align-middle">
                                <tr>
                                    <th className="bg-dark text-light">Subject Name</th>
                                    <th className="bg-dark text-light">Time</th>
                                    <th className="bg-dark text-light">Day</th>
                                    <th className="bg-dark text-light">Room</th>
                                    <th className="bg-dark text-light">Action</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {tableRows}
                            </tbody>
                        </Table>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="me-auto rounded">
                        <Button type="button" className={`${style.btn_add}`} onClick={addRow}>
                            <AiOutlinePlus /> Add row
                        </Button>
                    </Ripples>
                    <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                        <Button
                            type="submit"
                            className={`d-block ms-auto ${style.btn_submit}`}
                            form="gradesForm"
                            disabled={loading}
                        >
                            {
                                loading ? (<><Spinner animation="grow" size="sm" /> Creating...</>) :
                                    (<><BsFillSendFill /> Create a section</>)
                            }
                        </Button>
                    </Ripples>
                </Modal.Footer>
            </>
        </Modal>
    );
}

export default AddModalForm;
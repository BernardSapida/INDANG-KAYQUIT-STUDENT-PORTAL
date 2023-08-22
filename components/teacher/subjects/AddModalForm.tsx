// React Bootstrap Components
import { FloatingLabel } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

// React Modules
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";

// Sweet Alert Modules
import Swal from "sweetalert2";

// React-Icons
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillSendFill, BsTrash } from 'react-icons/bs';
import { PiNotebookBold } from 'react-icons/pi';

// Components
import Error from "@/components/error/Error";

// CSS
import style from "@/public/css/teacher-subjects.module.css";

function AddModalForm({
    modalShow,
    setModalShow,
}: {
    modalShow: boolean;
    setModalShow: Dispatch<SetStateAction<boolean>>;
}) {
    const [showError, setShowError] = useState<boolean>(false);
    const [tableRows, setTableRows] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    let fieldId = useRef(1);

    useEffect(() => addRow(), []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        const formDataObject = new FormData(e.target);

        const formValues: Record<string, any> = {};

        formDataObject.forEach((value, key) => {
            let [fieldName, fieldNumber] = key.split(".");

            if (value === "") {
                setShowError(true);
                setError("All fields are required!")
            }

            if (formValues[fieldNumber] != undefined) {
                formValues[fieldNumber][fieldName] = value;
            } else {
                formValues[fieldNumber] = {};
                formValues[fieldNumber][fieldName] = value;
            }
        });

        let arr = Object.values(formValues);
        let res = {
            academicYear: arr[0].academicYear,
            section: `${arr[0].gradeLevel} - ${arr[0].section}`,
            subjects: [...arr.slice(1)]
        }

        // Replace schoolSchedule element with this
        // console.log(res)
    };

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
                setShowError(false);
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
                    <Error errMessage={error} showError={showError} />
                    <Form onSubmit={handleSubmit} id="gradesForm">
                        <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                            <Form.Select name="gradeLevel">
                                <option value="">--- Choose grade level ---</option>
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
                                <option value="Peace">Peace</option>
                                <option value="Faith">Faith</option>
                                <option value="Love">Love</option>
                                <option value="Hope">Hope</option>
                                <option value="Justice">Justice</option>
                                <option value="Joy">Joy</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel className="w-100" label={"Academic Year"}>
                            <Form.Select name="academicYear">
                                <option value="">--- Choose academic year ---</option>
                                <option value="2019-2020">2019-2020</option>
                                <option value="2020-2021">2020-2021</option>
                                <option value="2021-2022">2021-2022</option>
                                <option value="2022-2023">2022-2023</option>
                                <option value="2023-2024">2023-2024</option>
                                <option value="2024-2025">2024-2025</option>
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
                        </Table >
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className={`d-block ${style.btn_add}`} onClick={addRow}>
                        <AiOutlinePlus /> Add row
                    </Button>
                    <Button type="submit" className={`d-block ms-auto ${style.btn_submit}`} form="gradesForm">
                        <BsFillSendFill /> Submit
                    </Button>
                </Modal.Footer>
            </>
        </Modal>
    );
}

export default AddModalForm;
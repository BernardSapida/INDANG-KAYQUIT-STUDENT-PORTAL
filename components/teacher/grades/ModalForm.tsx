// React Bootstrap Components
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

// React Modules
import { Dispatch, SetStateAction, useState } from "react";

// Sweet Alert Modules
import Swal from "sweetalert2";

// React-Ripples
import Ripples from 'react-ripples'

// React-Icons
import { BsSave } from 'react-icons/bs';
import { MdGrade } from 'react-icons/md';

// CSS
import style from "@/public/css/teacher-modal.module.css";

function ModalForm({
    modalShow,
    setModalShow,
    student
}: {
    modalShow: boolean;
    setModalShow: Dispatch<SetStateAction<boolean>>;
    student: Record<string, any>
}) {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        const formDataObject = new FormData(e.target);

        const formValues: Record<string, any> = {};

        formDataObject.forEach((value, key) => {
            let [subjectName, quarter] = key.split(".");
            // formValues[key] = value;
            // console.log(subjectName, quarter, Number(value))

            if (formValues[subjectName] != undefined) {
                formValues[subjectName][quarter] = Number(value);
            } else {
                formValues[subjectName] = {};
                formValues[subjectName].subjectName = subjectName;
                formValues[subjectName][quarter] = Number(value);
            }
        });

        // Save to database
        let res = Object.values(formValues);
        console.log(res)

        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <Modal
            show={modalShow}
            onHide={() => {
                setModalShow(false);
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
                    <p className="m-0"><strong>Student Name:</strong> {student.fullname}</p>
                    <p className="m-0"><strong>Grade & Section:</strong> {student.gradeAndSection}</p>

                    <Form onSubmit={handleSubmit} id="gradesForm">
                        <Table className='text-center mt-3' bordered striped responsive>
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
                                    student.grades?.map((d: Record<string, any>, key: number) => (
                                        <tr key={key}>
                                            <td>{d.subjectName}</td>
                                            <td>
                                                <Form.Control
                                                    type="number"
                                                    name={`${d.subjectName}.firstQuarter`}
                                                    defaultValue={d.firstQuarter}
                                                    placeholder="0"
                                                    style={{ width: 90, margin: "auto", textAlign: "center" }}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="number"
                                                    name={`${d.subjectName}.secondQuarter`}
                                                    defaultValue={d.secondQuarter}
                                                    placeholder="0"
                                                    style={{ width: 90, margin: "auto", textAlign: "center" }}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="number"
                                                    name={`${d.subjectName}.thirdQuarter`}
                                                    defaultValue={d.thirdQuarter}
                                                    placeholder="0"
                                                    style={{ width: 90, margin: "auto", textAlign: "center" }}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="number"
                                                    name={`${d.subjectName}.fourthQuarter`}
                                                    defaultValue={d.fourthQuarter}
                                                    placeholder="0"
                                                    style={{ width: 90, margin: "auto", textAlign: "center" }}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table >
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
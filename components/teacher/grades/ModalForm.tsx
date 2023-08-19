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

// React-Icons
import { BsSave } from 'react-icons/bs';
import { MdGrade } from 'react-icons/md';

// CSS
import style from "@/public/css/teacher-modal.module.css";

function ModalForm({
    modalShow,
    setModalShow,
}: {
    modalShow: boolean;
    setModalShow: Dispatch<SetStateAction<boolean>>;
}) {
    const [loading, setLoading] = useState<boolean>(false);

    const data = [
        {
            subjectName: "English",
            firstQuarter: 85,
            secondQuarter: 88,
            thirdQuarter: 90,
            fourthQuarter: 92
        },
        {
            subjectName: "Math",
            firstQuarter: 90,
            secondQuarter: 88,
            thirdQuarter: 85,
            fourthQuarter: 88
        },
        {
            subjectName: "Science",
            firstQuarter: 78,
            secondQuarter: 80,
            thirdQuarter: 82,
            fourthQuarter: 85
        },
        {
            subjectName: "Physical Education (PE)",
            firstQuarter: 78,
            secondQuarter: 90,
            thirdQuarter: 82,
            fourthQuarter: 85
        },
        {
            subjectName: "Music",
            firstQuarter: 78,
            secondQuarter: 80,
            thirdQuarter: 82,
            fourthQuarter: 85
        },
        {
            subjectName: "Social Studies",
            firstQuarter: 78,
            secondQuarter: 80,
            thirdQuarter: 82,
            fourthQuarter: 85
        },
        {
            subjectName: "Computer Science",
            firstQuarter: 78,
            secondQuarter: 80,
            thirdQuarter: 82,
            fourthQuarter: 85
        },
        {
            subjectName: "Library",
            firstQuarter: 78,
            secondQuarter: 80,
            thirdQuarter: 82,
            fourthQuarter: 85
        }
    ];

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

        // Replace student grade with this
        let res = Object.values(formValues);
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
                    <p className="m-0"><strong>Student Name:</strong> Bernard Sapida</p>
                    <p className="m-0"><strong>Grade & Section:</strong> 6 - Peace</p>

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
                                    data.map((d, key) => (
                                        <tr>
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
                    <Button type="submit" className={`d-block ms-auto ${style.btn_post}`} form="gradesForm">
                        <BsSave /> Save
                    </Button>
                </Modal.Footer>
            </>
        </Modal>
    );
}

export default ModalForm;
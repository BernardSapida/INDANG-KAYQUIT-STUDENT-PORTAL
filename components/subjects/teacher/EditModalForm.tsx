import axios from "axios";

// React Bootstrap Components
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

// React Modules
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

// React-Icons
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillSendFill, BsTrash } from 'react-icons/bs';
import { BiSolidEdit } from 'react-icons/bi';

import { Grade, Section, Subject } from "@/types/global";

// Components
import Error from "@/components/alerts/error/Error";

// CSS
import style from "@/public/css/teacher-subjects.module.css";
import Success from "@/components/alerts/success/Success";
import { Alert } from "@/utils/alert";

function EditModalForm({
    sectionInfo,
    modalShow,
    setModalShow,
    setSections
}: {
    sectionInfo: Section | Record<string, any>;
    modalShow: boolean;
    setModalShow: Dispatch<SetStateAction<boolean>>;
    setSections: Dispatch<SetStateAction<Section[]>>;
}) {
    const [tableRows, setTableRows] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [showError, setShowError] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    let fieldId = useRef(1);

    useEffect(() => populateRows(), [sectionInfo, modalShow]);

    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault();
            setLoading(true);

            const formDataObject = new FormData(e.target);
            const formValues: Record<string, any> = {};
            let haveEmptyFields: boolean = false;

            formDataObject.forEach((value, key) => {
                const [fieldName, fieldNumber] = key.split(".");

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
                    "Failed to submit",
                    "Make sure there are no fields empty!",
                    "error"
                );
                return null;
            }

            const arr = Object.values(formValues);
            const academicYear = sectionInfo.academicYear;
            const name = sectionInfo.name;
            const gradeLevel = sectionInfo.gradeLevel;
            const subjects = arr;
            const grades: Grade[] = getGrades(subjects);
            const [addedSubjects, removedSubjects] = getAddedAndRemovedSubjects(grades);
            const output = {
                sectionId: sectionInfo._id,
                gradeLevel: gradeLevel,
                name: name,
                academicYear: academicYear,
                subjects: subjects,
                addedSubjects,
                removedSubjects
            }

            // Update section in database
            await updateSection(output);

            // Update Subjects in specified section
            setSections((prevSections) => (
                prevSections.map(section => {
                    if (section._id == sectionInfo._id) {
                        section.subjects = subjects;
                    }

                    return section
                })
            ));

            Alert(
                "Success!",
                "Section's subjects successfully submitted",
                "success",
                "Thank you!"
            );
        } catch (error) {
            Alert(
                "There was an error",
                "Please contact the administrator",
                "error"
            );
            console.error(error);
        }
    };

    const getGrades = (subjects: Subject[]): Grade[] => {
        const grades: Grade[] = [];

        subjects.filter(subject => {
            const gradeCollection = {
                subjectName: subject.subjectName,
                firstQuarter: 0,
                secondQuarter: 0,
                thirdQuarter: 0,
                fourthQuarter: 0,
            }

            grades.push(gradeCollection);
        })

        return grades;
    }

    const getAddedAndRemovedSubjects = (grades: Grade[]): [Grade[], string[]] => {
        const oldSubsCollection: Record<string, any> = {};

        // Populate oldSubsCollection with subject names
        sectionInfo.subjects.map((subject: Record<string, any>) => oldSubsCollection[subject.subjectName] = 1);

        const addedSubjects = grades.filter((grade: Record<string, any>) => {
            if (!oldSubsCollection[grade.subjectName]) {
                return true
            } else {
                delete oldSubsCollection[grade.subjectName]
            }
        });
        const removedSubjects = Object.keys(oldSubsCollection);

        return [addedSubjects, removedSubjects]
    }

    const updateSection = async (output: Record<string, any>) => {
        const response = await axios.post(
            `/api/v1/teacher/update/subjects`,
            output
        );

        return response;
    }

    const removeRow = (position: number) => {
        setTableRows(beforeFields => [...beforeFields.filter(f => f.key != position)]);
    };

    const populateRows = () => {
        let rows: any[] = [];

        sectionInfo.subjects?.filter((subject: Record<string, any>, key: number) => {
            const newFieldId = fieldId.current++;

            rows.push(
                <tr key={newFieldId}>
                    <td>
                        <Form.Control
                            type="text"
                            name={`subjectName.field${newFieldId}`}
                            defaultValue={subject.subjectName}
                            placeholder="Subject"
                            style={{ width: 150, margin: "auto", textAlign: "center" }}
                        />
                    </td>
                    <td>
                        <Form.Control
                            type="text"
                            name={`time.field${newFieldId}`}
                            defaultValue={subject.time}
                            placeholder="Time"
                            style={{ width: 150, margin: "auto", textAlign: "center" }}
                        />
                    </td>
                    <td>
                        <Form.Control
                            type="text"
                            name={`day.field${newFieldId}`}
                            defaultValue={subject.day}
                            placeholder="Day"
                            style={{ width: 150, margin: "auto", textAlign: "center" }}
                        />
                    </td>
                    <td>
                        <Form.Control
                            type="text"
                            name={`room.field${newFieldId}`}
                            defaultValue={subject.room}
                            placeholder="Room"
                            style={{ width: 150, margin: "auto", textAlign: "center" }}
                        />
                    </td>
                    <td>
                        <Button type="button" variant="danger" className={`d-block`} onClick={() => removeRow(newFieldId)}>
                            <BsTrash className="mb-1" />
                        </Button>
                    </td>
                </tr>
            )
        })

        setTableRows(rows);
    };

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
            }}
            backdrop="static"
            centered
            size="lg"
            scrollable
        >
            <>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <BiSolidEdit className="mb-2" /> Edit subject
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Success successMessage={successMessage} showSuccess={showSuccess} />
                    <Error errMessage={error} showError={showError} />
                    <Form onSubmit={handleSubmit} id="gradesForm">
                        <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                            <Form.Select name="gradeLevel" defaultValue={sectionInfo.gradeLevel} disabled>
                                <option value={""}>--- Choose grade level ---</option>
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
                            <Form.Select name="section" defaultValue={sectionInfo.name} disabled>
                                <option value="">--- Choose section ---</option>
                                <option value="Akasya">Akasya</option>
                                <option value="Narra">Narra</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel className="w-100" label={"Academic Year"}>
                            <Form.Select name="academicYear" defaultValue={sectionInfo.academicYear} disabled>
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

export default EditModalForm;
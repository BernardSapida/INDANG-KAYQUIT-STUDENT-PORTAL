// React Bootstrap Components
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// React Modules
import { Dispatch, SetStateAction, useState } from "react";

// Formik Modules
import { Formik, ErrorMessage } from "formik";

// Sweet Alert Modules
import Swal from "sweetalert2";

// React-Ripples
import Ripples from 'react-ripples'

// React-Icons
import { BsFillPeopleFill, BsPersonFillAdd } from 'react-icons/bs';

// Helpers
import { initialValues, validationSchema } from "@/helpers/teacher/students/Form";

// Components
import PersonalDetails from "@/components/students/PersonalDetails";
import EnrollmentDetails from "@/components/students/EnrollmentDetails";
import ContactDetails from "@/components/students/ContactDetails";
import KayquitGoogleAccount from "@/components/students/KayquitGoogleAccount";

// CSS
import style from "@/public/css/teacher-modal.module.css";
import { Student, StudentResponse } from "@/types/global";
import axios from "axios";
import { Alert } from "@/utils/alert";
import { getGrades } from "@/utils/grades";
import { fetchSectionInformation } from "@/utils/sections";

function ModalForm({
    modalShow,
    setStudents,
    setModalShow
}: {
    modalShow: boolean;
    setStudents: Dispatch<SetStateAction<Student[]>>;
    setModalShow: Dispatch<SetStateAction<boolean>>;
}) {
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (
        values: {
            fullname: string;
            sex: string;
            birthdate: string;
            religion: string;
            civilStatus: string;
            gradeLevel: string;
            section: string;
            studentLRN: string;
            studentNumber: string;
            academicYear: string;
            address: string;
            contactNumber: string;
            guardian: string;
            email: string;
            defaultPassword: string;
        },
        { resetForm }: { resetForm: any }
    ) => {
        try {
            setLoading(true);

            const section = await fetchSectionInformation(values.gradeLevel, values.section, values.academicYear);
            const grades = getGrades(section.subjects);
            const studentInfo: Student = {
                personalDetails: {
                    fullname: values.fullname,
                    birthdate: values.birthdate,
                    sex: values.sex,
                    religion: values.religion,
                    civilStatus: values.civilStatus
                },
                enrollmentDetails: {
                    currentGradeLevel: values.gradeLevel,
                    currentSection: values.section,
                    lrn: values.studentLRN,
                    studentNumber: values.studentNumber,
                    academicYear: values.academicYear
                },
                classes: [{
                    section: section._id,
                    grades: grades
                } as any],
                contactDetails: {
                    address: values.address,
                    guardian: values.guardian,
                    contactNumber: values.contactNumber,
                },
                kayquitAccount: {
                    email: values.email,
                    defaultPassword: values.defaultPassword,
                    password: values.defaultPassword,
                }
            }

            const studentAlreadyExist = await studentExist(values.email);

            if (studentAlreadyExist) {
                return Alert(
                    "Cannot add new student",
                    `The student with email of <strong>${values.email}</strong> already exists in records.`,
                    "error"
                );
            }

            // Save to database
            const addedStudent: StudentResponse = await createStudent(studentInfo);

            setStudents((prevStudents: Student[]) => {
                studentInfo._id = addedStudent.data?.insertedId;
                return [studentInfo, ...prevStudents];
            })

            setLoading(false);

            resetForm();

            Alert(
                "Success!",
                "Student successfully added",
                "success",
                "Thank you!"
            );
        } catch (error: any) {
            setLoading(false);

            const errorMessage = error.response.data.message;

            Alert(
                "Failed to create student",
                errorMessage,
                "error"
            );
        }
    };

    const studentExist = async (email: string): Promise<StudentResponse> => {
        const response = await axios.post(
            `/api/v1/teacher/post/student`,
            { email }
        );

        return response.data.data;
    }

    const createStudent = async (studentInfo: Student): Promise<StudentResponse> => {
        const response = await axios.post(
            `/api/v1/teacher/post/new-student`,
            { studentInfo }
        );

        return response.data;
    }

    return (
        <Modal
            show={modalShow}
            onHide={() => {
                setModalShow(false);
            }}
            backdrop="static"
            size="lg"
            centered
            scrollable
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleChange, values, resetForm }) => (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <BsFillPeopleFill className="mb-2" /> Add new student
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit} id="modalForm">
                                <PersonalDetails values={values} handleChange={handleChange} loading={loading} />
                                <EnrollmentDetails values={values} handleChange={handleChange} loading={loading} />
                                <ContactDetails values={values} handleChange={handleChange} loading={loading} />
                                <KayquitGoogleAccount values={values} handleChange={handleChange} loading={loading} />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="rounded">
                                <Button
                                    type="submit"
                                    className={`${style.btn_post}`}
                                    form="modalForm"
                                    onClick={() => setModalShow(true)}
                                    disabled={loading}
                                >
                                    {
                                        loading ? (<><Spinner animation="grow" size="sm" /> Adding...</>) :
                                            (<><BsPersonFillAdd /> Add new student</>)
                                    }
                                </Button>
                            </Ripples>
                        </Modal.Footer>
                    </>
                )}
            </Formik>
        </Modal>
    );
}

export default ModalForm;
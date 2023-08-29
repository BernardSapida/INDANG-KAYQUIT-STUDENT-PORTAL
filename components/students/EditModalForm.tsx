import axios from "axios";

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

// React-Icons
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdSystemUpdateAlt } from 'react-icons/md';

// Helpers
import { initialValues, validationSchema } from "@/helpers/teacher/students/Form";

// React-Ripples
import Ripples from 'react-ripples'

// Components
import PersonalDetails from "@/components/students/PersonalDetails";
import EnrollmentDetails from "@/components/students/EnrollmentDetails";
import ContactDetails from "@/components/students/ContactDetails";
import KayquitGoogleAccount from "@/components/students/KayquitGoogleAccount";

// CSS
import style from "@/public/css/teacher-modal.module.css";
import { Student } from "@/types/global";

function ModalForm({
    modalShow,
    setModalShow,
    student
}: {
    modalShow: boolean;
    setModalShow: Dispatch<SetStateAction<boolean>>;
    student: Student | Record<string, any>;
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

        setLoading(true);
        const StudentInformation: Student = {
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
            contactDetails: {
                address: values.address,
                guardian: values.guardian,
                contactNumber: values.contactNumber,
            },
            kayquitAccount: {
                email: values.email,
                defaultPassword: values.defaultPassword,
                password: student.kayquitAccount.password
            },
        }

        // Save to database
        updateInformation(StudentInformation)

        setTimeout(() => setLoading(false), 2000);
    };

    const updateInformation = async (studentInformation: Student) => {
        const response = await axios.post(
            `/api/v1/teacher/update/student-information`,
            {
                _id: student._id,
                studentInformation
            }
        );
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
                // initialValues={initialValues}
                initialValues={{
                    fullname: student.personalDetails?.fullname,
                    sex: student.personalDetails?.sex,
                    birthdate: student.personalDetails?.birthdate,
                    religion: student.personalDetails?.religion,
                    civilStatus: student.personalDetails?.civilStatus,
                    gradeLevel: student.enrollmentDetails?.currentGradeLevel,
                    section: student.enrollmentDetails?.currentSection,
                    studentLRN: student.enrollmentDetails?.lrn,
                    studentNumber: student.enrollmentDetails?.studentNumber,
                    academicYear: student.enrollmentDetails?.academicYear,
                    address: student.contactDetails?.address,
                    contactNumber: student.contactDetails?.contactNumber,
                    guardian: student.contactDetails?.guardian,
                    email: student.kayquitAccount?.email,
                    defaultPassword: student.kayquitAccount?.defaultPassword,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleChange, values, resetForm }) => (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <BsFillPeopleFill className="mb-2" /> Edit student
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
                                    className={`d-block ms-auto ${style.btn_post}`}
                                    form="modalForm"
                                    disabled={loading}
                                >
                                    {
                                        loading ? (<><Spinner animation="grow" size="sm" /> Updating...</>) :
                                            (<><MdSystemUpdateAlt /> Update</>)
                                    }

                                </Button>
                            </Ripples>
                        </Modal.Footer>
                    </>
                )}
            </Formik>
        </Modal >
    );
}

export default ModalForm;
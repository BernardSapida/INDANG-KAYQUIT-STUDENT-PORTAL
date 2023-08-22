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
import PersonalDetails from "@/components/teacher/students/PersonalDetails";
import EnrollmentDetails from "@/components/teacher/students/EnrollmentDetails";
import ContactDetails from "@/components/teacher/students/ContactDetails";
import KayquitGoogleAccount from "@/components/teacher/students/KayquitGoogleAccount";

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
            kayquitEmailAccount: string;
            temporaryPassword: string;
        },
        { resetForm }: { resetForm: any }
    ) => {
        const {
            fullname,
            sex,
            birthdate,
            religion,
            civilStatus,
            gradeLevel,
            section,
            studentLRN,
            studentNumber,
            academicYear,
            address,
            contactNumber,
            guardian,
            kayquitEmailAccount,
            temporaryPassword,
        } = values;

        setLoading(true);
        const StudentInformation = {
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
                studentNumber: values.studentNumber
            },
            contactDetails: {
                address: values.address,
                guardian: values.guardian,
                contactNumber: values.contactNumber,
            },
            kayquitGoogleAccount: {
                kayquitAccount: values.kayquitEmailAccount,
                defaultPassword: values.temporaryPassword,
                password: values.temporaryPassword,
            },
        }

        // Save to database
        console.log(StudentInformation)


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
            scrollable
        >
            <Formik
                // initialValues={initialValues}
                initialValues={{
                    fullname: student.fullname,
                    sex: student.sex,
                    birthdate: student.birthdate,
                    religion: student.religion,
                    civilStatus: student.civilStatus,
                    gradeLevel: student.gradeLevel,
                    section: student.section,
                    studentLRN: student.studentLRN,
                    studentNumber: student.studentNumber,
                    academicYear: student.academicYear,
                    address: student.address,
                    contactNumber: student.contactNumber,
                    guardian: student.guardian,
                    kayquitEmailAccount: student.kayquitEmailAccount,
                    temporaryPassword: student.temporaryPassword,
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
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

function ModalForm({
    modalShow,
    setModalShow,
}: {
    modalShow: boolean;
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
            email,
            defaultPassword,
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
                email: values.email,
                defaultPassword: values.defaultPassword,
                password: values.defaultPassword,
            },
        }

        // Save to database
        // console.log(StudentInformation)

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
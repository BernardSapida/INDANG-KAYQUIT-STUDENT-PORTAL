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
import { BsFillPeopleFill, BsPersonFillAdd } from 'react-icons/bs';

// Helpers
import { initialValues, validationSchema } from "@/helpers/teacher/students/Form";

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

        console.log(values);
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
                            <Button type="submit" form="modalForm" className={`d-block ms-auto ${style.btn_post}`} onClick={() => setModalShow(true)}>
                                <BsPersonFillAdd /> Add new student
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Formik>
        </Modal>
    );
}

export default ModalForm;
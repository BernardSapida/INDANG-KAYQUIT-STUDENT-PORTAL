// React Bootstrap Components
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// React Modules
import { Dispatch, SetStateAction, useState } from "react";

// Formik Modules
import { Formik } from "formik";

// React-Icons
import { BsFillSendFill } from 'react-icons/bs';
import { MdNotificationsActive } from 'react-icons/md';

// Helpers
import { initialValues, validationSchema } from "@/helpers/teacher/announcements/Form";

// Components
import Field from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";

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
        values: { title: string; description: string },
        { resetForm }: { resetForm: any }
    ) => {
        const { title, description } = values;
        setLoading(true);
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
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleChange, values, resetForm }) => (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <MdNotificationsActive /> Announcement
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit} id="modalForm">
                                <Field
                                    type="text"
                                    name="title"
                                    label="Title"
                                    handleChange={handleChange}
                                    value={values.title}
                                    loading={loading}
                                />
                                <TextAreaField
                                    name="description"
                                    label="Description"
                                    handleChange={handleChange}
                                    value={values.description}
                                    loading={loading}
                                />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" form="modalForm" className={`d-block ms-auto ${style.btn_post}`} onClick={() => setModalShow(true)}>
                                <BsFillSendFill /> Post Announcement
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Formik>
        </Modal>
    );
}

export default ModalForm;
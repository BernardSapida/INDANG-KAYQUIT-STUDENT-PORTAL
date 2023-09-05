import axios from "axios";

import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { Dispatch, SetStateAction, useState } from "react";

import { Formik } from "formik";

import { BsFillSendFill } from 'react-icons/bs';
import { MdNotificationsActive } from 'react-icons/md';

import Ripples from 'react-ripples'

import { initialValues, validationSchema } from "@/helpers/teacher/announcements/Form";

import Field from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import Announcement from "@/components/announcements/Announcement";

import style from "@/public/css/teacher-modal.module.css";
import { Alert } from "@/utils/alert";

function ModalForm({
    modalShow,
    setModalShow,
    setCards,
    teacher
}: {
    modalShow: boolean;
    setModalShow: Dispatch<SetStateAction<boolean>>;
    setCards: Dispatch<SetStateAction<JSX.Element[]>>;
    teacher: {
        email: string,
        role: string,
        currentGradeLevel: string,
        currentSection: string,
        academicYear: string
    };
}) {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (
        values: { title: string; description: string },
        { resetForm }: { resetForm: any }
    ) => {
        try {
            setLoading(true);

            const { title, description } = values;
            const output = {
                gradeLevel: teacher.currentGradeLevel,
                section: teacher.currentSection,
                academicYear: teacher.academicYear,
                adviserEmail: teacher.email,
                title,
                description
            }

            // Save to db
            await postAnnouncement(output);

            resetForm();
            setCards((beforeCard: JSX.Element[]) => {
                return [
                    <Announcement
                        key={beforeCard.length++}
                        title={title}
                        description={description}
                        createdAt={new Date().toString()}
                    />,
                    ...beforeCard
                ]
            });

            setLoading(false);

            Alert(
                "Success!",
                "The announcement has been posted successfully",
                "success",
                "Thank you!"
            );
        } catch (error: any) {
            setLoading(false);

            const errorMessage = error.response.data.message;

            Alert(
                "Failed to post an announcement",
                errorMessage,
                "error"
            );
        }
    };

    const postAnnouncement = async (output: Record<string, any>) => {
        const response = await axios.post(
            `/api/v1/teacher/post/announcement`,
            output
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
                            <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                                <Button
                                    type="submit"
                                    form="modalForm"
                                    className={`d-block ms-auto ${style.btn_post}`}
                                    onClick={() => setModalShow(true)}
                                    disabled={loading}
                                >
                                    {
                                        loading ? (<><Spinner animation="grow" size="sm" /> Posting...</>) :
                                            (<><BsFillSendFill /> Post Announcement</>)
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
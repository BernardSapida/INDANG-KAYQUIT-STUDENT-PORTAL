import axios from "axios";

import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { Dispatch, SetStateAction, useState } from "react";

import { Formik } from "formik";

import { BsFillPeopleFill } from 'react-icons/bs';
import { MdSystemUpdateAlt } from 'react-icons/md';

import { validationSchema } from "@/helpers/teacher/students/Form";

import Ripples from 'react-ripples'

import PersonalDetails from "@/components/students/PersonalDetails";
import EnrollmentDetails from "@/components/students/EnrollmentDetails";
import ContactDetails from "@/components/students/ContactDetails";
import KayquitGoogleAccount from "@/components/students/KayquitGoogleAccount";

import style from "@/public/css/teacher-modal.module.css";
import { Student, StudentSection } from "@/types/global";
import { Alert } from "@/utils/alert";
import { fetchSectionInformation } from "@/utils/sections";
import { getGrades } from "@/utils/grades";

function ModalForm({
    modalShow,
    setModalShow,
    setStudents,
    student
}: {
    modalShow: boolean;
    setModalShow: Dispatch<SetStateAction<boolean>>;
    setStudents: Dispatch<SetStateAction<Student[]>>;
    student: Student;
}) {
    const [loading, setLoading] = useState<boolean>(false);
    console.log(student)

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

            const studentInfo: Student = {
                _id: student._id,
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

            const { data: { classes } } = await getStudentSubjects(values.email);

            // null or section id
            const oldSectionId = getCurrentSectionId(classes, values.gradeLevel);
            const newSectionInfo = await fetchSectionInformation(values.gradeLevel, values.section, values.academicYear);

            if (oldSectionId) {
                // Replace
                const newSectionId = newSectionInfo._id;
                const response = await axios.post(
                    '/api/v1/teacher/update/student-replace-section',
                    { studentId: student._id, newSectionId: newSectionId, oldSectionId: oldSectionId }
                );
            } else {
                // Push
                const grades = getGrades(newSectionInfo.subjects);
                const response = await axios.post(
                    '/api/v1/teacher/update/student-new-section',
                    {
                        studentId: student._id,
                        sectionId: newSectionInfo._id,
                        grades
                    }
                );
            }

            // Save to database
            await updateInformation(studentInfo)

            setStudents((prevStudents: Student[]) => (
                prevStudents.map((currentStudent: Student) => {
                    if (student._id == currentStudent._id) {
                        currentStudent = studentInfo;
                    }

                    return currentStudent;
                })
            ));

            setLoading(false);

            Alert(
                "Success!",
                "Student profile successfully updated",
                "success",
                "Thank you!"
            );
        } catch (error: any) {
            setLoading(false);

            const errorMessage = error.response.data.message;

            Alert(
                "Failed to update student",
                errorMessage,
                "error"
            );
        }
    };

    const getCurrentSectionId = (sections: StudentSection[], gradeLevel: string): null | string => {
        for (let entry of sections) {
            if (entry.sectionDetails.gradeLevel == gradeLevel) {
                return entry.section;
            }
        }

        return null;
    }

    const getStudentSubjects = async (email: string) => {
        const response = await axios.post(
            '/api/v1/student/post/subjects',
            { email: email }
        );

        return response.data;
    }

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
        </Modal>
    );
}

export default ModalForm;
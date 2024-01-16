import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

import { useState } from "react";

import { Formik } from "formik";

import Ripples from 'react-ripples';

import { BsFillPeopleFill, BsPersonFillAdd } from 'react-icons/bs';

import { initialValues, validationSchema } from "@/helpers/teacher/students/Form";

import ContactDetails from "@/components/students/ContactDetails";
import EnrollmentDetails from "@/components/students/EnrollmentDetails";
import KayquitGoogleAccount from "@/components/students/KayquitGoogleAccount";
import PersonalDetails from "@/components/students/PersonalDetails";

import SectionHandleSignup from '@/components/profile/SectionHandleSignup';
import style from "@/public/css/teacher-modal.module.css";
import { Student, StudentResponse } from "@/types/global";
import { Alert } from "@/utils/alert";
import { getGrades } from "@/utils/grades";
import { fetchSectionInformation } from "@/utils/sections";
import axios from "axios";
import ContactDetailsSignup from '@/components/profile/ContactDetailsSignup';

function Signup() {
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (
        values: {
            fullname: string;
            sex: string;
            birthdate: string;
            religion: string;
            gradeLevel: string;
            section: string;
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
                },
                enrollmentDetails: {
                    currentGradeLevel: values.gradeLevel,
                    currentSection: values.section,
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
                setLoading(false);

                return Alert(
                    "Cannot add new student",
                    `The student with email of <strong class="text-danger">${values.email}</strong> already exists in records.`,
                    "error"
                );
            }

            // Save to database
            const addedStudent: StudentResponse = await createStudent(studentInfo);

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
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, handleChange, values, resetForm }) => (
                <div className='my-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <BsFillPeopleFill className="mb-2" /> Teacher Sign Up
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit} id="modalForm">
                            <PersonalDetails values={values} handleChange={handleChange} loading={loading} />
                            <SectionHandleSignup values={values} handleChange={handleChange} loading={loading} />
                            <ContactDetailsSignup values={values} handleChange={handleChange} loading={loading} />
                            <KayquitGoogleAccount values={values} handleChange={handleChange} loading={loading} />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="rounded">
                            <Button
                                type="submit"
                                className={`${style.btn_post}`}
                                form="modalForm"
                                disabled={loading}
                            >
                                {
                                    loading ? (<><Spinner animation="grow" size="sm" /> Creating...</>) :
                                        (<><BsPersonFillAdd /> Create account</>)
                                }
                            </Button>
                        </Ripples>
                    </Modal.Footer>
                </div>
            )}
        </Formik>
    );
}

export default Signup;
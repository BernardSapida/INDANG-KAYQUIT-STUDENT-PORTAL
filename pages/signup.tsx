import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import { useState } from "react";

import { Formik } from "formik";

import Ripples from 'react-ripples';

import { BsFillPeopleFill, BsPersonFillAdd } from 'react-icons/bs';

import { initialValues, validationSchema } from "@/helpers/teacher/account/Form";

import KayquitGoogleAccount from "@/components/students/KayquitGoogleAccount";
import PersonalDetails from "@/components/students/PersonalDetails";

import ContactDetailsSignup from '@/components/profile/ContactDetailsSignup';
import SectionHandleSignup from '@/components/profile/SectionHandleSignup';
import style from "@/public/css/teacher-modal.module.css";
import { StudentResponse, Teacher, TeacherResponse } from "@/types/global";
import { Alert } from "@/utils/alert";
import axios from "axios";

function Signup() {
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (
        values: {
            firstname: string;
            lastname: string;
            birthdate: string;
            sex: string;
            religion: string;
            currentGradeLevel: string;
            currentSection: string;
            academicYear: string;
            address: string;
            contactNumber: string;
            email: string;
            defaultPassword: string;
        },
        { resetForm }: { resetForm: any }
    ) => {
        try {
            setLoading(true);

            const teacherInfo: Teacher = {
                personalDetails: {
                    fullname: `${values.firstname} ${values.lastname}`,
                    birthdate: values.birthdate,
                    sex: values.sex,
                    religion: values.religion,
                },
                sectionHandle: {
                    currentGradeLevel: values.currentGradeLevel,
                    currentSection: values.currentSection,
                    academicYear: values.academicYear,
                },
                contactDetails: {
                    address: values.address,
                    contactNumber: values.contactNumber,
                } as any,
                kayquitAccount: {
                    email: values.email,
                    defaultPassword: values.defaultPassword,
                    password: values.defaultPassword,
                }
            }

            const teacherAlreadyExist = await teacherExist(values.email);

            if (teacherAlreadyExist) {
                setLoading(false);

                return Alert(
                    "Cannot add new student",
                    `The teacher with email of <strong class="text-danger">${values.email}</strong> already exists.`,
                    "error"
                );
            }

            // Save to database
            await createTeacher(teacherInfo);

            setLoading(false);

            resetForm();

            Alert(
                "Success!",
                "Account successfully created",
                "success",
                "Thank you!"
            );
        } catch (error: any) {
            setLoading(false);

            const errorMessage = error.response.data.message;

            Alert(
                "Failed to create account",
                errorMessage,
                "error"
            );
        }
    };

    const teacherExist = async (email: string): Promise<TeacherResponse> => {
        const response = await axios.post(
            `/api/v1/teacher/get/profile`,
            { email }
        );

        return response.data.data;
    }

    const createTeacher = async (teacherInfo: Teacher): Promise<StudentResponse> => {
        const response = await axios.post(
            `/api/v1/teacher/post/new-account`,
            { teacherInfo }
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
                    <h3 className='mb-3'>
                        <BsFillPeopleFill className="mb-2" /> Teacher Sign Up
                    </h3>
                    <Form onSubmit={handleSubmit} id="modalForm">
                        <PersonalDetails values={values} handleChange={handleChange} loading={loading} />
                        <SectionHandleSignup values={values} handleChange={handleChange} loading={loading} />
                        <ContactDetailsSignup values={values} handleChange={handleChange} loading={loading} />
                        <KayquitGoogleAccount values={values} handleChange={handleChange} loading={loading} />
                    </Form>
                    <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="rounded bg-danger">
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
                </div>
            )}
        </Formik>
    );
}

export default Signup;
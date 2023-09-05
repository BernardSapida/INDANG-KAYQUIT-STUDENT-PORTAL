import axios from "axios";

import { useState } from "react";

import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Formik } from "formik";

import Field from "@/components/form/InputField";

import { FaExchangeAlt } from 'react-icons/fa';

import Ripples from 'react-ripples'

import { initialValues, validationSchema } from "@/helpers/password/Form";

import { User } from "@/types/global";
import { Alert } from "@/utils/alert";

import style from "@/public/css/change-password.module.css";

function ChangePassword({ user }: { user: User }) {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (
        values: { currentPassword: string; newPassword: string; confirmPassword: string },
        { resetForm }: { resetForm: any }
    ) => {
        try {
            setLoading(true);
            const { currentPassword, newPassword, confirmPassword } = values;
            const passwordResponse = await updatePassword(currentPassword, newPassword, confirmPassword, user.role);

            resetForm();
            Alert(
                "Password updated",
                "Successfully changed password",
                "success"
            );
            setLoading(false);
        } catch (error: any) {
            setLoading(false);

            const errorMessage = error.response.data.message;

            Alert(
                "Failed to reset password",
                errorMessage,
                "error"
            );
        }
    };

    const updatePassword = async (currentPassword: string, newPassword: string, confirmPassword: string, role: string) => {
        const res = await axios.post(
            `/api/v1/student/update/password`,
            {
                email: user.email,
                currentPassword: currentPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
                role: role
            }
        );

        return res
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <Form className={`${style.login_form}`} onSubmit={handleSubmit}>
                        <Field
                            type="password"
                            name="currentPassword"
                            label="Current Password"
                            handleChange={handleChange}
                            value={values.currentPassword}
                            loading={loading}
                        />
                        <Field
                            type="password"
                            name="newPassword"
                            label="New Password"
                            handleChange={handleChange}
                            value={values.newPassword}
                            loading={loading}
                        />
                        <Field
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            handleChange={handleChange}
                            value={values.confirmPassword}
                            loading={loading}
                        />
                        <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                            <Button
                                type="submit"
                                className={`d-block ms-auto ${style.submit_btn}`}
                                disabled={loading}
                            >
                                {
                                    loading ? (<><Spinner animation="grow" size="sm" /> Updating password...</>) :
                                        (<><FaExchangeAlt /> Change Password</>)
                                }

                            </Button>
                        </Ripples>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default ChangePassword;
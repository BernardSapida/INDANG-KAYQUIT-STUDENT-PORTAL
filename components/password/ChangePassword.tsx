import axios from "axios";

// Next Modules
import { useRouter } from "next/router";

// React Modules
import { useState } from "react";

// React Bootstrap Components
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Formik Modules
import { Formik } from "formik";

// Components
import Field from "@/components/form/InputField";

// React-Icons
import { FaExchangeAlt } from 'react-icons/fa';

// React-Ripples
import Ripples from 'react-ripples'

// Helpers
import { initialValues, validationSchema } from "@/helpers/teacher/password/Form";

// CSS
import style from "@/public/css/teacher-change-password.module.css";

function ChangePassword({
    user
}: {
    user: Record<string, any>
}) {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (
        values: { currentPassword: string; newPassword: string; confirmPassword: string },
        { resetForm }: { resetForm: any }
    ) => {
        setLoading(true);
        const { currentPassword, newPassword, confirmPassword } = values;

        const passwordResponse = await updatePassword(currentPassword, newPassword, confirmPassword);

        resetForm();

        setTimeout(() => setLoading(false), 2000);
    };

    const updatePassword = async (currentPassword: string, newPassword: string, confirmPassword: string) => {
        const res = await axios.post(
            `/api/v1/teacher/update/password`,
            {
                email: user.email,
                currentPassword: currentPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword
            }
        );
    }

    return (
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
                                loading ? (<><Spinner animation="grow" size="sm" /> Updating...</>) :
                                    (<><FaExchangeAlt /> Change Password</>)
                            }

                        </Button>
                    </Ripples>
                </Form>
            )}
        </Formik>
    );
}

export default ChangePassword;
// Next Modules
import { useRouter } from "next/router";

// React Modules
import { useState } from "react";

// React Bootstrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Formik Modules
import { Formik } from "formik";

// Components
import Field from "@/components/form/InputField";

// Helpers
import { initialValues, validationSchema } from "@/helpers/student/password/Form";

// Utilities
import { Alert } from "@/utils/alert/swal";

// CSS
import style from "@/public/css/student-change-password.module.css";

function ChangePassword() {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (
        values: { currentPassword: string; newPassword: string; confirmPassword: string },
        { resetForm }: { resetForm: any }
    ) => {
        setLoading(true);
        const { currentPassword, newPassword, confirmPassword } = values;
    };

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
                        value={undefined}
                        loading={loading}
                    />
                    <Field
                        type="password"
                        name="newPassword"
                        label="New Password"
                        handleChange={handleChange}
                        value={undefined}
                        loading={loading}
                    />
                    <Field
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        handleChange={handleChange}
                        value={undefined}
                        loading={loading}
                    />
                    <Button type="submit" className={`d-block ms-auto ${style.submit_btn}`}>
                        Change Password
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default ChangePassword;
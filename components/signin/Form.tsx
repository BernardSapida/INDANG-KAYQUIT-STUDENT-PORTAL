// Next
import { useRouter } from "next/router";
import Link from "next/link";

// Next-Auth
import { getSession, signIn } from "next-auth/react";

// React
import { useState, useEffect } from "react";

// Formik
import { Formik } from "formik";

// React-Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// React-Ripples
import Ripples from 'react-ripples'

// Helpers
import { initialValues, validationSchema } from "@/helpers/signin/Form";

// Components
import Field from "@/components/form/InputField";
import Error from "@/components/error/Error";

// CSS
import style from "@/public/css/button-provider.module.css";

export default function SigninForm() {
    const [showError, setShowError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        const getUserSession = async () => {
            const session = await getSession();
            return session?.user;
        };

        const checkUserRoleAndRedirect = async () => {
            const user = await getUserSession();

            if (user?.role === "teacher" && isLogin) {
                router.push("/teacher/dashboard");
            } else if (user?.role === "student" && isLogin) {
                router.push("/student/dashboard");
            } else {
                router.push("/");
            }
        };

        checkUserRoleAndRedirect();
    }, [isLogin])

    const handleSubmit = async (
        values: { email: string; password: string }
    ) => {
        setLoading(true);
        const { email, password } = values;

        const response = await signIn("credentials", {
            redirect: false,
            email: email,
            password: password,
        });

        if (response?.ok) return setIsLogin(true);

        setShowError(true);
        setError(JSON.parse(response?.error!));
        setLoading(false);
        return null;
    };

    return (
        <>
            <div className="mx-4">
                <Error errMessage={error} showError={showError} />
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <Form className={`${style.login_form}`} onSubmit={handleSubmit}>
                        <Field
                            type="text"
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            value={values.email}
                            loading={loading}
                        />
                        <Field
                            type="password"
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            value={values.password}
                            loading={loading}
                        />
                        <div className="d-flex justify-content-between mb-3">
                            <div className="w-100">
                                <Link className="text-end" href="/forgot_password">Forgot password?</Link>
                            </div>
                        </div>
                        <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                            <Button type="submit" className={`${style.signin_btn}`}>
                                Login
                            </Button>
                        </Ripples>
                    </Form>
                )}
            </Formik></>
    );
}
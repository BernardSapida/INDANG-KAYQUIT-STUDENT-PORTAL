import { useRouter } from "next/router";
import Link from "next/link";

import { getSession, signIn } from "next-auth/react";

import { useState, useEffect } from "react";

import { Formik } from "formik";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Ripples from 'react-ripples'

import { initialValues, validationSchema } from "@/helpers/signin/Form";

import Field from "@/components/form/InputField";
import Error from "@/components/alerts/error/Error";

import { Alert } from "@/utils/alert";

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
        try {
            setLoading(true);
            const { email, password } = values;

            const response = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password,
            });

            if (response?.ok) return setIsLogin(true);

            setError(JSON.parse(response?.error!));
            setShowError(true);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);

            Alert(
                "Failed to login credential",
                "Please contact the administrator",
                "error"
            );
        }
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
                            autocomplete={"username"}
                        />
                        <Field
                            type="password"
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            value={values.password}
                            loading={loading}
                            autocomplete={"current-password"}
                        />
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
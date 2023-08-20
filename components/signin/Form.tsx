// Next Auth Modules
import { getSession, signIn } from "next-auth/react";

// Next Modules
import { useRouter } from "next/router";
import Link from "next/link";

// React Modules
import { useState, useEffect } from "react";

// Formik Modules
import { Formik } from "formik";

// React Bootstrap Components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Components
import Field from "@/components/form/InputField";

// Helpers
import { initialValues, validationSchema } from "@/helpers/signin/Form";

// Utilities
import { Alert } from "@/utils/alert/swal";

// CSS
import style from "@/public/css/button-provider.module.css";

export default function SigninForm() {
    const [loading, setLoading] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const getUserSession = async () => {
            const session = await getSession();
            return session?.user;
        };

        const checkUserRoleAndRedirect = async () => {
            const user = await getUserSession();

            if (user?.role === "teacher" && isLogin) {
                console.log("Here")
                router.push("/student/dashboard");
            } else if (user?.role === "student" && isLogin) {
                router.push("/teacher/dashboard");
            } else {
                router.push("/");
            }
        };

        checkUserRoleAndRedirect();
    }, [isLogin])

    const handleSubmit = async (
        values: { email: string; password: string },
        { resetForm }: { resetForm: any }
    ) => {
        setLoading(true);
        const { email, password } = values;

        const response = await signIn("credentials", {
            redirect: false,
            email: email,
            password: password,
        });

        if (!response?.ok) {
            const error = JSON.parse(response?.error!);
            Alert("error", "Incorrect Credential", error.message);
            setLoading(false);
            return null;
        }

        setIsLogin(true);

        // if (data?.user.role == "teacher") {
        //     return router.push("/teacher/dashboard");
        // }

        // if (data?.user.role == "student") {
        //     return router.push("/student/dashboard");
        // }
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
                    <div className="d-grid gap-2">
                        <Button type="submit" className={`${style.signin_btn}`}>
                            Login
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
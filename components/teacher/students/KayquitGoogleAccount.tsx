// React Modules
import { ChangeEvent } from "react";

// Next Modules
import Link from "next/link";

// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

// Components
import Field from "@/components/form/InputField";

function KayquitGoogleAccount({
    values,
    handleChange,
    loading,
}: {
    values: Record<string, any>;
    handleChange: {
        (e: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
            ? void
            : (e: string | ChangeEvent<any>) => void;
    };
    loading: boolean;
}) {
    return (
        <div>
            <p className="fw-bold">Kayquit Google Account</p>
            <Field
                type="text"
                name="kayquitEmailAccount"
                label="Kayquit Email Account"
                handleChange={handleChange}
                value={values.kayquitAccount}
                loading={loading}
            />
            <Field
                type="password"
                name="temporaryPassword"
                label="Temporary Password"
                handleChange={handleChange}
                value={values.defaultPassword}
                loading={loading}
            />
        </div>
    );
}

export default KayquitGoogleAccount;
// React Modules
import { ChangeEvent } from "react";

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
            <p className="fw-bold">Kayquit Email Account</p>
            <Field
                type="text"
                name="email"
                label="Kayquit Email Account"
                handleChange={handleChange}
                value={values.email}
                loading={loading}
            />
            <Field
                type="password"
                name="defaultPassword"
                label="Default Password"
                handleChange={handleChange}
                value={values.defaultPassword}
                loading={loading}
            />
        </div>
    );
}

export default KayquitGoogleAccount;
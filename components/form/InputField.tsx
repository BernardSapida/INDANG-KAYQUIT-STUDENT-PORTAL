import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { ChangeEvent } from "react";

import { ErrorMessage } from "formik";

export default function Field({
    type,
    name,
    label,
    value,
    handleChange,
    loading,
    autocomplete
}: {
    type: string;
    name: string;
    label: string;
    value?: string;
    handleChange: {
        (e: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
            ? void
            : (e: string | ChangeEvent<any>) => void;
    };
    loading: boolean;
    autocomplete?: string;
}) {
    return (
        <FloatingLabel className="mb-3 w-100" label={label}>
            <Form.Control
                type={type}
                name={name}
                onChange={handleChange}
                value={value}
                placeholder={label}
                disabled={loading}
                autoComplete={autocomplete}
            />
            <ErrorMessage
                name={name}
                component="p"
                className="text-danger lh-0 my-0"
            />
        </FloatingLabel>
    );
}
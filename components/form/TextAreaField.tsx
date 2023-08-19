import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { ErrorMessage } from "formik";
import { ChangeEvent } from "react";

function TextAreaField({
    name,
    label,
    value,
    handleChange,
    loading,
}: {
    name: string;
    label: string;
    value: string | undefined;
    handleChange: {
        (e: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
            ? void
            : (e: string | ChangeEvent<any>) => void;
    };
    loading: boolean;
}) {
    return (
        <FloatingLabel className="mb-3 w-100" label={label}>
            <Form.Control
                as="textarea"
                name={name}
                onChange={handleChange}
                value={value}
                placeholder={label}
                disabled={loading}
                style={{ height: '200px' }}
            />
            <ErrorMessage
                name={name}
                component="p"
                className="text-danger lh-0 my-0"
            />
        </FloatingLabel>
    );
}

export default TextAreaField;
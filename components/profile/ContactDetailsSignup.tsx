import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { ContactDetails } from "@/types/global";
import { ChangeEvent } from 'react';
import Field from '../form/InputField';

function ContactDetailsSignup({
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
        <article>
            <p className="fw-bold">Contact Details</p>
            <Field
                type="address"
                name="address"
                label="Address"
                handleChange={handleChange}
                value={values.address}
                loading={loading}
            />
            <Field
                type="number"
                name="contactNumber"
                label="Contact Number"
                handleChange={handleChange}
                value={values.contactNumber}
                loading={loading}
            />
        </article>
    );
}

export default ContactDetailsSignup;
import { ChangeEvent } from "react";

import Field from "@/components/form/InputField";

function ContactDetails({
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
            <p className="fw-bold">Contact Details</p>
            <Field
                type="text"
                name="address"
                label="Address"
                handleChange={handleChange}
                value={values.address}
                loading={loading}
            />
            <Field
                type="text"
                name="guardian"
                label="Guardian"
                handleChange={handleChange}
                value={values.guardian}
                loading={loading}
            />
            <Field
                type="text"
                name="contactNumber"
                label="Contact Number"
                handleChange={handleChange}
                value={values.contactNumber}
                loading={loading}
            />
        </div>
    );
}

export default ContactDetails;
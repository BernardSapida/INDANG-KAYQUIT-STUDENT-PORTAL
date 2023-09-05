import { ChangeEvent } from "react";

import { ErrorMessage } from "formik";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Field from "@/components/form/InputField";

function PersonalDetails({
    values,
    handleChange,
    student,
    loading,
}: {
    values: Record<string, any>;
    handleChange: {
        (e: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
            ? void
            : (e: string | ChangeEvent<any>) => void;
    };
    student?: Record<string, any>
    loading: boolean;
}) {
    return (
        <div>
            <p className="fw-bold">Personal Details</p>
            <Row>
                <Col sm={12} md={6}>
                    <Field
                        type="text"
                        name="fullname"
                        label="Full Name"
                        handleChange={handleChange}
                        value={values.fullname}
                        loading={loading}
                    />
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Sex"}>
                        <Form.Select
                            name="sex"
                            onChange={handleChange}
                            value={values.sex}
                            disabled={loading}
                        >
                            <option value="">--- Choose sex --- </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                        <ErrorMessage
                            name="sex"
                            component="p"
                            className="text-danger"
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Field
                type="date"
                name="birthdate"
                label="Birth Date"
                handleChange={handleChange}
                value={values.birthdate}
                loading={loading}
            />
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Religion"}>
                        <Form.Select
                            name="religion"
                            onChange={handleChange}
                            value={values.religion}
                            disabled={loading}
                        >
                            <option value="">--- Choose religion ---</option>
                            <option value="Agnosticism">Agnosticism</option>
                            <option value="Atheism">Atheism</option>
                            <option value="Bahai">Bahá'í Faith</option>
                            <option value="Buddhism">Buddhism</option>
                            <option value="Christianity">Christianity</option>
                            <option value="Confucianism">Confucianism</option>
                            <option value="Hinduism">Hinduism</option>
                            <option value="Humanism">Humanism</option>
                            <option value="Indigenous">Indigenous and Tribal Religions</option>
                            <option value="Islam">Islam</option>
                            <option value="Jainism">Jainism</option>
                            <option value="Judaism">Judaism</option>
                            <option value="Newage">New Age spirituality</option>
                            <option value="Rastafarianism">Rastafarianism</option>
                            <option value="Roman_catholicism">Roman Catholicism</option>
                            <option value="Scientology">Scientology</option>
                            <option value="Shintoism">Shintoism</option>
                            <option value="Sikhism">Sikhism</option>
                            <option value="Taoism">Taoism</option>
                            <option value="Wicca">Wicca and Neopaganism</option>
                            <option value="Zoroastrianism">Zoroastrianism</option>
                        </Form.Select>
                        <ErrorMessage
                            name="religion"
                            component="p"
                            className="text-danger"
                        />
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Civil Status"}>
                        <Form.Select
                            name="civilStatus"
                            onChange={handleChange}
                            value={values.civilStatus}
                            disabled={loading}
                        >
                            <option value="">--- Choose civil status ---</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                            <option value="Separated">Separated</option>
                            <option value="Civil_union">Civil Union</option>
                        </Form.Select>
                        <ErrorMessage
                            name="civilStatus"
                            component="p"
                            className="text-danger"
                        />
                    </FloatingLabel>
                </Col>
            </Row>
        </div>
    );
}

export default PersonalDetails;
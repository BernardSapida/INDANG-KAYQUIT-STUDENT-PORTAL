// React Modules
import { ChangeEvent } from "react";

// Formik Modules
import { ErrorMessage } from "formik";

// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
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
                            <option value="male">Male</option>
                            <option value="female">Female</option>
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
                            <option value="agnosticism">Agnosticism</option>
                            <option value="atheism">Atheism</option>
                            <option value="bahai">Bahá'í Faith</option>
                            <option value="buddhism">Buddhism</option>
                            <option value="christianity">Christianity</option>
                            <option value="confucianism">Confucianism</option>
                            <option value="hinduism">Hinduism</option>
                            <option value="humanism">Humanism</option>
                            <option value="indigenous">Indigenous and Tribal Religions</option>
                            <option value="islam">Islam</option>
                            <option value="jainism">Jainism</option>
                            <option value="judaism">Judaism</option>
                            <option value="newage">New Age spirituality</option>
                            <option value="rastafarianism">Rastafarianism</option>
                            <option value="roman_catholicism">Roman Catholicism</option>
                            <option value="scientology">Scientology</option>
                            <option value="shintoism">Shintoism</option>
                            <option value="sikhism">Sikhism</option>
                            <option value="taoism">Taoism</option>
                            <option value="wicca">Wicca and Neopaganism</option>
                            <option value="zoroastrianism">Zoroastrianism</option>
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
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                            <option value="separated">Separated</option>
                            <option value="civil_union">Civil Union</option>
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
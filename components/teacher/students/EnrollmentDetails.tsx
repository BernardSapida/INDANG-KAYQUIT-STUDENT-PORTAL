// React Modules
import { ChangeEvent } from "react";

// Formik Modules
import { ErrorMessage } from "formik";

// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Utilities
import { getAcademicYear } from "@/utils/date/date";

// Components
import Field from "@/components/form/InputField";

function EnrollmentDetails({
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
            <p className="fw-bold">Enrollment Details</p>
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                        <Form.Select
                            name="gradeLevel"
                            onChange={handleChange}
                            value={values.gradeLevel}
                            disabled={loading}
                        >
                            <option value="">--- Choose grade level --- </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </Form.Select>
                        <ErrorMessage
                            name="gradeLevel"
                            component="p"
                            className="text-danger"
                        />
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Section"}>
                        <Form.Select
                            name="section"
                            onChange={handleChange}
                            value={values.section}
                            disabled={loading}
                        >
                            <option value="">--- Choose section --- </option>
                            <option value="Narra">Narra</option>
                            <option value="Akasya">Akasya</option>
                        </Form.Select>
                        <ErrorMessage
                            name="section"
                            component="p"
                            className="text-danger"
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Field
                type="text"
                name="studentLRN"
                label="Student LRN"
                handleChange={handleChange}
                value={values.studentLRN}
                loading={loading}
            />
            <Row>
                <Col sm={12} md={6}>
                    <Field
                        type="text"
                        name="studentNumber"
                        label="Student Number"
                        handleChange={handleChange}
                        value={values.studentNumber}
                        loading={loading}
                    />
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Academic Year"}>
                        <Form.Select
                            name="academicYear"
                            onChange={handleChange}
                            value={values.academicYear}
                            disabled={loading}
                        >
                            <option value="">--- Choose academic year --- </option>
                            <option value="2019-2020">2019 - 2020</option>
                            <option value="2020-2021">2020 - 2021</option>
                            <option value="2021-2022">2021 - 2022</option>
                            <option value="2022-2023">2022 - 2023</option>
                            <option value="2023-2024">2023 - 2024</option>
                        </Form.Select>
                        <ErrorMessage
                            name="academicYear"
                            component="p"
                            className="text-danger"
                        />
                    </FloatingLabel>
                </Col>
            </Row>
        </div>
    );
}

export default EnrollmentDetails;
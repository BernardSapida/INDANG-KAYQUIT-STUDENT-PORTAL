// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Utilities
import { getAcademicYear } from "@/utils/date/date";

function EnrollmentDetails() {
    return (
        <div>
            <p className="fw-bold">Enrollment Details</p>
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                        <Form.Control
                            type={"number"}
                            name={"gradeLevel"}
                            value={6}
                            placeholder={"Enter your grade level"}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Section"}>
                        <Form.Control
                            type={"text"}
                            name={"section"}
                            value={"Peace"}
                            placeholder={"Enter your section"}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <FloatingLabel className="mb-3 w-100" label={"Student LRN"}>
                <Form.Control
                    type={"text"}
                    name={"studentLRN"}
                    value={"12345678910"}
                    disabled={true}
                />
            </FloatingLabel>
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Student Number"}>
                        <Form.Control
                            type={"text"}
                            name={"studentNumber"}
                            value={"202309183"}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Academic Year"}>
                        <Form.Control
                            type={"text"}
                            name={"studentNumber"}
                            value={getAcademicYear()}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
        </div>
    );
}

export default EnrollmentDetails;
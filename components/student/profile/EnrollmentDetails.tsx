// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Utilities
import { getAcademicYear } from "@/utils/date/date";
import { EnrollmentDetails } from "@/types/global";

function EnrollmentDetails({ enrollmentDetails }: { enrollmentDetails: EnrollmentDetails }) {
    return (
        <div>
            <p className="fw-bold">Enrollment Details</p>
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                        <Form.Control
                            type={"text"}
                            name={"gradeLevel"}
                            defaultValue={enrollmentDetails?.currentGradeLevel}
                            placeholder={"Enter grade level"}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Section"}>
                        <Form.Control
                            type={"text"}
                            name={"section"}
                            defaultValue={enrollmentDetails?.currentSection}
                            placeholder={"Enter section"}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <FloatingLabel className="mb-3 w-100" label={"Student LRN"}>
                <Form.Control
                    type={"text"}
                    defaultValue={enrollmentDetails?.lrn}
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
                            defaultValue={enrollmentDetails?.studentNumber}
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
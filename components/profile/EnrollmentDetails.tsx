import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getAcademicYear } from "@/utils/date/date";

import { EnrollmentDetails } from "@/types/global";

function EnrollmentDetails({ enrollmentDetails }: { enrollmentDetails: EnrollmentDetails }) {
    return (
        <article>
            <p className="fw-bold">Enrollment Details</p>
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                        <Form.Select
                            name={"gradeLevel"}
                            defaultValue={enrollmentDetails?.currentGradeLevel}
                            disabled={true}
                        >
                            <option value="">--- Choose grade level --- </option>
                            <option value="Kinder">Kinder</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Section"}>
                        <Form.Select
                            name="section"
                            defaultValue={enrollmentDetails?.currentSection}
                            disabled={true}
                        >
                            <option value="">--- Choose section --- </option>
                            <option value="Narra">Narra</option>
                            <option value="Akasya">Akasya</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"LRN"}>
                        <Form.Control
                            type={"text"}
                            name={"lrn"}
                            defaultValue={enrollmentDetails?.lrn}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Academic Year"}>
                        <Form.Control
                            type={"text"}
                            name={"academicYear"}
                            defaultValue={getAcademicYear()}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
        </article>
    );
}

export default EnrollmentDetails;
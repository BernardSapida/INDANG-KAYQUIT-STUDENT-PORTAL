import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { PersonalDetails } from "@/types/global";

function PersonalDetails({ personalDetails }: { personalDetails: PersonalDetails }) {
    return (
        <article>
            <p className="fw-bold">Personal Details</p>
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Firstname"}>
                        <Form.Control
                            type={"text"}
                            name={"firstname"}
                            defaultValue={personalDetails?.fullname?.split(" ")[0]}
                            placeholder={"Enter firstname"}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Lastname"}>
                        <Form.Control
                            type={"text"}
                            name={"lastname"}
                            defaultValue={personalDetails?.fullname?.split(" ")[1]}
                            placeholder={"Enter lastname"}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <FloatingLabel className="mb-3 w-100" label={"Sex"}>
                <Form.Select defaultValue={personalDetails?.sex} disabled={true}>
                    <option value="">--- Choose sex ---</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Form.Select>
            </FloatingLabel>
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Birth Date"}>
                        <Form.Control
                            type={"date"}
                            name={"birthdate"}
                            defaultValue={personalDetails?.birthdate}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Religion"}>
                        <Form.Select defaultValue={personalDetails?.religion} disabled={true}>
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
                    </FloatingLabel>
                </Col>
            </Row>
        </article>
    );
}

export default PersonalDetails;
// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PersonalDetails() {
    return (
        <div>
            <p className="fw-bold">Personal Details</p>
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Full Name"}>
                        <Form.Control
                            type={"text"}
                            name={"fullname"}
                            value={"Bernard Sapida"}
                            placeholder={"Enter your fullname"}
                            disabled={true}
                        />
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Sex"}>
                        <Form.Select value="Male" disabled={true}>
                            <option value="">--- Choose sex ---</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <FloatingLabel className="mb-3 w-100" label={"Birth Date"}>
                <Form.Control
                    type={"date"}
                    name={"birthdate"}
                    value={"2002-12-17"}
                    disabled={true}
                />
            </FloatingLabel>
            <Row>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Religion"}>
                        <Form.Select value="roman_catholicism" disabled={true}>
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
                    </FloatingLabel>
                </Col>
                <Col sm={12} md={6}>
                    <FloatingLabel className="mb-3 w-100" label={"Civil Status"}>
                        <Form.Select value="single" disabled={true}>
                            <option value="">--- Choose civil status ---</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                            <option value="separated">Separated</option>
                            <option value="civil_union">Civil Union</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
        </div>
    );
}

export default PersonalDetails;
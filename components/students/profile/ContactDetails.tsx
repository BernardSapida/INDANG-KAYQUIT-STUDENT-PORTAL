// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function ContactDetails() {
    return (
        <div>
            <p className="fw-bold">Contact Details</p>
            <FloatingLabel className="mb-3 w-100" label={"Address"}>
                <Form.Control
                    type={"text"}
                    name={"gradeLevel"}
                    value={"The Istana Subdivision Malagasang 1-F, City of Imus, Cavite"}
                    placeholder={"Enter your grade level"}
                    disabled={true}
                />
            </FloatingLabel>
            <FloatingLabel className="mb-3 w-100" label={"Guardian"}>
                <Form.Control
                    type={"text"}
                    name={"guardian"}
                    value={"Shyvana R. Dragonite"}
                    placeholder={"Enter your guardian"}
                    disabled={true}
                />
            </FloatingLabel>
            <FloatingLabel className="mb-3 w-100" label={"Contact Number"}>
                <Form.Control
                    type={"text"}
                    name={"contactNumber"}
                    value={"09225319276"}
                    placeholder={"Enter your contact number"}
                    disabled={true}
                />
            </FloatingLabel>
        </div>
    );
}

export default ContactDetails;
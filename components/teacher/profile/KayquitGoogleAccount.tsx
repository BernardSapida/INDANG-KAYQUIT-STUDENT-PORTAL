// Next Modules
import Link from "next/link";

// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function KayquitGoogleAccount() {
    return (
        <div>
            <p className="fw-bold">Kayquit Google Account</p>
            <FloatingLabel className="mb-3 w-100" label={"Kayquit Email Account"}>
                <Form.Control
                    type={"text"}
                    name={"gradeLevel"}
                    value={"bernard.sapida@kayquit.edu.ph"}
                    placeholder={"Enter kayquit email account"}
                    disabled={true}
                />
            </FloatingLabel>
            <FloatingLabel className="mb-3 w-100" label={"Default Password"}>
                <Form.Control
                    type={"text"}
                    name={"defaultPassword"}
                    value={"kayquit849216"}
                    placeholder={"Enter default password"}
                    disabled={true}
                />
            </FloatingLabel>
            <p>You will have to change your password when you login for the first time. To change your password <Link href="#" style={{ color: "hsl(165, 100%, 39%)" }}>click here</Link>.</p>
        </div>
    );
}

export default KayquitGoogleAccount;
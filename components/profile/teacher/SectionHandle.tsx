// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

// Utilities
import { getAcademicYear } from "@/utils/date/date";

import { SectionHandle } from "@/types/global";

function SectionHandle({ sectionHandle }: { sectionHandle: SectionHandle }) {
    return (
        <div>
            <p className="fw-bold">Section Handle</p>
            <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                <Form.Control
                    type={"number"}
                    name={"gradeLevel"}
                    defaultValue={sectionHandle.currentGradeLevel}
                    placeholder={"Enter grade level"}
                    disabled={true}
                />
            </FloatingLabel>
            <FloatingLabel className="mb-3 w-100" label={"Section"}>
                <Form.Control
                    type={"text"}
                    name={"section"}
                    defaultValue={sectionHandle.currentSection}
                    placeholder={"Enter section"}
                    disabled={true}
                />
            </FloatingLabel>
            <FloatingLabel className="mb-3 w-100" label={"Academic Year"}>
                <Form.Control
                    type={"text"}
                    name={"academicYear"}
                    value={getAcademicYear()}
                    disabled={true}
                />
            </FloatingLabel>
        </div>
    );
}

export default SectionHandle;
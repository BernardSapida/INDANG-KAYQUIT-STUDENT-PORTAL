import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { getAcademicYear } from "@/utils/date/date";

import { SectionHandle } from "@/types/global";

function SectionHandle({ sectionHandle }: { sectionHandle: SectionHandle }) {
    return (
        <div>
            <p className="fw-bold">Section Handle</p>
            <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                <Form.Select
                    name={"gradeLevel"}
                    defaultValue={sectionHandle.currentGradeLevel}
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
            <FloatingLabel className="mb-3 w-100" label={"Section"}>
                <Form.Select
                    name="section"
                    defaultValue={sectionHandle.currentSection}
                    disabled={true}
                >
                    <option value="">--- Choose section --- </option>
                    <option value="Narra">Narra</option>
                    <option value="Akasya">Akasya</option>
                </Form.Select>
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
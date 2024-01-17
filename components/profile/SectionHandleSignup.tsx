import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { getAcademicYear } from "@/utils/date/date";

import { SectionHandle } from "@/types/global";
import { ChangeEvent } from 'react';
import Field from '../form/InputField';
import { ErrorMessage } from 'formik';

function SectionHandleSignup({
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
        <div className='mb-3'>
            <p className="fw-bold">Section Handle</p>
            <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                <Form.Select
                    name={"currentGradeLevel"}
                    onChange={handleChange}
                    value={values.currentGradeLevel}
                    disabled={loading}
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
                <ErrorMessage
                    name="currentGradeLevel"
                    component="p"
                    className="text-danger"
                />
            </FloatingLabel>
            <FloatingLabel className="mb-3 w-100" label={"Section"}>
                <Form.Select
                    name="currentSection"
                    onChange={handleChange}
                    value={values.currentSection}
                    disabled={loading}
                >
                    <option value="">--- Choose section --- </option>
                    <option value="Narra">Narra</option>
                    <option value="Akasya">Akasya</option>
                </Form.Select>
                <ErrorMessage
                    name="currentSection"
                    component="p"
                    className="text-danger"
                />
            </FloatingLabel>
            <FloatingLabel className="w-100" label={"Academic Year"}>
                <Form.Select
                    name="academicYear"
                    onChange={handleChange}
                    value={values.academicYear}
                    disabled={loading}
                >
                    <option value="">--- Choose academic year ---</option>
                    <option value="2017-2018">2017-2018</option>
                    <option value="2019-2020">2018-2019</option>
                    <option value="2019-2020">2019-2020</option>
                    <option value="2020-2021">2020-2021</option>
                    <option value="2021-2022">2021-2022</option>
                    <option value="2022-2023">2022-2023</option>
                    <option value="2023-2024">2023-2024</option>
                    <option value="2024-2025">2024-2025</option>
                </Form.Select>
                <ErrorMessage
                    name="academicYear"
                    component="p"
                    className="text-danger"
                />
            </FloatingLabel>
        </div>
    );
}

export default SectionHandleSignup;
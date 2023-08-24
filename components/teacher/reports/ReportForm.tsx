// Next Modules
import { useRouter } from "next/router";

// React Modules
import { useState } from "react";

// React Bootstrap Components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Formik Modules
import { Formik } from "formik";
import { ErrorMessage } from "formik";

// React-Icons
import { BiSolidReport } from 'react-icons/bi';

// React-Ripples
import Ripples from 'react-ripples'

// Helpers
import { initialValues, validationSchema } from "@/helpers/teacher/reports/Form";

import axios from "axios";

// Utilities
import { Alert } from "@/utils/alert/swal";

// CSS
import style from "@/public/css/teacher-report.module.css";
import { generateExcel } from "@/utils/generate/reports";

function ReportForm() {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (
        values: {
            report: string;
            gradeLevel: string;
            section: string;
            academicYear: string;
        },
        { resetForm }: { resetForm: any }
    ) => {
        // setLoading(true);
        const { report, gradeLevel, section, academicYear } = values;

        if (report === "Student List") {
            const sectionStudents = await axios.post(
                `/api/v1/teacher/get/section-students`,
                values
            );

            // console.log(sectionStudents.data)
            generateExcel(sectionStudents.data, `Student List (${gradeLevel} - ${section})`, report)
        }

        if (report === "Student Report Card") {
            const sectionStudents = await axios.post(
                `/api/v1/teacher/get/section-grades`,
                values
            );

            // console.log(sectionStudents.data)

            generateExcel(sectionStudents.data, `Student Report Card (${gradeLevel} - ${section})`, report)
        }

        // console.log(values)
        // setTimeout(() => setLoading(false), 1000);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, handleChange, values }) => (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={12} md={6}>
                            <FloatingLabel className="mb-3 w-100" label={"Report"}>
                                <Form.Select name="report" value={values.report} onChange={handleChange} disabled={loading}>
                                    <option value="">--- Choose report ---</option>
                                    <option value="Student Report Card">Student Report Card</option>
                                    <option value="Student List">Student List</option>
                                </Form.Select>
                                <ErrorMessage
                                    name={"report"}
                                    component="p"
                                    className="text-danger lh-0 my-0"
                                />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                            <FloatingLabel className="mb-3 w-100" label={"Grade Level"}>
                                <Form.Select name="gradeLevel" value={values.gradeLevel} onChange={handleChange} disabled={loading}>
                                    <option value="">--- Choose grade level ---</option>
                                    <option value="Kinder">Kinder</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </Form.Select>
                                <ErrorMessage
                                    name={"gradeLevel"}
                                    component="p"
                                    className="text-danger lh-0 my-0"
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            <FloatingLabel className="mb-3 w-100" label={"Section"}>
                                <Form.Select name="section" value={values.section} onChange={handleChange} disabled={loading}>
                                    <option value="">--- Choose section ---</option>
                                    <option value="Akasya">Akasya</option>
                                    <option value="Narra">Narra</option>
                                </Form.Select>
                                <ErrorMessage
                                    name={"section"}
                                    component="p"
                                    className="text-danger lh-0 my-0"
                                />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                            <FloatingLabel className="mb-3 w-100" label={"Academic Year"}>
                                <Form.Select name="academicYear" value={values.academicYear} onChange={handleChange} disabled={loading}>
                                    <option value="">--- Choose academic year ---</option>
                                    <option value="2017-2018">2017-2018</option>
                                    <option value="2018-2019">2018-2019</option>
                                    <option value="2019-2020">2019-2020</option>
                                    <option value="2020-2021">2020-2021</option>
                                    <option value="2021-2022">2021-2022</option>
                                    <option value="2022-2023">2022-2023</option>
                                    <option value="2023-2024">2023-2024</option>
                                </Form.Select>
                                <ErrorMessage
                                    name={"academicYear"}
                                    component="p"
                                    className="text-danger lh-0 my-0"
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                        <Button
                            type="submit"
                            className={`d-block ms-auto ${style.submit_btn}`}
                            disabled={loading}
                        >
                            {
                                loading ? (<><Spinner animation="grow" size="sm" /> Updating...</>) :
                                    (<><BiSolidReport className="mb-1" /> Generate Report</>)
                            }

                        </Button>
                    </Ripples>
                </Form>
            )}
        </Formik>
    );
}

export default ReportForm;
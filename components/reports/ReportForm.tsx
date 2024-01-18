import { useEffect, useState } from "react";

import axios from "axios";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Formik } from "formik";
import { ErrorMessage } from "formik";

import { BiSolidReport } from 'react-icons/bi';

import Ripples from 'react-ripples'

import { initialValues, validationSchema } from "@/helpers/teacher/reports/Form";

import { generateExcel } from "@/utils/generate/reports";

import { Alert } from "@/utils/alert";

import style from "@/public/css/report-form.module.css";

function ReportForm() {
    const [loading, setLoading] = useState<boolean>(false);
    const [academicYears, setAcademicYears] = useState<JSX.Element[]>([]);

    useEffect(() => {
        setAcademicYears(() => {
            const currentYear = new Date().getFullYear();
            const years: JSX.Element[] = [];

            for (let year = 2017; year <= currentYear; year++) {
                years.push(<option key={year} value={`${year}-${year + 1}`}>{`${year}-${year + 1}`}</option>)
            }

            return years;
        });
    }, [setAcademicYears])

    const handleSubmit = async (
        values: {
            report: string;
            gradeLevel: string;
            section: string;
            academicYear: string;
        },
        { resetForm }: { resetForm: any }
    ) => {
        try {
            setLoading(true);
            const { report, gradeLevel, section } = values;

            if (report === "Student List") {
                const sectionStudents = await axios.post(
                    `/api/v1/teacher/get/section-students`,
                    values
                );

                generateExcel(sectionStudents.data.data, `Student List (${gradeLevel} - ${section})`, report, values)
            } else if (report === "Student Report Card") {
                const sectionStudents = await axios.post(
                    `/api/v1/teacher/get/section-grades`,
                    values
                );

                generateExcel(sectionStudents.data.data, `Student Report Card (${gradeLevel} - ${section})`, report, values)
            }

            setLoading(false)
        } catch (error: any) {
            setLoading(false);

            const errorMessage = error.response.data.message;

            Alert(
                "Failed to generate report",
                errorMessage,
                "error"
            );
        }
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
                                    {academicYears}
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
                                loading ? (<><Spinner animation="grow" size="sm" /> Generating...</>) :
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
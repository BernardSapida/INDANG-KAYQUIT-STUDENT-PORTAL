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

// Utilities
import { Alert } from "@/utils/alert/swal";

// CSS
import style from "@/public/css/teacher-report.module.css";

function ReportForm() {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (
        values: {
            report: string;
            gradeLevel: string;
            section: string;
            academicYear: string;
            sortBy: string;
            sortOrder: string;
        },
        { resetForm }: { resetForm: any }
    ) => {
        setLoading(true);
        const { report, gradeLevel, section, academicYear, sortBy, sortOrder } = values;
        // console.log(values)
        setTimeout(() => setLoading(false), 2000);
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
                                    <option value="student report card">Student Report Card</option>
                                    <option value="student list">Student List</option>
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
                                    <option value="section a">section a</option>
                                    <option value="section b">section b</option>
                                    <option value="section c">section c</option>
                                    <option value="section d">section d</option>
                                    <option value="section e">section e</option>
                                    <option value="section f">section f</option>
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
                                    <option value="2019-2020">2019-2021</option>
                                    <option value="2020-2021">2020-2022</option>
                                    <option value="2020-2022">2020-2023</option>
                                    <option value="2020-2023">2020-2024</option>
                                </Form.Select>
                                <ErrorMessage
                                    name={"academicYear"}
                                    component="p"
                                    className="text-danger lh-0 my-0"
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            <FloatingLabel className="mb-3 w-100" label={"Sort By"}>
                                <Form.Select name="sortBy" value={values.sortBy} onChange={handleChange} disabled={loading}>
                                    <option value="">--- Choose sort by ---</option>
                                    <option value="surname">Surname</option>
                                    <option value="gwa">GWA</option>
                                </Form.Select>
                                <ErrorMessage
                                    name={"sortBy"}
                                    component="p"
                                    className="text-danger lh-0 my-0"
                                />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6}>
                            <FloatingLabel className="mb-3 w-100" label={"Sort Order"}>
                                <Form.Select name="sortOrder" value={values.sortOrder} onChange={handleChange} disabled={loading}>
                                    <option value="">--- Choose sort order ---</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </Form.Select>
                                <ErrorMessage
                                    name={"sortOrder"}
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
                                    (<><BiSolidReport className="mb-1" />Generate Report</>)
                            }

                        </Button>
                    </Ripples>
                </Form>
            )}
        </Formik>
    );
}

export default ReportForm;
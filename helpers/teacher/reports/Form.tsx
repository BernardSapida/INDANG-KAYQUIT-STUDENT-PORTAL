import * as Yup from "yup";

export const initialValues = {
    report: "Student Report Card",
    gradeLevel: "5",
    section: "Akasya",
    academicYear: "2022-2023",
};

export const validationSchema = Yup.object({
    report: Yup.string().required("Report is required"),
    gradeLevel: Yup.string().required("Grade level is required"),
    section: Yup.string().required("Section is required"),
    academicYear: Yup.string().required("Academic year is required"),
});
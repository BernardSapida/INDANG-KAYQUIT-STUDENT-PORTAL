import * as Yup from "yup";

export const initialValues = {
    report: "",
    gradeLevel: "",
    section: "",
    academicYear: "",
};

export const validationSchema = Yup.object({
    report: Yup.string().required("Report is required"),
    gradeLevel: Yup.string().required("Grade level is required"),
    section: Yup.string().required("Section is required"),
    academicYear: Yup.string().required("Academic year is required"),
});
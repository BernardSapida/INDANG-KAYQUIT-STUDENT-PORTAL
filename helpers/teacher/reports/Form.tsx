import * as Yup from "yup";

export const initialValues = {
    report: "",
    gradeLevel: "",
    section: "",
    academicYear: "",
    sortBy: "",
    sortOrder: ""
};

export const validationSchema = Yup.object({
    report: Yup.string().required("Report is required"),
    gradeLevel: Yup.string().required("Grade level is required"),
    section: Yup.string().required("Section is required"),
    academicYear: Yup.string().required("Academic year is required"),
    sortBy: Yup.string().required("Sort by is required"),
    sortOrder: Yup.string().required("Sort order is required"),
});
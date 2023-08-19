import * as Yup from "yup";

export const initialValues = {
    fullname: "",
    sex: "",
    birthdate: "",
    religion: "",
    civilStatus: "",
    gradeLevel: "",
    section: "",
    studentLRN: "",
    studentNumber: "",
    academicYear: "",
    address: "",
    contactNumber: "",
    guardian: "",
    kayquitEmailAccount: "",
    temporaryPassword: ""
};

export const validationSchema = Yup.object({
    fullname: Yup.string().required("Fullname is required"),
    sex: Yup.string().required("Sex is required"),
    birthdate: Yup.string().required("Birthdate is required"),
    religion: Yup.string().required("Religion is required"),
    civilStatus: Yup.string().required("Civil Status is required"),
    gradeLevel: Yup.string().required("Grade Level is required"),
    section: Yup.string().required("Section is required"),
    studentLRN: Yup.string().required("Student LRN is required"),
    studentNumber: Yup.string().required("Student Number is required"),
    academicYear: Yup.string().required("Academic Year is required"),
    address: Yup.string().required("Address is required"),
    contactNumber: Yup.string().required("Contact Number is required"),
    guardian: Yup.string().required("Guardian is required"),
    kayquitEmailAccount: Yup.string().required("Kayquit Email Account is required"),
    temporaryPassword: Yup.string().required("Temporary Password is required"),
});
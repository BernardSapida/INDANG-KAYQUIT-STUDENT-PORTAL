import * as Yup from "yup";

export const initialValues = {
    firstname: "",
    lastname: "",
    sex: "",
    birthdate: "",
    religion: "",
    gradeLevel: "",
    section: "",
    lrn: "",
    academicYear: "",
    address: "",
    contactNumber: "",
    guardian: "",
    email: "",
    defaultPassword: ""
};

export const validationSchema = Yup.object({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    sex: Yup.string().required("Sex is required"),
    birthdate: Yup.string().required("Birthdate is required"),
    religion: Yup.string().required("Religion is required"),
    gradeLevel: Yup.string().required("Grade Level is required"),
    section: Yup.string().required("Section is required"),
    lrn: Yup.string().required("LRN is required"),
    academicYear: Yup.string().required("Academic Year is required"),
    address: Yup.string().required("Address is required"),
    contactNumber: Yup.string().required("Contact Number is required"),
    guardian: Yup.string().required("Guardian is required"),
    email: Yup.string().required("Kayquit email account is required"),
    defaultPassword: Yup.string().required("Temporary Password is required"),
});
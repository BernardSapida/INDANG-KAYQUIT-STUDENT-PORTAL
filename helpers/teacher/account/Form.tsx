import * as Yup from "yup";

export const initialValues = {
    firstname: "",
    lastname: "",
    birthdate: "",
    sex: "",
    religion: "",
    currentGradeLevel: "",
    currentSection: "",
    academicYear: "",
    address: "",
    contactNumber: "",
    email: "",
    defaultPassword: "",
};

export const validationSchema = Yup.object({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    birthdate: Yup.string().required("Birthdate is required"),
    sex: Yup.string().required("Sex is required"),
    religion: Yup.string().required("Religion is required"),
    currentGradeLevel: Yup.string().required("Grade level handle is required"),
    currentSection: Yup.string().required("Section handle is required"),
    academicYear: Yup.string().required("Academic year is required"),
    address: Yup.string().required("Address is required"),
    contactNumber: Yup.string().required("Contact number is required"),
    email: Yup.string().email().required("Email is required"),
    defaultPassword: Yup.string().required("Password is required"),
});
import * as Yup from "yup";

export const initialValues = {
    title: "",
    description: "",
};

export const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
});
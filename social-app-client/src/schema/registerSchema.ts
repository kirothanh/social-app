import * as yup from "yup";

const registerSchema = yup.object().shape({
  fullName: yup.string().min(3, "Full name must be at least 3 characters").required("Full name is required"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default registerSchema;

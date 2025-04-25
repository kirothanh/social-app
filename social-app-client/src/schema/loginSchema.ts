import * as yup from "yup";

const loginSchema = yup
  .object({
    email: yup.string().email("Invalid email address").required("This field is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("This field is required"),
  })
  .required();

export default loginSchema;

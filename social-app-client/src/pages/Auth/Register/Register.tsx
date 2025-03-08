import {useNavigate} from "react-router-dom";
import BaseButton from "../../../components/Button";
import BaseTextInput from "../../../components/Input";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Controller, useForm} from "react-hook-form";
import authorizedAxiosInstance from "../../../config/authorizedAxios";
import {notifications} from "@mantine/notifications";

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        fullName: yup.string().required("Full name is required"),
        email: yup
          .string()
          .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email format"
          )
          .required("Email is required"),
        password: yup.string().min(6).required("Password is required"),
      })
    ),
  });

  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      const response = await authorizedAxiosInstance.post(
        `${import.meta.env.VITE_SERVER_API}/auth/register`,
        data
      );

      const {success, message} = response.data;
      if (success) {
        reset();

        notifications.show({
          title: "Register Successful",
          message: message,
          color: "teal",
          autoClose: 3000,
          position: "top-right",
        });

        navigate("/login");
      }
    } catch (error: any) {
      console.error("Error during register:", error);
      notifications.show({
        title: "Register Error",
        message: error?.response?.data?.message || "An error occurred",
        color: "red",
        autoClose: 3000,
        position: "top-right",
      });
    }
  });

  return (
    <div className="bg-gradient-to-br from-cyan-400/40 to-white h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center">Register</h2>
        <form onSubmit={handleFormSubmit} className="mt-4 space-y-4">
          <Controller
            name="fullName"
            control={control}
            render={({field}) => (
              <BaseTextInput
                {...field}
                error={errors[field.name]?.message as string}
                type="text"
                placeholder="Enter full name"
                label="Full Name"
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({field}) => (
              <BaseTextInput
                {...field}
                error={errors.email?.message}
                type="text"
                placeholder="Enter email address"
                label="Email"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({field}) => (
              <BaseTextInput
                {...field}
                error={errors.password?.message}
                type="password"
                placeholder="Enter password"
                label="Password"
              />
            )}
          />

          <BaseButton
            variant="gradient"
            gradient={{from: "violet", to: "indigo", deg: 90}}
            className="mt-4"
            fullWidth
            type="submit"
          >
            Submit
          </BaseButton>
        </form>
        <p className="mt-4! text-md!">
          You have an account?{" "}
          <span
            className="text-sky-400 font-semibold cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login Now
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

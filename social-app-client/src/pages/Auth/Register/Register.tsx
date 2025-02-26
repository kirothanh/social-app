import {useNavigate} from "react-router-dom";
import BaseButton from "../../../components/Button";
import BaseTextInput from "../../../components/Input";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Controller, useForm} from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        fullName: yup.string().required("Full name is required"),
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(6).required("Password is required"),
      })
    ),
  });

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data);
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
                type="email"
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

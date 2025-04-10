import {useNavigate} from "react-router-dom";
import BaseButton from "../../components/Button";
import BaseTextInput from "../../components/Input";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Controller, useForm} from "react-hook-form";
import { notifications } from '@mantine/notifications';
import { useDispatch } from "react-redux";
import { getUserFromLogin } from "../../store/slices/userSlice";
import { AppDispatch } from "../../store/store";
import BasePasswordInput from "../../components/PasswordInput";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();

  const {
    control,
    formState: {errors},
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(6).required("Password is required"),
      })
    ),
  });

  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      const result =  dispatch(getUserFromLogin(data))
      const { accessToken, refreshToken, success, message } = (await result).payload;
  
      if (success) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        
        notifications.show({
          title: "Login Successful",
          message: message,
          color: "teal",
          autoClose: 3000,
          position: 'top-right',
        });
  
        reset();
        navigate("/");
      } 
    } catch (error:any) {
      console.error('Error during login:', error);
      notifications.show({
        title: "Login Error",
        message:  error?.response?.data?.message || "An error occurred",
        color: "red",
        autoClose: 3000,
        position: 'top-right',
      });
    }
  });

  return (
    <div className="bg-gradient-to-br from-cyan-400/40 to-white h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center">Login</h2>
        <form className="mt-4 space-y-4" onSubmit={handleFormSubmit}>
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
              <BasePasswordInput
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
            fullWidth
            type="submit"
          >
            Submit
          </BaseButton>
        </form>
        <p className="mt-4! text-md!">
          Don't have an account?{" "}
          <span
            className="text-sky-400 font-semibold cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register Now
          </span>{" "}
        </p>
      </div>
      <div>
    </div>
    </div>
  );
}

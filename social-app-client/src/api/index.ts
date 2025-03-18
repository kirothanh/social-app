import { notifications } from "@mantine/notifications";
import authorizedAxiosInstance from "../config/authorizedAxios";

export const handleLogoutAPI = async () => {
  const res = await authorizedAxiosInstance.delete("/auth/logout");
  const { success, message, error } = res.data;

  if (success) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    notifications.show({
      title: "Logout Successful",
      message: message,
      color: "teal",
      autoClose: 3000,
      position: "top-right",
    });

    return true;
  } else {
    notifications.show({
      title: message || "Logout Error",
      message: error || "An error occurred",
      color: "red",
      autoClose: 3000,
      position: "top-right",
    });

    return false;
  }
};

export const refreshTokenAPI = async (refreshToken: string | null) => {
  return await authorizedAxiosInstance.put(`${import.meta.env.VITE_SERVER_API}/auth/refresh_token`, { refreshToken })
}
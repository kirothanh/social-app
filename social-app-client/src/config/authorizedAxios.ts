import axios from "axios";
import { handleLogoutAPI, refreshTokenAPI } from "../api";

const authorizedAxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_API}`,
  timeout: 1000 * 60 * 10,
});

let refreshTokenPromise: Promise<unknown> | null = null;

authorizedAxiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      location.href = "/login";
      return Promise.reject(new Error("No access token, redirecting to login"));
    }

    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
authorizedAxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 410 && originalRequest) {
      if (!refreshTokenPromise) {
        const refreshToken = localStorage.getItem("refreshToken");

        refreshTokenPromise = refreshTokenAPI(refreshToken)
          .then((res) => {
            // Lấy và gán lại accessToken vào localStora
            const { accessToken } = res.data.data;
            localStorage.setItem("accessToken", accessToken);
            authorizedAxiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
          })
          .catch((_error) => {
            handleLogoutAPI().then(() => {
              location.href = "/login";
            });

            return Promise.reject(_error);
          })
          .finally(() => {
            refreshTokenPromise = null;
          });
      }

      return refreshTokenPromise.then(() => {
        return authorizedAxiosInstance(originalRequest);
      });
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default authorizedAxiosInstance;

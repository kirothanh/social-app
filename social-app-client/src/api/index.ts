import authorizedAxiosInstance from "../config/authorizedAxios";

export const handleLogoutAPI = async () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')

  return await authorizedAxiosInstance.delete(`${import.meta.env.VITE_SERVER_API}/auth/logout`)
}

export const refreshTokenAPI = async (refreshToken: string | null) => {
  return await authorizedAxiosInstance.put(`${import.meta.env.VITE_SERVER_API}/auth/refresh_token`, { refreshToken })
}
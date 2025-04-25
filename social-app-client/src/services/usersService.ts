import authorizedAxiosInstance from "../config/authorizedAxios"

export const followUser = async (userId: string) => {
  const response = await authorizedAxiosInstance.post(`/users/${userId}/follow`)
  console.log(response)
}

export const getUsersNotFollow = async (userId: string) => {
  const response = await authorizedAxiosInstance.get(`/users/suggestions/${userId}`)
  console.log('res: ', response)
  return response
}
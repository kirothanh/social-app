import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authorizedAxiosInstance from "../../config/authorizedAxios";

const getUserFromLogin = createAsyncThunk(
  "user/getUserFromLogin",
  async (data: object) => {
    try {
      const res = await authorizedAxiosInstance.post("/auth/login", data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const getUserFromRegister = createAsyncThunk(
  "user/getUserFromRegister",
  async (data: object) => {
    try {
      const res = await authorizedAxiosInstance.post("/auth/register", data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export interface UserState {
  userValue: object;
}

const initialState: UserState = {
  userValue: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserFromLogin.fulfilled, (state, action) => {
      state.userValue = action.payload
    });
  }
});

export { getUserFromLogin, getUserFromRegister };

export default userSlice.reducer;

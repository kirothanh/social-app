/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authorizedAxiosInstance from "../../config/authorizedAxios";

const getUserProfile = createAsyncThunk("user/getUserProfile", async (_, { rejectWithValue }) => {
  try {
    const res = await authorizedAxiosInstance.get("/user");
    return res.data;
  } catch (error: any) {
    console.error(error);
    return rejectWithValue(
      error.response?.data?.message || "Lỗi không xác định từ server"
    );
  }
});

const getUserFromLogin = createAsyncThunk(
  "user/getUserFromLogin",
  async (data: object) => {
    try {
      const res = await authorizedAxiosInstance.post("/auth/login", data, {
        headers: {
          "x-anonymous": "true"
        }
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const getUserFromRegister = createAsyncThunk(
  "user/getUserFromRegister",
  async (data: object, { rejectWithValue }) => {
    try {
      const res = await authorizedAxiosInstance.post("/auth/register", data, {
        headers: {
          "x-anonymous": "true"
        }
      });
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response?.data || { message: "Registration failed" });
    }
  }
);

export interface User {
  _id: string;
  fullName: string;
  email: string;
}

export interface UserState {
  userValue: User,
  loading: boolean,
  error: string
}

const initialState: UserState = {
  userValue: {
    _id: "",
    fullName: "",
    email: "",
  },
  loading: true,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get user profile 
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userValue = action.payload;
        state.loading = false;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch user data";
      })
  },
});

export { getUserFromLogin, getUserFromRegister, getUserProfile };

export default userSlice.reducer;

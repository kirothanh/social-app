import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authorizedAxiosInstance from "../../config/authorizedAxios";

const getUserProfile = createAsyncThunk("user/getUserProfile", async () => {
  try {
    const res = await authorizedAxiosInstance.get("/user");
    return res.data;
  } catch (error) {
    console.error(error);
  }
});

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

export interface User {
  fullName: string;
  email: string;
}

export interface UserState {
  userValue: {
    user: User;
  };
}

const initialState: UserState = {
  userValue: {
    user: {
      fullName: "",
      email: "",
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userValue = action.payload;
      });
  },
});

export { getUserFromLogin, getUserFromRegister, getUserProfile };

export default userSlice.reducer;

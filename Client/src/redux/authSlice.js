import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialUser = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

const initialState = {
  isLoading: false,
  currentUser: initialUser,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    registerFailure: (state, action) => {
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  logoutSuccess,
  setLoading,
} = authSlice.actions;

export default authSlice.reducer;

export const register = (user) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "http://localhost:4000/auth/register",
      user,
      config
    );

    if (response) {
      dispatch(registerSuccess(response.data));
      toast.success("Register successful");
    } else {
      dispatch(registerFailure());
      toast.error("Registration failed");
    }
  } catch (error) {
    console.error(error);
    dispatch(registerFailure());
    toast.error("Registration failed");
  } finally {
    dispatch(setLoading(false));
  }
};

export const signin = (user) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userData = {
      email: user.email,
      password: user.password,
    };

    const response = await axios.post(
      "http://localhost:4000/auth/signin",
      userData
    );

    if (response) {
      localStorage.setItem("auth", JSON.stringify(response.data));
      dispatch(loginSuccess(response.data));
      toast.success("Login successful");
    } else {
      dispatch(loginFailure());
      toast.error("Login failed");
    }
  } catch (error) {
    dispatch(loginFailure());
    toast.error("Login failed");
  } finally {
    dispatch(setLoading(false));
  }
};

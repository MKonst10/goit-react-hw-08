import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post("/users/signup", formData);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      const { data } = await authInstance.post("/users/login", userData);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const { data } = await authInstance.post("/users/logout");
    clearToken();
    console.log(data);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

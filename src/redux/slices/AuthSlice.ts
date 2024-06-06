import { createSlice } from "@reduxjs/toolkit";

interface stateVariable {
  loading: boolean;
  signupData: object;
  token: string | null;
}
const initialState: stateVariable = {
  loading: false,
  signupData: {},
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
    },
    setSignUpData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
  },
});

export const { setToken, setSignUpData, setLoading } = authSlice.actions;

export default authSlice.reducer;

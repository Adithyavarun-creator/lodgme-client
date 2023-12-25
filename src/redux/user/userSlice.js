import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  bookingAmount: 0,
  selectedHouse: [],
  stayingDays: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart: (state, action) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state, action) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOutUserStart: (state, action) => {
      state.loading = true;
    },
    signOutUserSuccess: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setBookingAmount: (state, action) => {
      state.bookingAmount = action.payload;
    },
    setSelectedHouse: (state, action) => {
      state.selectedHouse = action.payload;
    },
    setStayingDays: (state, action) => {
      state.stayingDays = action.payload;
    },
  },
});

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  setBookingAmount,
  setSelectedHouse,
  setStayingDays,
} = userSlice.actions;
export default userSlice.reducer;

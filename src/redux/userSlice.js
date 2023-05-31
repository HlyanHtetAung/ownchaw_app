import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetail: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetail: (state, action) => {
      const { data } = action.payload;
      state.userDetail = data;
    },
  },
});

export const { setUserDetail } = userSlice.actions;

export default userSlice.reducer;

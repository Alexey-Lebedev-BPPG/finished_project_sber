import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
  accessToken: '',
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: state => {
      state.accessToken = '';
      state.user = undefined;
    },
    setAccessToken(state, { payload }: PayloadAction<string>) {
      state.accessToken = payload;
    },
    setUser: (state, { payload }: PayloadAction<Partial<User>>) => {
      state.user = { ...state.user, ...payload };
    },
  },
});

export const { logout, setAccessToken, setUser } = userSlice.actions;
export const { reducer: userReducer } = userSlice;

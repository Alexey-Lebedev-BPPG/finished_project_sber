import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserSchema } from '../types/userSchema';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

const initialState: UserSchema = {
	accessToken: '',
};

export const userSlice = createSlice({
	initialState,
	name: 'user',
	reducers: {
		logout: (state) => {
			state.accessToken = '';
			localStorage.removeItem(USER_LOCALSTORAGE_KEY);
			state.user = undefined;
		},
		setAccessToken(state, { payload }: PayloadAction<string>) {
			state.accessToken = payload;
			localStorage.setItem(USER_LOCALSTORAGE_KEY, payload);
		},
		setUser: (state, { payload }: PayloadAction<User>) => {
			state.user = payload;
		},
	},
});

export const { logout, setAccessToken, setUser } = userSlice.actions;
export const { reducer: userReducer } = userSlice;

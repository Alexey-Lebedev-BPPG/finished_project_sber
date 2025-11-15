import type { StateSchema } from 'app/providers/StoreProvider';

export const getUserSelector = (state: StateSchema) => state.user.user;

export const getAccessTokenSelector = (state: StateSchema) =>
	state.user.accessToken;

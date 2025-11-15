import { rtkApi } from 'shared/api/rtkApi';
import urls from 'shared/consts/urls';
import type { SignUpFormValues } from 'widgets/SignUpForm/utils/types';

type SignUpResponse = {
	user: Pick<User, 'id' | 'email'>;
	accessToken: Token['accessToken'];
};

type SignInResponse = {
	user: User;
	accessToken: Token['accessToken'];
};

export const userApi = rtkApi.injectEndpoints({
	endpoints: (builder) => ({
		signUp: builder.mutation<SignUpResponse, SignUpFormValues>({
			query: (body) => ({ url: urls.auth.register, method: 'POST', body }),
		}),
		signIn: builder.mutation<SignInResponse, SignUpFormValues>({
			query: (body) => ({ url: urls.auth.login, method: 'POST', body }),
		}),
	}),
});

export const { useSignInMutation, useSignUpMutation } = userApi;

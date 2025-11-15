import { rtkApi } from 'shared/api/rtkApi';
import urls from 'shared/consts/urls';

interface SignUpResponse {
  user: Pick<User, 'id' | 'email'>;
  accessToken: string;
}

interface SignInResponse {
  user: User;
  accessToken: string;
}

interface AuthArgsResponse {
  email: string;
  password: string;
}

export const userApi = rtkApi.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<SignUpResponse, AuthArgsResponse>({
      query: body => ({ url: urls.auth.register, method: 'POST', body }),
    }),
    signIn: builder.mutation<SignInResponse, AuthArgsResponse>({
      query: body => ({ url: urls.auth.login, method: 'POST', body }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = userApi;

import { rtkApi } from 'shared/api/rtkApi';
import urls from 'shared/consts/urls';

interface SignResponse {
  user: Pick<User, 'id' | 'email'>;
  accessToken: string;
}

interface AuthArgsResponse {
  email: string;
  password: string;
}

export const userApi = rtkApi.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<SignResponse, AuthArgsResponse>({
      query: body => ({ url: urls.auth.register, method: 'POST', body }),
    }),
    signIn: builder.mutation<SignResponse, AuthArgsResponse>({
      query: body => ({ url: urls.auth.login, method: 'POST', body }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = userApi;

import {
  createApi,
  fetchBaseQuery,
  type BaseQueryApi,
  type FetchArgs,
} from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: headers => {
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    if (token) headers.set('Authorization', token);

    return headers;
  },
});

const baseQueryInterceptor = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  const response = await baseQuery(args, api, extraOptions);
  return response;
};

export const rtkApi = createApi({
  baseQuery: baseQueryInterceptor,
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['Products'],
});

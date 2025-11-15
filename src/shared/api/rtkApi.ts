import {
  createApi,
  fetchBaseQuery,
  type BaseQueryApi,
  type FetchArgs,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: headers => {
    const allSessionStorage = sessionStorage.getItem('persist:root') || '';
    const persist = JSON.parse(allSessionStorage);
    const user = JSON.parse(persist.user);

    if (user?.accessToken) headers.set('Authorization', user.accessToken);

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

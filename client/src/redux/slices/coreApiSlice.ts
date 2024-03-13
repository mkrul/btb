import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coreApiSlice = createApi({
  reducerPath: 'coreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://${window.location.hostname}:5000/api`,
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json');
      return headers
    },
    paramsSerializer: params => {
      return Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
    }
  }),
  endpoints: () => ({}),
  tagTypes: ['User'],
});

export default coreApiSlice;
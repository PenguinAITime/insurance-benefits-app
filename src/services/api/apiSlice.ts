import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@store/store';

// For MVP, we'll use mock data
const API_BASE_URL = __DEV__ ? 'http://localhost:3000/api' : 'https://api.insurancenavigator.com';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Retrieve auth token from Redux state
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Provider', 'Benefit', 'Plan', 'User'],
  endpoints: () => ({}),
});

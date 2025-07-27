import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// For MVP, we'll use mock data
const API_BASE_URL = __DEV__ ? 'http://localhost:3000/api' : 'https://api.insurancenavigator.com';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      // Add auth token if available
      const token = 'mock-token'; // TODO: Get from secure storage
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Provider', 'Benefit', 'Plan', 'User'],
  endpoints: () => ({}),
});

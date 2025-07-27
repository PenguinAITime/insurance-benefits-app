import { apiSlice } from './apiSlice';
import type { Provider } from '../../types/provider';

interface SearchProvidersParams {
  query: string;
  location: string;
  planId: string;
  inNetworkOnly?: boolean;
  acceptingNewPatients?: boolean;
  specialty?: string;
  distance?: number;
}

interface SearchProvidersResponse {
  providers: Provider[];
  total: number;
}

// Mock data for development
const mockProviders: Provider[] = [
  {
    id: '1',
    name: 'Dr. Emily Carter, MD',
    specialty: 'Primary Care',
    address: '123 Main St, Toronto, ON',
    distance: 1.2,
    phone: '(416) 555-0123',
    isInNetwork: true,
    isAcceptingNewPatients: true,
    languages: ['English', 'French'],
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Dr. James Wilson, DDS',
    specialty: 'Dentist',
    address: '456 Oak Ave, Toronto, ON',
    distance: 2.5,
    phone: '(416) 555-0456',
    isInNetwork: true,
    isAcceptingNewPatients: false,
    languages: ['English'],
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Dr. Sarah Chen, MD',
    specialty: 'Mental Health',
    address: '789 Pine St, Toronto, ON',
    distance: 3.1,
    phone: '(416) 555-0789',
    isInNetwork: false,
    isAcceptingNewPatients: true,
    languages: ['English', 'Mandarin'],
    rating: 4.9,
  },
];

export const providersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchProviders: builder.query<SearchProvidersResponse, SearchProvidersParams>({
      query: (params) => ({
        url: '/providers/search',
        params: {
          q: params.query,
          location: params.location,
          plan_id: params.planId,
          in_network: params.inNetworkOnly,
          accepting_new: params.acceptingNewPatients,
          specialty: params.specialty,
          distance: params.distance,
        },
      }),
      providesTags: ['Provider'],
      // Mock implementation for development
      transformResponse: (response: any, _meta, arg) => {
        // In development, return mock data
        if (__DEV__) {
          let filtered = [...mockProviders];

          if (arg.inNetworkOnly) {
            filtered = filtered.filter((p) => p.isInNetwork);
          }

          if (arg.acceptingNewPatients) {
            filtered = filtered.filter((p) => p.isAcceptingNewPatients);
          }

          if (arg.specialty) {
            filtered = filtered.filter((p) =>
              p.specialty.toLowerCase().includes(arg.specialty!.toLowerCase())
            );
          }

          return {
            providers: filtered,
            total: filtered.length,
          };
        }

        return response;
      },
    }),

    getProvider: builder.query<Provider, string>({
      query: (id) => `/providers/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Provider', id }],
      // Mock implementation
      transformResponse: (response: any, _meta, arg) => {
        if (__DEV__) {
          return mockProviders.find((p) => p.id === arg) || mockProviders[0];
        }
        return response;
      },
    }),
  }),
});

export const { useSearchProvidersQuery, useLazySearchProvidersQuery, useGetProviderQuery } =
  providersApi;

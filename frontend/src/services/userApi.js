import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProtectedUser: builder.query({
      query: () => "protected/",
    }),
  }),
});

export const { useGetProtectedUserQuery } = userApi;
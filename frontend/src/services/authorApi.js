import { api } from "./api";

export const authorApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAuthors: builder.query({
            query: () => ({
                url: 'authors/',
                method: 'GET',
            }),
            providesTags: ['Authors'],
        }),
        createAuthor: builder.mutation({
            query: (author) => ({
                url: 'authors/',
                method: 'POST',
                body: author,
            }),
            invalidatesTags: ['Authors'],
        }),
        updateAuthor: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `authors/${id}/`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Authors"],
        }),
        deleteAuthor: builder.mutation({
            query: (id) => ({
                url: `authors/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Authors'],
        }),
    }),
});

export const { useGetAuthorsQuery, useCreateAuthorMutation, useUpdateAuthorMutation, useDeleteAuthorMutation } = authorApi;



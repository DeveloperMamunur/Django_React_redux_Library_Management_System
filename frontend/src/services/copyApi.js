import { api } from "./api";

export const copyApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCopies: builder.query({
            query: () => ({
                url: 'copies/',
                method: 'GET',
            }),
            providesTags: ['Copies'],
        }),
        createCopy: builder.mutation({
            query: (copy) => ({
                url: 'copies/',
                method: 'POST',
                body: copy,
            }),
            invalidatesTags: ['Copies'],
        }),
        updateCopy: builder.mutation({
            query: ({ id, data }) => ({
                url: `copies/${id}/`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Copies"],
        }),
        deleteCopy: builder.mutation({
            query: (id) => ({
                url: `copies/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Copies'],
        }),
    }),
});

export const { useGetCopiesQuery, useCreateCopyMutation, useUpdateCopyMutation, useDeleteCopyMutation } = copyApi;
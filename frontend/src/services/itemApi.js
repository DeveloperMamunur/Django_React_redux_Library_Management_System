import { api } from "./api";

export const itemApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => ({
                url: 'items/',
                method: 'GET',
            }),
            providesTags: ['Items'],
        }),
        createItem: builder.mutation({
            query: (item) => ({
                url: 'items/',
                method: 'POST',
                body: item,
            }),
            invalidatesTags: ['Items'],
        }),
        updateItem: builder.mutation({
            query: ({ id, data }) => ({
                url: `items/${id}/`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Items"],
        }),
        deleteItem: builder.mutation({
            query: (id) => ({
                url: `items/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Items'],
        }),
    })
})

export const { useGetItemsQuery, useCreateItemMutation, useUpdateItemMutation, useDeleteItemMutation } = itemApi;
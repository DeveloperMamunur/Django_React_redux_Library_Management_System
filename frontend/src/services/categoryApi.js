import { api } from "./api";

export const categoryApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => ({
                url: 'categories/',
                method: 'GET',
            }),
            providesTags: ['Categories'],
        }),
        createCategory: builder.mutation({
            query: (category) => ({
                url: 'categories/',
                method: 'POST',
                body: category,
            }),
            invalidatesTags: ['Categories'],
        }),
        updateCategory: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `categories/${id}/`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Categories"],
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `categories/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Categories'],
        }),
    }),
})

export const { useGetCategoriesQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoryApi;
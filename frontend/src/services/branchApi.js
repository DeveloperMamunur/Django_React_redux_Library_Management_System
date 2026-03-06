import { api } from "./api";

export const branchApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBranches: builder.query({
            query: () => ({
                url: 'branches/',
                method: 'GET',
            }),
            providesTags: ['Branches'],
        }),
        createBranch: builder.mutation({
            query: (branch) => ({
                url: 'branches/',
                method: 'POST',
                body: branch,
            }),
            invalidatesTags: ['Branches'],
        }),
        updateBranch: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `branches/${id}/`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Branches"],
        }),
        deleteBranch: builder.mutation({
            query: (id) => ({
                url: `branches/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Branches'],
        }),
    }),
});

export const { useGetBranchesQuery, useCreateBranchMutation, useUpdateBranchMutation, useDeleteBranchMutation} = branchApi;



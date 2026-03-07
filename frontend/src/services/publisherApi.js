import { api } from "./api";

export const publisherApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPublishers: builder.query({
            query: () => ({
                url: 'publishers/',
                method: 'GET',
            }),
            providesTags: ['Publishers'],
        }),
        createPublisher: builder.mutation({
            query: (publisher) => ({
                url: 'publishers/',
                method: 'POST',
                body: publisher,
            }),
            invalidatesTags: ['Publishers'],
        }),
        updatePublisher: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `publishers/${id}/`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Publishers"],
        }),
        deletePublisher: builder.mutation({
            query: (id) => ({
                url: `publishers/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Publishers'],
        }),
    }),
});

export const { useGetPublishersQuery, useCreatePublisherMutation, useUpdatePublisherMutation, useDeletePublisherMutation } = publisherApi;
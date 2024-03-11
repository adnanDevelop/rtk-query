import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const post = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({ query: () => "post" }), // GET DATA
    newPost: builder.mutation({
      //POST DATA
      query: (post) => ({
        url: "post",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const { useGetPostQuery , useNewPostMutation } = post;

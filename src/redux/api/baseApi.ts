import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as { auth: { token: string } }).auth?.token;
      // console.log(token)
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("X-Custom-Header", "foobar");
      return headers;
    },
  }),
  tagTypes: ["auth", "user", "category", "services", "booking", "slot", "reviews", 'earning', "notice", "messages"],
  endpoints: () => ({}),
});
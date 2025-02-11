import { TArgs } from "@/type/index.type";
import { baseApi } from "../../api/baseApi";

const usersApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        users: builder.query({
            query: (args: TArgs) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value);
                    });
                }
                return {
                    url: `users`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["user"],
        }),
        beauticians: builder.query({
            query: (args: TArgs) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value);
                    });
                }
                return {
                    url: `profiles/beauticians`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["user"],
        }),
        getUser: builder.query({
            query: (id: string) => {
                return {
                    url: `profiles/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["user"],
        }),
    }),
});

export const {
    useUsersQuery,
    useBeauticiansQuery,
    useGetUserQuery
} = usersApi;
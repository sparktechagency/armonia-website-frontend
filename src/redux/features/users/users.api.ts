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
                    url: `categories`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["auth"],
        }),
    }),
});

export const {
    useUsersQuery
} = usersApi;
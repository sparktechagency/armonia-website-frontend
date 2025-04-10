import { TArgs } from "@/type/index.type";
import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        categories: builder.query({
            query: (args: TArgs) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value);
                    });
                }
                return {
                    url: `categories?page=1&limit=100`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["category"],
        }),
      
    }),
});

export const {
    useCategoriesQuery,
} = categoryApi;
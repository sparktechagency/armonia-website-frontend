import { TArgs } from "@/type/index.type";
import { baseApi } from "../../api/baseApi";

const earningsApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        createPayment: builder.mutation({
            query: (data) => {
                return {
                    url: `payments`,
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["booking", "earning"],
        }),
        // categories: builder.query({
        //     query: (args: TArgs) => {
        //         const params = new URLSearchParams();
        //         if (args) {
        //             args.forEach((item) => {
        //                 params.append(item.name, item.value);
        //             });
        //         }
        //         return {
        //             url: `categories`,
        //             method: "GET",
        //             params,
        //         };
        //     },
        //     providesTags: ["category"],
        // }),

    }),
});

export const {
    useCreatePaymentMutation,
} = earningsApi;
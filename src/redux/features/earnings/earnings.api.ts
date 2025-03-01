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
        payments: builder.query({
            query: (args: TArgs) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value);
                    });
                }
                return {
                    url: `payments`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["earning", "booking"],
        }),
    }),
});

export const {
    useCreatePaymentMutation,
    usePaymentsQuery
} = earningsApi;
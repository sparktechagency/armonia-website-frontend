import { TArgs } from "@/type/index.type";
import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        // createBooking: builder.mutation({
        //     query: (data) => {
        //         return {
        //             url: `bookings`,
        //             method: "POST",
        //             body: data,
        //         };
        //     },
        //     invalidatesTags: ["booking", "slot"],
        // }),
        reviews: builder.query({
            query: (args: TArgs) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value);
                    });
                }
                return {
                    url: `reviews`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["reviews"],
        }),

    }),
});

export const {
   useReviewsQuery
} = reviewApi;
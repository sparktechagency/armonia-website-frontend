import { TArgs } from "@/type/index.type";
import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addReview: builder.mutation({
            query: (data) => {
                return {
                    url: `reviews`,
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["reviews",],
        }),
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
    useAddReviewMutation,
    useReviewsQuery
} = reviewApi;
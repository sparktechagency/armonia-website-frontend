import { TArgs } from "@/type/index.type";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (data) => {
                return {
                    url: `bookings`,
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["booking"],
        }),
        bookings: builder.query({
            query: (args: TArgs) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value);
                    });
                }
                return {
                    url: `bookings`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["booking"],
        }),

    }),
});

export const {
    useCreateBookingMutation,
    useBookingsQuery
} = bookingApi;
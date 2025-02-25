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
            invalidatesTags: ["booking", "slot"],
        }),
        updateBookingStatus: builder.mutation({
            query: ({
                status,
                id,
            }: {
                status: string;
                id: string;
            }) => {
                return {
                    url: `bookings/${id}`,
                    method: "PUT",
                    body: { status, bookingId: id },
                };
            },
            invalidatesTags: ["booking", "slot"],
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
        bookingById: builder.query({
            query: (id) => {
                return {
                    url: `bookings/services/${id}`,
                    method: "GET"
                };
            },
            providesTags: ["booking"],
        }),
        bookingDetailsById: builder.query({
            query: (id) => {
                return {
                    url: `bookings/${id}`,
                    method: "GET"
                };
            },
            providesTags: ["booking"],
        }),
    }),
});

export const {
    useBookingByIdQuery,
    useBookingDetailsByIdQuery,
    useCreateBookingMutation,
    useUpdateBookingStatusMutation,
    useBookingsQuery
} = bookingApi;
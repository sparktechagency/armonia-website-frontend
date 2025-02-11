import { TArgs } from "@/type/index.type";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
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
    useBookingsQuery
} = bookingApi;
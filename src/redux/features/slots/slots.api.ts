import { TArgs } from "@/type/index.type";
import { baseApi } from "../../api/baseApi";

const slotsApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        timeSlots: builder.query({
            query: (args: TArgs) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value);
                    });
                }
                return {
                    url: `time-slots`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["slot"],
        }),
        remaningSlots: builder.query({
            query: ({ args, profileId }: { args: TArgs, profileId: string }) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value);
                    });
                }
                return {
                    url: `time-slots/${profileId}/remaining`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["slot"],
        }),
    }),
});

export const {
    useTimeSlotsQuery,
    useRemaningSlotsQuery,
} = slotsApi;
import { baseApi } from "@/redux/api/baseApi";
import { TArgs } from "@/type/index.type";

const servicesApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        createService: builder.mutation({
            query: (data) => {
                return {
                    url: `services`,
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["services"],
        }),
        deleteService: builder.mutation({
            query: (id) => {
                return {
                    url: `services/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["services"],
        }),
        services: builder.query({
            query: (args: TArgs) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value);
                    });
                }
                return {
                    url: `services`,
                    method: "GET",
                    params,
                };
            },
            providesTags: ["services"],
        }),
    }),
});

export const {
    useCreateServiceMutation,
    useDeleteServiceMutation,
    useServicesQuery
} = servicesApi;
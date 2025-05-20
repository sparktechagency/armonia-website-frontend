import { TArgs } from "@/type/index.type";
import { baseApi } from "../../api/baseApi";

const settingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSetting: builder.query({
      query: (args: TArgs) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: `application`,
          method: "GET",
          params,
        };
      },
      providesTags: ["setting"],
    }),
    // updateSettings: builder.mutation({
    //   query: ({ url, body }) => ({
    //     url: url,
    //     method: "POST",
    //     body: body,
    //   }),
    //   invalidatesTags: ["setting"],
    // }),
  }),
});

export const { useGetSettingQuery } = settingApi;

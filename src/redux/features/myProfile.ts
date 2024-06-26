import { baseApi } from "../api/baseApi";
import { tagTypes } from "../tag-Types";

export const profileAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMYProfile: build.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),
    updateMYProfile: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/users/update-my-profile",
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetMYProfileQuery, useUpdateMYProfileMutation } = profileAPi;

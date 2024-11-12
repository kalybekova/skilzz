import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCourses: build.query<SKILLZ.getCoursesRes, SKILLZ.getCoursesReq>({
      query: () => ({
        url: "/courses/",
        method: "GET",
      }),
      providesTags: ["skillz"],
    }),
  }),
});

export const { useGetCoursesQuery } = api;

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

    getCoursesById: build.query<
      SKILLZ.getCoursesByIdRes,
      SKILLZ.getCoursesByIdReq
    >({
      query: (id) => ({
        url: `/courses/${id}/`,
        method: "GET",
      }),
      providesTags: ["skillz"],
    }),

    getWorkShops: build.query<SKILLZ.getWorkShopRes, SKILLZ.getWorkShopReq>({
      query: () => ({
        url: "/freeworkshops/",
        method: "GET",
      }),
      providesTags: ["skillz"],
    }),

    getArticles: build.query<SKILLZ.getArticlesRes, SKILLZ.getArticlesReq>({
      query: () => ({
        url: "/articles/",
        method: "GET",
      }),
      providesTags: ["skillz"],
    }),
  }),
});

export const { useGetCoursesQuery, useGetWorkShopsQuery, useGetArticlesQuery ,useGetCoursesByIdQuery} =
  api;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieCoreApi = createApi({
  reducerPath: "movieCoreApi",
  credentials: "include",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7103",
  }),
  endpoints: (builder) => ({
    getArtisitListInAdminPanel: builder.query({
      query: () => "Admin/Artist/Index",
    }),
    getUsersListInAdminPanel: builder.query({
      query: () => "api/Admin/User/GetUserList",
    }),
    getGenreListInAdminPanel: builder.query({
      query: () => "Admin/Genre/Index",
    }),
    getCareerListInAdminPanel: builder.query({
      query: () => "Admin/Career/Index",
    }),
    getLanguageListInAdminPanel: builder.query({
      query: () => "Admin/Language/Index",
    }),
    getCountryListInAdminPanel: builder.query({
      query: () => "Admin/Country/Index",
    }),
    getMovieListInAdminPanel: builder.query({
      query: () => "Admin/Movie/Index",
    }),
    getvillalist: builder.query({
      query: () => "/api/Admin/Villa/GetAll",
    }),

    addMovieInAdminPanel: builder.mutation({
      query: (payload) => ({
        url: "Admin/Movie/AddMovie",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: ["Post"],
    }),

    AddArtistInAdminPanel: builder.mutation({
      query: (payload) => ({
        url: "Admin/Artist/Add",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: ["Post"],
    }),
    removeUser: builder.mutation({
      query: (payload) => ({
        url: "Admin/User/Delete",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    addGenre: builder.mutation({
      query: (payload) => ({
        url: "Admin/Genre/Add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),

    registerUser: builder.mutation({
      query: (payload) => ({
        url: "api/Account/Register",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "api/Account/Login",
        credentials: "include",

        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),

    getLoginStatus: builder.query({
      query: (payload) => ({
        url: "api/Account/Login",
        credentials: "include",
        method: "GET",
      }),
      invalidatesTags: ["Get"],
    }),
    // sendEmailForForgotPassword: builder.mutation({
    //   query: (payload) => ({
    //     url: "Account/ForgotPassword",
    //     credentials: "include",
    //     method: "POST",
    //     body:payload,
    //   }),
    //   invalidatesTags: ["Get"],
    // }),
    SubmitOtpForForgotPassword: builder.mutation({
      query: (payload) => ({
        url: "api/Account/SubmitPassword",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),

    activeAccount: builder.mutation({
      query: (payload) => ({
        url: "/api/Account/ActiveAccount",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
      invalidatesTags: ["Post"],
    }),
    SendEmailForForgotPassword: builder.mutation({
      query: (payload) => ({
        url: "Account/SendForgotPassword",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    sMSPASS: builder.mutation({
      query: (payload) => ({
        url: "api/Account/ForgotPassword",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    addvilla: builder.mutation({
      query: (payload) => ({
        url: "api/Admin/Villa/Create",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: ["Post"],
    }),
    removeVilla: builder.mutation({
      query: (payload) => ({
        url: "api/Admin/Villa/Disable",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),

    // sendEmailForForgotPassword: builder.mutation({
    //   query: (email) => ({
    //     url: `Account/ForgotPassword?email=${encodeURIComponent(email)}`,
    //     credentials: "include",
    //     method: "GET",
    //   }),
    //   invalidatesTags: ["Get"],useSMSPASSMutation
    // }),
    // sendEmailForForgotPassword: builder.mutation({
    //   query: (email) => ({
    //     url: `Account/ForgotPassword?email=${encodeURIComponent(email)}`, // Pass email as a query parameter
    //     credentials: "include",
    //     method: "GET",
    //   }),
    //   invalidatesTags: ["Get"],
    // }),
  }),
});

export const {
  useRemoveVillaMutation,
  useGetvillalistQuery,
  useAddvillaMutation,
  useSMSPASSMutation,
  useSubmitOtpForForgotPasswordMutation,
  useSendEmailForForgotPasswordMutation,
  useGetLoginStatusQuery,
  useActiveAccountMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetArtisitListInAdminPanelQuery,
  useAddArtistInAdminPanelMutation,
  useGetMovieListInAdminPanelQuery,
  useAddCareerMutation,
  useGetCareerListInAdminPanelQuery,
  useGetCountryListInAdminPanelQuery,
  useGetLanguageListInAdminPanelQuery,
  useGetGenreListInAdminPanelQuery,
  useAddCountryMutation,
  useAddGenreMutation,
  useAddLanguageMutation,
  useRemoveUserMutation,
  useAddMovieInAdminPanelMutation,
  useGetUsersListInAdminPanelQuery,
  useGetMovieLikeThisQuery,
  useGetMovieImgQuery,
  useGetTopMoviesQuery,
  useGetMovieDetailsQuery,
  useGetTopMoviesByGenreQuery,
  useGetTopSeriesQuery,
} = movieCoreApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieCoreApi = createApi({
  reducerPath: "movieCoreApi",
  credentials: "include",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7175/",
  }),
  endpoints: (builder) => ({
    getArtisitListInAdminPanel: builder.query({
      query: () => "Admin/Artist/Index",
    }),
    getUsersListInAdminPanel: builder.query({
      query: () => "Admin/User/Index",
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

    addMovieInAdminPanel: builder.mutation({
      query: (payload) => ({
        url: "Admin/Movie/AddMovie",
        method: "POST",
        body: payload,
        headers: {
          'Content-Type': 'multipart/form-data'
      }
      }),
      invalidatesTags: ["Post"],
    }),
    addCareer: builder.mutation({
      query: (payload) => ({
        url: "Admin/Career/Add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    AddArtistInAdminPanel: builder.mutation({
      query: (payload) => ({
        url: "Admin/Artist/Add",
        method: "POST",
        body: payload,
        headers: {
          'Content-Type': 'multipart/form-data'
      }
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

    addCountry: builder.mutation({
      query: (payload) => ({
        url: "Admin/Country/Add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    addLanguage: builder.mutation({
      query: (payload) => ({
        url: "Admin/Language/Add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "Account/RegisterUser",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "Account/LoginUser",
        credentials: "include",

        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),

    getLoginStatus: builder.query({
      query: (payload) => ({
        url: "Account/Login",
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
        url: "Account/SubmitForgotPassword",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),

    activeAccount: builder.mutation({
      query: (payload) => ({
        url: "Account/ActiveAccount",
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
    // sendEmailForForgotPassword: builder.mutation({
    //   query: (email) => ({
    //     url: `Account/ForgotPassword?email=${encodeURIComponent(email)}`,
    //     credentials: "include",
    //     method: "GET",
    //   }),
    //   invalidatesTags: ["Get"],
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

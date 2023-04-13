// //import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const userAuthApi = createApi({
//   reducerPath: 'userAuthApi',
//   baseQuery: fetchBaseQuery({
//   }),
//   endpoints: builder => ({
//     registerUser: builder.mutation({
//       query: user => {
//         return {
//           url: 'noAuth/addUser',
//           method: 'POST',
//           body: user,
//           headers: {
//             'Content-type': 'application/json',
//           },
//         };
//       },
//     }),

//     sendOTPUser: builder.mutation({
//       query: user => {
//         return {
//           url: 'noAuth/sendOTPForLogin',
//           method: 'POST',
//           body: user,
//           headers: {
//             'Content-type': 'application/json',
//           },
//         };
//       },
//     }),

//     phoneotpverification: builder.mutation({
//       query: ({code, user_id}) => ({
//         url: `userVerification/phone/${code}/${user_id}`,
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json',
//         },
//       }),
//     }),

//     emailotpverification: builder.mutation({
//       query: ({code, user_id}) => ({
//         url: `userVerification/email/${code}/${user_id}`,
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json',
//         },
//       }),
//     }),

//     loginUser: builder.mutation({
//       query: user => {
//         return {
//           url: 'noAuth/login',
//           method: 'POST',
//           body: user,
//           headers: {
//             'Content-type': 'application/json',
//           },
//         };
//       },
//     }),

//     loginOTPVerification: builder.mutation({
//       query: user => {
//         return {
//           url: 'noAuth/loginByOTP',
//           method: 'POST',
//           body: user,
//           headers: {
//             'Content-type': 'application/json',
//           },
//         };
//       },
//     }),

//     getUserInfo: builder.query({
//       query: token => ({
//         url: 'auth/getUserInfo',
//         method: 'POST',
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       }),
//     }),

//     getUser: builder.query({
//       query: token => ({
//         url: 'getuser',
//         method: 'GET',
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       }),
//     }),
//   }),
// });

// export const {
//   useRegisterUserMutation,
//   useLoginUserMutation,
//   useSendOTPUserMutation,
//   usePhoneotpverificationMutation,
//   useEmailotpverificationMutation,
//   useLoginOTPVerificationMutation,
//   useGetUserInfoQuery,
//   useUserInfoMutation,
// } = userAuthApi;

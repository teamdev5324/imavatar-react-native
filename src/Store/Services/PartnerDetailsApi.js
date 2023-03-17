// //import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const PartnerDetailsApi = createApi({
//   reducerPath: 'PartnerDetailsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://18.234.206.45:8085/api/v1/',
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

//     getProfileData: builder.query({
//       query: token => ({
//         url: 'partner/profile',
//         method: 'GET',
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       }),
//     }),

//     updateGST: builder.mutation({
//       query: updatePostData => {
//         const {user, userLToken} = updatePostData;
//         return {
//           url: `partner/profile/draft/gst`,
//           method: 'PUT',
//           body: user,
//           headers: {
//             authorization: `Bearer ${userLToken}`,
//           },
//         };
//       },
//     }),

//     saveWhatsAppInfo: builder.mutation({
//       query: updatePostData => {
//         const {whatsappdata, userLToken} = updatePostData;
//         return {
//           url: `partner/profile/whatsappInfo`,
//           method: 'PUT',
//           body: whatsappdata,
//           headers: {
//             authorization: `Bearer ${userLToken}`,
//           },
//         };
//       },
//     }),

//     getCity: builder.mutation({
//       query: token => ({
//         url: 'city',
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
//   useGetProfileDataQuery,
//   useUpdateGSTMutation,
//   useSaveWhatsAppInfoMutation,
//   useGetCityMutation,
// } = PartnerDetailsApi;

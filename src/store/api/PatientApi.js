import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const PatientApi = createApi({
    reducerPath: "patient",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/v1",
        prepareHeaders: (headers, {getState}) => {
            const state = getState();
            const token = state.auth.user.token
            // console.log(token)
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            // console.log(headers);
            return headers;
        }
    }),
    endpoints: (builder) => {
        return {
            getPatients: builder.query({
                query: () => {
                    return {
                        url: "/patients",
                        params: {
                            "page": 1,
                            "per_page": 10
                        },
                        method: "GET"
                    }
                }
            }),
            addPatient: builder.mutation({
                query: builder.mutation({
                    query: (patient) => {
                        return {
                            url: "/patients",
                            body: {
                                "name": patient.name,
                                "gender": patient.gender,
                                "email": patient.email,
                                "phoneNumber": patient.phoneNumber,
                                "date": patient.date
                            },
                            method: "POST"
                        }
                    }
                })
            }),
            // editPatient: builder.mutation({
            //     query: (userId) => {
            //         return {
            //             url: "/patients",
            //             method: "PUT"
            //         }
            //     }
            // }),
            deletePatient: builder.mutation({
                query: (userId) => {
                    return {
                        url: "/patients"+userId,
                        method: "DELETE"
                    }
                }
            })
        }
    }
})

export const { useAddPatientMutation, useDeletePatientMutation, useGetPatientsQuery } = PatientApi;

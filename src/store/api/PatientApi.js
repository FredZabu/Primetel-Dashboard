import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PatientApi = createApi({
    reducerPath: "patient",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/v1",
    }),
    endpoints: (builder) => {
        return {
            getPatients: builder.query({
                providesTags: ["Patient"],
                query: (token) => {
                    return {
                        url: "/patients",                        
                        method: "GET",
                        headers: {
                            authorization: `${token}`,
                        },
                    }
                },
                
            }),
            addPatient: builder.mutation({
                invalidatesTags: ["Patient"],
                query: (patient) => {
                        return {
                            url: "/patients",
                            body: {
                                "first_name": patient.name,
                                "gender": patient.gender,
                                "email": patient.email,
                                "phone_number": patient.phoneNumber,
                                "date": patient.date
                            },
                            method: "POST"
                        }
                    }
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
                invalidatesTags: ["Patient"],
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

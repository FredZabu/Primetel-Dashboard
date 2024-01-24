import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const PatientApi = createApi({
    reducerPath: "patient",
    baseQuery: fetchBaseQuery({ baseUrl: "" }),
    endpoints: (builder) => {
        return {
            fetchPatients: builder.query({
                query: () => {
                    return {
                        url: "/patients",
                        method: "GET"
                    }
                }
            }),
            addPatient: builder.mutation({
                query: builder.mutation({
                    query: (values) => {
                        return {
                            url: "/patients",
                            method: "POST"
                        }
                    }
                })
            }),
            editPatient: builder.mutation({
                query: (userId) => {
                    return {
                        url: "/patients",
                        method: "PUT"
                    }
                }
            }),
            deletePatient: builder.mutation({
                query: (userId) => {
                    return {
                        url: "/patients",
                        method: "DELETE"
                    }
                }
            })
        }
    }
})

export const { useAddPatientMutation, useEditPatientMutation, useDeletePatientMutation, useFetchPatientsQuery } = PatientApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getAccessToken from "./getAccessToken.js";
const Token = getAccessToken()
export const PatientApi = createApi({
    reducerPath: "patient",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.primetel.health/api/v1",
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
                            authorization: `${Token}`,
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
            editPatient: builder.mutation({
                invalidatesTags: ["Patient"],
                query: ({ id, newData }) => {
                    console.log("MUTATION MADE")
                    console.log({id, newData})
                    return {
                        url: `/patients/${id}`,
                        body: newData,
                        method: "PUT",
                        headers: {
                            authorization: `${Token}`,
                        },                        
                    }
                }
            }),
            deletePatient: builder.mutation({
                invalidatesTags: ["Patient"],
                query: (userId) => {
                    return {
                        url: "/patients" + userId,
                        method: "DELETE"
                    }
                }
            })
        }
    }
})

export const { useAddPatientMutation, useDeletePatientMutation, useGetPatientsQuery, useEditPatientMutation } = PatientApi;

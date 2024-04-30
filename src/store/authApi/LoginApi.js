import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
    reducerPath: "login",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://20.45.130.169:3001/api/v1"
    }),
    endpoints: (builder) => {
        return {
            login: builder.mutation({
                query: (credentials) => {
                    return {
                        url: "/login",
                        body: {
                            "email": credentials.email,
                            "password": credentials.password
                        },
                        method: "POST"
                    }
                }
            })
        }
    }
})

export const { useLoginMutation } = loginApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const loginApi = createApi({
    reducerPath: "login",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/v1"
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
            }),
            register: builder.mutation({
                query: (user) => {
                    return {
                        url: "/register/" + user.role,
                        body: {
                            "email":user.email,
                            "name":user.name,
                            "password":user.password,
                            "phone_number":user.phoneNumber
                        },
                        method: "POST"
                    }
                }
            })
        }
    }
})

export const { useLoginMutation, useRegisterMutation } = loginApi;
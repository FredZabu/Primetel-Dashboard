import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const AppointmentApi = createApi({
    reducerPath: "appointment",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/appointments"
    }),
    endpoints(builder) {
        return {
            getAppointments: builder.query({
                query: () => {
                    return {
                        url: "/appointments",
                        method: "GET"
                    }
                }
            }),
            addAppointment: builder.mutation({
                query: (data)=>{
                    return {
                        url: "/appointments",
                        body: {
                            "meetingDate": data.meetingDate,
                            "meetingTime": data.meetingTime,
                            "status": data.status,
                            "notes": data.notes
                        },
                        method: "POST"
                    }
                }
            }),
            removeAppointment: builder.mutation({
                query: (userId) => {
                    return {
                        url: "/appointments" + userId,
                        method: "DELETE"
                    }
                }
            })
        }
    }
})

export const { useGetAppointments, useAddAppointment, useRemoveAppointment } = AppointmentApi;
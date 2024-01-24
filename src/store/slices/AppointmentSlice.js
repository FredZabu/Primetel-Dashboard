import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
    name: "appointment",
    initialState: {
        data: [],
        totalAppointments: 0
    },
    reducers: {
        addAppointment(state, action) {
            state.totalAppointments = state.totalAppointments+1;
            state.data.push({
                id: action.payload.id,
                Name: action.payload.Name,
                Gender: action.payload.Gender,      
                Email: action.payload.Email,
                PhoneNumber: action.payload.PhoneNumber,
                Date: action.payload.Date,
                Time: action.payload.Time,
                Status: action.payload.Status
            })
        },
        removeAppointment(state, action) {
            state.data = state.data.filter((appointment) => {
                return appointment.id != action.payload
            })
            
            
            if(state.totalAppointments >0)
            state.totalAppointments = state.totalAppointments - 1;
        },
        editAppointment(state, action) {
           state.data = state.data.map((data) => {
               if (data.id === action.payload.id) {
                   return {...data, ...action.payload.newData};
               }
               return data;
            })
        }
    }
})

export const { addAppointment, removeAppointment, editAppointment } = appointmentSlice.actions;
export const appointmentReducer  = appointmentSlice.reducer;
/* eslint-disable no-unused-vars */
import { createSlice, nanoid } from "@reduxjs/toolkit";

const patientsSlice = createSlice({
    name: 'patients',
    initialState: {
        totalPatients: 0,
        data: [{
                id: 1,
                Name: 'Fred Asiimwe',
                Gender: 'Male',      
                Email: 'fredasiimwe133@gmail.com',
                PhoneNumber: '+256781936669',
                Date: '12/2/2023',
                Notes: 'sick'
        },
        {
                id: 2,
                Name: 'Zabulon',
                Gender: 'Male',      
                Email: 'zabulonasiimwe133@gmail.com',
                PhoneNumber: '+256781936669',
                Date: '12/2/2023',
                Notes: 'sick'
            }]
    },
    reducers: {
        addPatient(state, action) {
            state.totalPatients = state.totalPatients+1;
            state.data.push({
                id: nanoid(),
                Name: action.payload.name,
                Gender: action.payload.gender,      
                Email: action.payload.email,
                PhoneNumber: action.payload.phoneNumber,
                Date: action.payload.date,
                Notes: action.payload.notes
            })
        },
        removePatient(state, action) {
            state.data = state.data.filter((patient) => {
                return patient.id != action.payload
            })
            console.log("here it is" + state.data);
            
            if(state.totalPatients >0)
            state.totalPatients = state.totalPatients - 1;
        },
        editPatient(state, action) {
           state.data = state.data.map((data) => {
               if (data.id === action.payload.id) {
                   return {...data, ...action.payload.newData};
               }
               return data;
            })
        }
    }
})

export const { addPatient, removePatient, editPatient } = patientsSlice.actions;
export const patientsReducer = patientsSlice.reducer;
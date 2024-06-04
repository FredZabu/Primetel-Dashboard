/* eslint-disable no-unused-vars */
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';

import { addPatient, editPatient, removePatient, patientsReducer } from "./slices/PatientsSlice";
import { AuthSliceReducer, getUser, setUser, logout} from "./slices/AuthSlice"
import { handleSearch, searchReducer } from "./slices/SearchSlice";
import { addAppointment, removeAppointment, editAppointment, appointmentReducer } from "./slices/AppointmentSlice";
import { PatientApi } from "./api/PatientApi";
import { AppointmentApi } from "./api/AppointmentApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginApi } from "./authApi/LoginApi";

const store = configureStore({

    reducer: {
        patients: patientsReducer,
        searchTerm: searchReducer,
        appointments: appointmentReducer,
        auth: AuthSliceReducer,
        [PatientApi.reducerPath]: PatientApi.reducer,
        [AppointmentApi.reducerPath]: AppointmentApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(loginApi.middleware).concat(PatientApi.middleware, logger).concat(AppointmentApi.middleware);
    }
})

setupListeners(store.dispatch);

export { addPatient, editPatient, removePatient, handleSearch, addAppointment, removeAppointment, editAppointment,getUser,setUser,logout, store };
 
export { useLoginMutation, useRegisterMutation } from "./authApi/LoginApi"   
export { useAddPatientMutation, useDeletePatientMutation, useGetPatientsQuery } from "./api/PatientApi";
export { useGetAppointments, useAddAppointment, useRemoveAppointment } from "./api/AppointmentApi"
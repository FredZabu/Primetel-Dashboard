import { configureStore } from "@reduxjs/toolkit";

import { addPatient, editPatient, removePatient, patientsReducer } from "./slices/PatientsSlice";
import { handleSearch, searchReducer } from "./slices/SearchSlice";
import { addAppointment, removeAppointment, editAppointment, appointmentReducer } from "./slices/AppointmentSlice";
import { PatientApi } from "./api/PatientApi";

const store = configureStore({

    reducer: {
        patients: patientsReducer,
        searchTerm: searchReducer,
        appointments: appointmentReducer,
        [PatientApi.reducerPath]: PatientApi.reducer
    }
})


export { addPatient, editPatient, removePatient, handleSearch, addAppointment, removeAppointment, editAppointment, store };
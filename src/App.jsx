import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Appointment, Drugs, ForgotPassword, Home, Laboratory, LaboratoryOrders, LaboratoryPage, Patient, Pharmacy, PharmacyOrders, PharmacyPage, Prescription, Profile, ResetPassword, GetStarted, Register, Tests, VerifyAccount,Login } from "./pages/index.js"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/index.js";
import ComponentAuth from "./pages/ComponentAuth/ComponentAuth.jsx";

function App() {
  const dispatch = useDispatch();
  const nullUser = JSON.stringify({
                    role: null,
                    token: null
                })
  const user = JSON.parse(sessionStorage.getItem("user") || nullUser)
  useEffect(() => {
    dispatch(setUser(user))
  },[]) 
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verifyaccount" element={<VerifyAccount />} />
          <Route path="/getstarted" element={<GetStarted />} />

          {/* Doctor routes */}
          <Route path="/dashboard" element={<ComponentAuth role="default"><Home /></ComponentAuth>} />
          <Route path="/appointments" element={<ComponentAuth role="provider"><Appointment /></ComponentAuth>} />
          <Route path="/patients" element={ <ComponentAuth role="provider"><Patient /></ComponentAuth>} />
          <Route path="/prescriptions" element={ <ComponentAuth role="provider"><Prescription /></ComponentAuth>} />
          <Route path="/pharmacies" element={<ComponentAuth role="provider"><Pharmacy /> </ComponentAuth>} />
          <Route path="/pharmacies/:pharmacyId" element={ <ComponentAuth role="provider"><PharmacyPage /></ComponentAuth>} />
          <Route path="/laboratories" element={ <ComponentAuth role="provider"><Laboratory /></ComponentAuth>} />
          <Route path="/laboratories/:labId" element={ <ComponentAuth role="provider"><LaboratoryPage /></ComponentAuth>} />
          <Route path="/profile" element={ <ComponentAuth role="profile"><Profile /></ComponentAuth>} />

          {/* Laboratory routes */}
          <Route path="/laboratoryOrders" element={<ComponentAuth role="laboratory"><LaboratoryOrders /></ComponentAuth>} />
          <Route path="/tests" element={<ComponentAuth role="laboratory"><Tests /></ComponentAuth>} />

          {/* Pharmacy routes */}
          <Route path="/pharmacyOrders" element={<ComponentAuth role="pharmacy"><PharmacyOrders /></ComponentAuth>} />
          <Route path="/drugs" element={<ComponentAuth role="pharmacy"><Drugs /></ComponentAuth>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
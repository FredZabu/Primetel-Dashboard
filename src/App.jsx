

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Appointment, Drugs, ForgotPassword, Home, Laboratory, LaboratoryOrders, LaboratoryPage, Patient, Pharmacy, PharmacyOrders, PharmacyPage, Prescription, Profile, ResetPassword, SignUp1, SignUp2, Tests, VerifyAccount,Login } from "./pages/index.js"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verifyaccount" element={<VerifyAccount />} />
          <Route path="/signup1" element={<SignUp1 />} />

          {/* Doctor routes */}
          <Route path="/dashboard" element={<Home />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/prescriptions" element={<Prescription />} />
          <Route path="/pharmacies" element={<Pharmacy />} />
          <Route path="/pharmacies/:pharmacyId" element={<PharmacyPage /> } />
          <Route path="/laboratories" element={<Laboratory />} />
          <Route path="/laboratories/:labId" element={<LaboratoryPage />} />
          <Route path="/profile" element={<Profile />} />

          {/* Laboratory routes */}
          <Route path="/laboratoryOrders" element={<LaboratoryOrders />} />
          <Route path="/tests" element={<Tests />} />

          {/* Pharmacy routes */}
          <Route path="/pharmacyOrders" element={<PharmacyOrders />} />
          <Route path="/drugs" element={<Drugs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
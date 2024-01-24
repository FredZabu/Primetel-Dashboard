import Login from "./pages/auth/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp2 from "./pages/auth/SignUp2";
import ResetPassword from "./pages/auth/ResetPassword";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyAccount from "./pages/auth/VerifyAccount";
import SignUp1 from "./pages/auth/SignUp1";
import Home from "./pages/doctors_dashboard/Home";
import Appointment from "./pages/doctors_dashboard/Appointment";
import Patient from "./pages/doctors_dashboard/Patient";
import Prescription from "./pages/doctors_dashboard/Prescription";
import Pharmacy from "./pages/doctors_dashboard/Pharmacy";
import Profile from "./pages/doctors_dashboard/Profile";
import Laboratory from "./pages/doctors_dashboard/Laboratory";
import LaboratoryPage from "./pages/navigation_pages/LaboratoryPage";
import PharmacyPage from "./pages/navigation_pages/PharmacyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verifyaccount" element={<VerifyAccount />} />
          <Route path="/signup1" element={<SignUp1 />} />
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/prescriptions" element={<Prescription />} />
          <Route path="/pharmacies" element={<Pharmacy />} />
          <Route path="/pharmacies/:pharmacyId" element={<PharmacyPage /> } />
          <Route path="/laboratories" element={<Laboratory />} />
          <Route path="/laboratories/:labId" element={<LaboratoryPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
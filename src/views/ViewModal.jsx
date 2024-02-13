/* eslint-disable react/prop-types */

import { AppointmentView, PrescriptionView, PatientView, OrderView} from "./index.js"
function ViewModal({ openView, setOpenView, data, funct }) {
    console.log("This the Patient ==>" + funct);
    if (funct === "Patient") {
        return <PatientView openView={openView} setOpenView={setOpenView} data={data} funct={funct} />
    } else if (funct === "Appointment") {
        return <AppointmentView openView={openView} setOpenView={setOpenView} data={data} funct={funct} />
    } else if (funct === "Prescription") {
        return <PrescriptionView openView={openView} setOpenView={setOpenView} data={data} funct={funct} />
    } else if (funct === "orders") {
        return <OrderView openView={openView} setOpenView={setOpenView} data={data} funct={funct} />
    }
    else {
        return ""
    }
  
}

export default ViewModal
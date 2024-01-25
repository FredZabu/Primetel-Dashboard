/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {AppointmentEditModal, PatientEditModal, PrescriptionEditModal } from "./index.js"

function EditModal(props) {
  const {
    openModal,
    setOpenModal,
    funct,
    data
  } = props;
    if (funct === "Patient") {
        return <PatientEditModal openModal={openModal} setOpenModal={setOpenModal} data={data} funct={funct} />
    } else if (funct === "Appointment") {
        return <AppointmentEditModal openModal={openModal} setOpenModal={setOpenModal} data={data} funct={funct} />
    } else if (funct === "Prescription") {
        return <PrescriptionEditModal openModal={openModal} setOpenModal={setOpenModal} data={data} funct={funct} />
    } else {
        return ""
    }  
}

export default EditModal
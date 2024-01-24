/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import {Modal} from "flowbite-react";
import PatientModal from "../modals/PatientModal";
import AppointmentModal2 from "../modals/AppointmentModal2";
import AppointmentModal from "../modals/AppointmentModal";
import PrescriptionModal from "../modals/PrescriptionModal";
import LaboratoryModal from "../modals/LaboratoryModal";

const CreateModal = ({ openModal, setOpenModal, funct, setTableData , tableData}) => {
  
  const props = {
    openModal,
    setOpenModal,
    funct,
    setTableData,
    tableData
  };

  const appointmentSubtitle ="Make sure the patient is added before trying to book an appointment with them";
  
  return (
    <Modal
      className={""}
      show={props.openModal === true}
      size="3xl"
      popup
      onClose={() => props.setOpenModal(false)}
    >

      <Modal.Header className="px-6 bg-extraLight border-b ">
        <h2 className="capitalize font-bold text-xl my-2">Create {funct}</h2>
        <p className="text-base font-medium text-gray-900 dark:text-white">
          {funct === "appointment" ? `${appointmentSubtitle}` : ""}
        </p>
      </Modal.Header>


      {/* modal body for create appointment */}
      {funct === "appointment" && (
        <AppointmentModal setOpenModal = {setOpenModal} setTableData = {setTableData} tableData = {tableData} />
      )}


      {/* modal body for create patient */}
      {funct === "patient" && (
        <PatientModal setOpenModal = {setOpenModal} />
      )}


      {/* modal body for create prescription */}
      {funct === "prescription" && (
        <PrescriptionModal setOpenModal ={setOpenModal} />
      )}


      {/* modal body for create labtest */}
      {funct === "lab" && (
        <LaboratoryModal setOpenModal ={setOpenModal} />
      )}

    </Modal>
  );
};

export default CreateModal;

CreateModal.propTypes = {
  openModal: PropTypes.node.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  patients: PropTypes.array.isRequired,
  setAppointments: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  funct: PropTypes.string.isRequired,
};

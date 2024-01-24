'use client';
import { useState } from 'react';
import { Button, Label, Modal, TextInput, Select, Textarea } from 'flowbite-react';
import { FaCalendarAlt, FaNotesMedical, FaUser } from 'react-icons/fa';
import PropTypes from "prop-types";

export default function NewAppointment({
  openModal,
  setOpenModal,
  patients,
  setAppointments,
  title,
  subTitle,
}) {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [status, setStatus] = useState("upcoming");
  const [notes, setNotes] = useState("");
  const props = {
    openModal,
    setOpenModal,
    patients,
    setAppointments,
    title,
    subTitle,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPatient === "" || dateTime === "" || status === "") {
      alert("Please fill in all required fields.");
      return;
    }
    const newAppointment = {
      patient: selectedPatient,
      dateTime: dateTime,
      status: status,
      notes: notes,
    };
    props.setAppointments((prevAppointments) => [
      ...prevAppointments,
      newAppointment,
    ]);
    props.setOpenModal(undefined);
  };

  return (
    <>
      {/* <Button onClick={() => props.setOpenModal('form-elements')} color="red">Create Appointment</Button>  */}
      <Modal
        className={""}
        show={props.openModal === "form-elements"}
        size="2xl"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>
          <h2>{title}</h2>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {subTitle}
          </h3>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label className='font-bold' htmlFor="patient" value="Patient" icon={<FaUser />} />
                </div>
                <Select
                  id="patient"
                  value={selectedPatient}
                  onChange={(e) => setSelectedPatient(e.target.value)}
                >
                  <option value="">Select Patient</option>
                  {props.patients.map((patient, index) => (
                    <option key={index} value={patient.name}>
                      {patient.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="dateTime"
                    value="Date/Time"
                    icon={<FaCalendarAlt />}
                  />
                </div>
                <TextInput
                  id="dateTime"
                  placeholder="DD/MM/YYYY 0000HRS"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="status" value="Status" />
                </div>
                <Select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                  <option value="missed">Missed</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="notes"
                    value="Notes"
                    icon={<FaNotesMedical />}
                  />
                </div>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Button type="submit" color="red">
                  Create Appointment
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}


NewAppointment.propTypes = {
  openModal: PropTypes.node.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  patients: PropTypes.array.isRequired,
  setAppointments: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

  
    
    
    
    
    
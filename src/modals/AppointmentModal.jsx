/* eslint-disable react/prop-types */

import {
  Button,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { FaCalendarAlt, FaNotesMedical, FaUser } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputInfoComponent from "../components/InputInfoComponent";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addAppointment } from "../store";

function AppointmentModal(props) {
 

    const { setOpenModal, setTableData, tableData } = props;
  const patients = useSelector((state) => {
    // console.log(state.patients);
    return state.patients.data;
  })

      //   Form Validation for Appointments
  const appointmentFormik = useFormik({
    initialValues: {
      Name: "",
      Date: "",
      Time: "",
      Status: "",
      Notes: "",
    },
    //validate form
    validationSchema: Yup.object({
      Name: Yup.string().required("Patient is required"),
      Date: Yup.string().required("Date is required"),
      Time: Yup.string().required("Time is required"),
      Status: Yup.string().required("Status is required"),
      Notes: Yup.string().required("Notes is required"),
    }),
    onSubmit: (values) => {

      // Patients id with which is used to get other data like Email and phoneNumber
      const patientId = values.Name;
      const userData = patients.filter((patient) => {
        return patient.id == patientId
      })

    setTableData([...tableData, { Name: userData[0].Name, Email: userData[0].Email, MeetingDate: values.Date, MeetingTime: values.Time, PhoneNumber: userData[0].PhoneNumber, Status: values.Status }])

      setOpenModal(false);
      toast.success("Appointment Added");
    },
  });


  return (
     <Modal.Body className="bg-extraLight pt-4">
          <form onSubmit={appointmentFormik.handleSubmit}>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label
                    className="font-bold"
                    htmlFor="Name"
                    value="Name"
                    icon={<FaUser />}
                  />
                  {appointmentFormik.touched.Name &&
                  appointmentFormik.errors.Name ? (
                    <InputInfoComponent
                      message={appointmentFormik.errors.Name}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Select
                  name="Name"
                  onChange={appointmentFormik.handleChange}
                  onBlur={appointmentFormik.handleBlur}
                  value={appointmentFormik.values.Name}
                >
                  <option value="">Select Patient</option>
                  {patients.map((patient, index) => (
                    <option key={index} value={patient.id} >
                      {patient.Name}    
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Date"
                    value="Date"
                    icon={<FaCalendarAlt />}
                  />
                  {appointmentFormik.touched.Date &&
                  appointmentFormik.errors.Date ? (
                    <InputInfoComponent
                      message={appointmentFormik.errors.Date}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <TextInput
                  name="Date"
                  placeholder="DD/MM/YYYY"
                  onChange={appointmentFormik.handleChange}
                  onBlur={appointmentFormik.handleBlur}
                  value={appointmentFormik.values.Date}
                  required
                />
          </div>
           <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Time"
                    value="Time"
                    icon={<FaCalendarAlt />}
                  />
                  {appointmentFormik.touched.Time &&
                  appointmentFormik.errors.Time ? (
                    <InputInfoComponent
                      message={appointmentFormik.errors.Time}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <TextInput
                  name="Time"
                  placeholder="9:10 - 9:45 AM"
                  onChange={appointmentFormik.handleChange}
                  onBlur={appointmentFormik.handleBlur}
                  value={appointmentFormik.values.Time}
                  required
                />
                </div>
                  
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Status" value="Status" />
                  {appointmentFormik.touched.Status &&
                  appointmentFormik.errors.Status ? (
                    <InputInfoComponent
                      message={appointmentFormik.errors.Status}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Select
                  name="Status"
                  onChange={appointmentFormik.handleChange}
                  onBlur={appointmentFormik.handleBlur}
                  value={appointmentFormik.values.Status}
                >
                  <option value="">Select Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                  <option value="missed">Missed</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Notes"
                    value="Notes"
                    icon={<FaNotesMedical />}
                  />
                  {appointmentFormik.touched.Notes &&
                  appointmentFormik.errors.Notes ? (
                    <InputInfoComponent
                      message={appointmentFormik.errors.Notes}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Textarea
                  name="Notes"
                  onChange={appointmentFormik.handleChange}
                  onBlur={appointmentFormik.handleBlur}
                  value={appointmentFormik.values.Notes}
                />
              </div>
              <div className="w-full">
                <Button
                  className="bg-primary border border-primary mx-auto hover:bg-white hover:text-primary text-white"
                  type="submit"
                  color="red"
                >
                  Create Appointment
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
  )
}

export default AppointmentModal
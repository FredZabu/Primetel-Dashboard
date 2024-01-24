/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { addPatient } from "../store/slices/PatientsSlice";
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

import React from 'react'

function PatientModal(props) {
  const dispatch = useDispatch();
  const { setOpenModal } = props;
  const patientFormik = useFormik({
    initialValues: {
      name: "",
      gender: "",      
      email: "",
      phoneNumber: "",
      date:"",
      notes: "",
    },
    //validate form
    validationSchema: Yup.object({
        name: Yup.string().required("Name is required"),
        gender: Yup.string().required("Gender is required"),
        email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is required"),
        phoneNumber: Yup.string().required("Phone Number is required"),
        date: Yup.string().required("Date is required"),
        notes: Yup.string().required("Notes is required"),
    }),
    onSubmit: (values) => {
      console.log("Below it is");
      console.log(values);
      dispatch(addPatient(values));
      setOpenModal(false);
      toast.success("Patient Added");
    },
  });

    return      <Modal.Body className="bg-extraLight pt-4">
          <form onSubmit={patientFormik.handleSubmit}>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label className="" htmlFor="name" value="Name" />
                  {patientFormik.touched.name && patientFormik.errors.name ? (
                    <InputInfoComponent
                      message={patientFormik.errors.name}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <TextInput
                  name="name"
                  placeholder="Name"
                  onChange={patientFormik.handleChange}
                  onBlur={patientFormik.handleBlur}
                  value={patientFormik.values.name}
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="w-1/2">
                  <div className="mb-2 ">
                    <Label htmlFor="phoneNumber" value="Phone Number" />
                    {patientFormik.touched.phoneNumber &&
                    patientFormik.errors.phoneNumber ? (
                      <InputInfoComponent
                        message={patientFormik.errors.phoneNumber}
                        type="error"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <TextInput
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={patientFormik.handleChange}
                    onBlur={patientFormik.handleBlur}
                    value={patientFormik.values.phoneNumber}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 w-1/2">
                    <Label
                      htmlFor="gender"
                      value="Gender"
                      icon={<FaCalendarAlt />}
                    />
                    {patientFormik.touched.gender &&
                    patientFormik.errors.gender ? (
                      <InputInfoComponent
                        message={patientFormik.errors.gender}
                        type="error"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <Select
                    name="gender"
                    onChange={patientFormik.handleChange}
                    onBlur={patientFormik.handleBlur}
                    value={patientFormik.values.gender}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Select>
                </div>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                  {patientFormik.touched.email && patientFormik.errors.email ? (
                    <InputInfoComponent
                      message={patientFormik.errors.email}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <TextInput
                  name="email"
                  placeholder="Email"
                  onChange={patientFormik.handleChange}
                  onBlur={patientFormik.handleBlur}
                  value={patientFormik.values.email}
                />
                </div>
                <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="date"
                    value="Date"
                    icon={<FaCalendarAlt />}
                  />
                  {patientFormik.touched.date &&
                  patientFormik.errors.date ? (
                    <InputInfoComponent
                      message={patientFormik.errors.date}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <TextInput
                  name="date"
                  placeholder="DD/MM/YYYY"
                  onChange={patientFormik.handleChange}
                  onBlur={patientFormik.handleBlur}
                  value={patientFormik.values.date}
                  required
                />
                </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="notes"
                    value="Notes"
                    icon={<FaNotesMedical />}
                  />
                  {patientFormik.touched.notes && patientFormik.errors.notes ? (
                    <InputInfoComponent
                      message={patientFormik.errors.notes}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Textarea
                  name="notes"
                  onChange={patientFormik.handleChange}
                  onBlur={patientFormik.handleBlur}
                  value={patientFormik.values.notes}
                />
              </div>
              <div className="w-full">
                <Button
                  className="bg-primary border border-primary mx-auto hover:bg-white hover:text-primary text-white"
                  type="submit"
              color="red"
              
                >
                  Create Patient
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
}

export default PatientModal
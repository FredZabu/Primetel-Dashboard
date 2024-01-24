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
import { editPatient } from '../store/index.js';

import React from 'react'

function EditModal(props) {
  const {
    openModal,
    setOpenModal,
    funct,
    data
  } = props;

  const dispatch = useDispatch();

  const patientFormik = useFormik({
    initialValues: {
      Name: data.Name,
      Gender: data.Gender,      
      Email: data.Email,
      PhoneNumber: data.PhoneNumber,
      Date: data.Date,
      Notes: data.Notes,
    },
    //validate form
    validationSchema: Yup.object({
        Name: Yup.string().required("Name is required"),
        Gender: Yup.string().required("Gender is required"),
        Email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is required"),
        PhoneNumber: Yup.string().required("Phone Number is required"),
        Date: Yup.string().required("Date is required"),
        Notes: Yup.string().required("Notes is required"),
    }),
    onSubmit: (values) => {
      console.log("Patient Value", values.name);
      dispatch(editPatient({id: data.id, newData: values}));
      setOpenModal(false);
      toast.success("Patient Edited");
    },
  });

    return (
        <Modal
      className={""}
      show={openModal === true}
      size="3xl"
      popup
            onClose={() => setOpenModal(false)}>
            
            <Modal.Header className="px-6 bg-extraLight border-b ">
        <h2 className="capitalize font-bold text-xl my-2">Edit {funct}</h2>
        
      </Modal.Header>
            
<Modal.Body className="bg-extraLight pt-4">
          <form onSubmit={patientFormik.handleSubmit}>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label className="" htmlFor="name" value="Name" />
                  {patientFormik.touched.Name && patientFormik.errors.Name ? (
                    <InputInfoComponent
                      message={patientFormik.errors.Name}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <TextInput
                  name="Name"
                  placeholder="Name"
                  onChange={patientFormik.handleChange}
                  onBlur={patientFormik.handleBlur}
                  value={patientFormik.values.Name}
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="w-1/2">
                  <div className="mb-2 ">
                    <Label htmlFor="phoneNumber" value="Phone Number" />
                    {patientFormik.touched.PhoneNumber &&
                    patientFormik.errors.PhoneNumber ? (
                      <InputInfoComponent
                        message={patientFormik.errors.PhoneNumber}
                        type="error"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <TextInput
                    name="PhoneNumber"
                    placeholder="Phone Number"
                    onChange={patientFormik.handleChange}
                    onBlur={patientFormik.handleBlur}
                    value={patientFormik.values.PhoneNumber}
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
                    {patientFormik.touched.Gender &&
                    patientFormik.errors.Gender ? (
                      <InputInfoComponent
                        message={patientFormik.errors.Gender}
                        type="error"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <Select
                    name="Gender"
                    onChange={patientFormik.handleChange}
                    onBlur={patientFormik.handleBlur}
                    value={patientFormik.values.Gender}
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
                  {patientFormik.touched.Email && patientFormik.errors.Email ? (
                    <InputInfoComponent
                      message={patientFormik.errors.Email}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <TextInput
                  name="Email"
                  placeholder="Email"
                  onChange={patientFormik.handleChange}
                  onBlur={patientFormik.handleBlur}
                  value={patientFormik.values.Email}
                />
                </div>
                <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="date"
                    value="Date"
                    icon={<FaCalendarAlt />}
                  />
                  {patientFormik.touched.Date &&
                  patientFormik.errors.Date ? (
                    <InputInfoComponent
                      message={patientFormik.errors.Date}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <TextInput
                  name="Date"
                  placeholder="DD/MM/YYYY"
                  onChange={patientFormik.handleChange}
                  onBlur={patientFormik.handleBlur}
                  value={patientFormik.values.Date}
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
                  {patientFormik.touched.Notes && patientFormik.errors.Notes ? (
                    <InputInfoComponent
                      message={patientFormik.errors.Notes}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Textarea
                  name="Notes"
                  onChange={patientFormik.handleChange}
                  onBlur={patientFormik.handleBlur}
                  value={patientFormik.values.Notes}
                />
              </div>
              <div className="w-full">
                <Button
                  className="bg-primary border border-primary mx-auto hover:bg-white hover:text-primary text-white"
                  type="submit"
                  color="red"
                >
                  Edit Patient
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>


        </Modal>
    )
    
    
    
}

export default EditModal
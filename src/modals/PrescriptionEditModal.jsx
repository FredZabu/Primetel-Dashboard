/* eslint-disable no-unused-vars */
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


function PrescriptionEditModal(props) {
    const { setOpenModal } = props;

    const pharmacies = ["ABC Pharmacy", "XYZ Pharmacy", "horebu Pharmacy"]
    const drugs = ["ABC", "XYZ", "horebu"]

    const patients = [
    {
      id: 1,
      name: "John Doe",
      email: "johnde@gmail.com",
      phone: "0123456789",
      address: "123, Lorem Street, Ipsum, State, Country",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@yahoo.com",
      phone: "0123456789",
      address: "123, Lorem Street, Ipsum, State, Country",
    },
  ];

    const prescriptionFormik = useFormik({
    initialValues: {
      patient: "",
      pharmacy: "",
      drug: "",
      instruction: "",
    },
    //validate form
    validationSchema: Yup.object({
      patient: Yup.string().required("Patient is required"),
      pharmacy: Yup.string().required("Pharmacy is required"),
      drug: Yup.string().required("Drug is required"),
      instruction: Yup.string().required("Instructions required"),
    }),
    onSubmit: (values) => {
      console.log("Prescription Value", values);
      setOpenModal(false);
      toast.success("Prescription Added");
    },
  });

  return (
    <Modal.Body className="bg-extraLight pt-4">
          <form onSubmit={prescriptionFormik.handleSubmit}>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label
                    className="font-bold"
                    htmlFor="patient"
                    value="Patient"
                    icon={<FaUser />}
                  />
                  {prescriptionFormik.touched.patient &&
                  prescriptionFormik.errors.patient ? (
                    <InputInfoComponent
                      message={prescriptionFormik.errors.patient}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Select
                  name="patient"
                  onChange={prescriptionFormik.handleChange}
                  onBlur={prescriptionFormik.handleBlur}
                  value={prescriptionFormik.values.patient}
                >
                  <option value="">Select Patient</option>
                  {patients.map((patient, index) => (
                    <option key={index} value={patient.name}>
                      {patient.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="w-1/2">
                  <div className="mb-2 ">
                    <Label htmlFor="pharmacy" value="Select Pharmacy" />
                    {prescriptionFormik.touched.pharmacy &&
                    prescriptionFormik.errors.pharmacy ? (
                      <InputInfoComponent
                        message={prescriptionFormik.errors.pharmacy}
                        type="error"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <Select
                    name="pharmacy"
                    onChange={prescriptionFormik.handleChange}
                    onBlur={prescriptionFormik.handleBlur}
                    value={prescriptionFormik.values.pharmacy}
                  >
                    <option value="">Select Pharmacy</option>
                    {pharmacies.map((pharm, index) => (
                      <option key={index} value={pharm}>
                        {pharm}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 w-1/2">
                    <Label
                      htmlFor="drug"
                      value="Drug"
                      icon={<FaCalendarAlt />}
                    />
                    {prescriptionFormik.touched.drug &&
                    prescriptionFormik.errors.drug ? (
                      <InputInfoComponent
                        message={prescriptionFormik.errors.drug}
                        type="error"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <Select
                    name="drug"
                    onChange={prescriptionFormik.handleChange}
                    onBlur={prescriptionFormik.handleBlur}
                    value={prescriptionFormik.values.drug}
                  >
                    <option value="">Select Drug</option>
                    {drugs.map((drug, index) => (
                      <option key={index} value={drug}>
                        {drug}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="instruction"
                    value="Instructions"
                    icon={<FaNotesMedical />}
                  />
                  {prescriptionFormik.touched.instruction &&
                  prescriptionFormik.errors.instruction ? (
                    <InputInfoComponent
                      message={prescriptionFormik.errors.instruction}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Textarea
                  name="instruction"
                  onChange={prescriptionFormik.handleChange}
                  onBlur={prescriptionFormik.handleBlur}
                  value={prescriptionFormik.values.instruction}
                />
              </div>
              <div className="w-full">
                <Button
                  className="bg-primary border border-primary mx-auto hover:bg-white hover:text-primary text-white"
                  type="submit"
                  color="red"
                >
                  Create Prescription
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
  )
}

export default PrescriptionEditModal
/* eslint-disable react/prop-types */
import {
  Button,
  Label,
  Modal,
  Select,
  Textarea,
} from "flowbite-react";
import {  FaNotesMedical } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputInfoComponent from "../components/InputInfoComponent";
import { toast } from "react-hot-toast";

function LaboratoryModal(props) {
    const { setOpenModal } = props;

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
  
    const labs = ["ABC Lab", "XYZ Lab", "horebu Lab"];
    const tests = ["ABC", "XYZ", "horebu"]

    const labFormik = useFormik({
    initialValues: {
      patient: "",
      lab: "",
      test: "",
      instruction: "",
    },
    //validate form
    validationSchema: Yup.object({
      patient: Yup.string().required("Patient is required"),
      lab: Yup.string().required("Lab is required"),
      test: Yup.string().required("Test is required"),
      instruction: Yup.string().required("Instructions required"),
    }),
    onSubmit: (values) => {
      console.log("Test Value", values);
      setOpenModal(false);
      toast.success("Test Added");
    },
  });
  return (
   <Modal.Body className="bg-extraLight pt-4">
          <form onSubmit={labFormik.handleSubmit}>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label
                    className="font-bold"
                    htmlFor="patient"
                    value="Patient"
                  />
                  {labFormik.touched.patient && labFormik.errors.patient ? (
                    <InputInfoComponent
                      message={labFormik.errors.patient}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Select
                  name="patient"
                  onChange={labFormik.handleChange}
                  onBlur={labFormik.handleBlur}
                  value={labFormik.values.patient}
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
                    <Label htmlFor="lab" value="Select Lab" />
                    {labFormik.touched.lab && labFormik.errors.lab ? (
                      <InputInfoComponent
                        message={labFormik.errors.lab}
                        type="error"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <Select
                    name="lab"
                    onChange={labFormik.handleChange}
                    onBlur={labFormik.handleBlur}
                    value={labFormik.values.lab}
                  >
                    <option value="">Select Lab</option>
                    {labs.map((lab, index) => (
                      <option key={index} value={lab}>
                        {lab}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 w-1/2">
                    <Label htmlFor="test" value="Test" />
                    {labFormik.touched.test && labFormik.errors.test ? (
                      <InputInfoComponent
                        message={labFormik.errors.test}
                        type="error"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <Select
                    name="test"
                    onChange={labFormik.handleChange}
                    onBlur={labFormik.handleBlur}
                    value={labFormik.values.test}
                  >
                    <option value="">Select Test</option>
                    {tests.map((test, index) => (
                      <option key={index} value={test}>
                        {test}
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
                  {labFormik.touched.instruction &&
                  labFormik.errors.instruction ? (
                    <InputInfoComponent
                      message={labFormik.errors.instruction}
                      type="error"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Textarea
                  name="instruction"
                  onChange={labFormik.handleChange}
                  onBlur={labFormik.handleBlur}
                  value={labFormik.values.instruction}
                />
              </div>
              <div className="w-full">
                <Button
                  className="bg-primary border border-primary mx-auto hover:bg-white hover:text-primary text-white"
                  type="submit"
                  color="red"
                >
                  Create Test
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
  )
}

export default LaboratoryModal
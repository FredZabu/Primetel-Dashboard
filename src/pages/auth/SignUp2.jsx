import { useState } from "react";
import ButtonLong from "../../components/ButtonLong";
import { useFormik } from "formik";
import * as Yup from "yup";
import Layout from "./Layout";
import { Label } from "flowbite-react";
import InputAuth from "../../components/InputAuth";
import { HiMail } from "react-icons/hi";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import InputPassword from "../../components/InputPassword";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import InputInfoComponent from "../../components/InputInfoComponent";

const SignUp2 = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    //validate form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is required"),
      name: Yup.string().required("Name is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be numeric")
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number can be at most 15 digits")
        .required("Phone number is required"),

      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&'^#])[A-Za-z\d@$!%*?&'^#]+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      terms: Yup.boolean().oneOf([true], "Terms of service must be checked"),
    }),
    onSubmit: (values) => {
      console.log("submit", values);
    },
  });

  // getting the user selected data from previous page
  const location = useLocation();
  const selectedUser = location.state?.data;
  console.log("from two", selectedUser)
  return (
    <Layout>
      <div className="flex w-full items-center justify-center">
        <form
          className="flex flex-col gap-1.5 w-full mb-8"
          onSubmit={formik.handleSubmit}
        >
          <div className=" font-bold text-4xl mb-2">Sign Up</div>
          <div>
            <div className=" block">
              <Label htmlFor="name" value="Name" />
              {formik.touched.name && formik.errors.name ? (
                <InputInfoComponent message={formik.errors.name} type="error" />
              ) : (
                ""
              )}
            </div>
            <InputAuth
              type="text"
              name="name"
              icon={
                <BsFillPersonFill
                  size={20}
                  className="text-gray-500 dark:text-gray-400"
                />
              }
              placeholder="Jane Doe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
          <div>
            <div className=" block">
              <Label htmlFor="email1" value="Email" />
              {formik.touched.email && formik.errors.email ? (
                <InputInfoComponent
                  message={formik.errors.email}
                  type="error"
                />
              ) : (
                ""
              )}
            </div>
            <InputAuth
              type="email"
              name="email"
              icon={
                <HiMail
                  size={20}
                  className="text-gray-500 dark:text-gray-400"
                />
              }
              placeholder="example@email.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          <div>
            <div className=" block">
              <Label htmlFor="phoneNumber" value="Phone Number" />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <InputInfoComponent
                  message={formik.errors.phoneNumber}
                  type="error"
                />
              ) : (
                ""
              )}
            </div>
            <InputAuth
              type="text"
              name="phoneNumber"
              icon={
                <BsFillTelephoneFill
                  size={16}
                  className="text-gray-500 dark:text-gray-400"
                />
              }
              placeholder="0700123456"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="password1" value="Password" />
              {formik.touched.password && formik.errors.password ? (
                <InputInfoComponent message={formik.errors.password} type="error"/>
              ) : (
                ""
              )}
            </div>
            <InputPassword
              name="password"
              type={passwordVisible}
              placeholder="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              togglePasswordVisibility={togglePasswordVisibility}
              passwordVisible={passwordVisible}
            />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="password1" value="Confirm password" />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <InputInfoComponent
                  message={formik.errors.confirmPassword}
                  type="error"
                />
              ) : (
                ""
              )}
            </div>
            <InputAuth
              name="confirmPassword"
              icon={
                <RiLockPasswordFill
                  size={20}
                  className="text-gray-500 dark:text-gray-400"
                />
              }
              placeholder="Confirm password"
              type="password" // Specify the type explicitly
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
          </div>
          <div className="flex flex-col justify-between gap-2">
            <div>
              {formik.touched.terms && formik.errors.terms ? (
                <InputInfoComponent
                  message={formik.errors.terms}
                  type="error"
                />
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="terms"
                checked={formik.values.terms} // Set the checked attribute based on formik values
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue("terms", e.target.checked); // Update the terms field value
                }}
                onBlur={formik.handleBlur}
                className="h-4 w-4 rounded text-primary focus:border-primary focus:ring-primary"
              />
              <p className="text-sm">
                I agree to the terms and conditions of service
              </p>
            </div>
          </div>
          <ButtonLong type="submit" text="Sign Up" onClick={() => {}} />
          <div className="text-sm flex font-medium items-center justify-center gap-2">
            Already have an account?
            <Link to="/">
              <span className="text-primary cursor-pointer">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp2;

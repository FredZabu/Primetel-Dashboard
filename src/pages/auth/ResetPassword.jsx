import Layout from "./Layout";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import InputInfoComponent from "../../components/InputInfoComponent";
import { Label } from "flowbite-react";
import InputAuth from "../../components/InputAuth";
import { HiMail } from "react-icons/hi";
import InputPassword from "../../components/InputPassword";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ButtonLong from "../../components/ButtonLong";
const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    //validate form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is required"),

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
    }),
    onSubmit: (values) => {
      console.log("submit", values);
    },
  });
  return (
    <Layout>
      <div className="flex w-full items-center justify-center">
        <form
          className="w-full flex flex-col  gap-1.5 mb-8"
          onSubmit={formik.handleSubmit}
        >
          <div className=" font-bold text-lg">
            Welcome back to <span className="text-primary">Primetel</span>
          </div>
          <div className=" font-bold text-4xl mt-2">Reset Password</div>
          <div>
            <div className=" block">
              <Label htmlFor="email1" value="Email" />
              {formik.touched.email && formik.errors.email ? (
                <InputInfoComponent message={formik.errors.email} />
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
            <div className="block">
              <Label htmlFor="password1" value="New Password" />
              {formik.touched.password && formik.errors.password ? (
                <InputInfoComponent message={formik.errors.password} />
              ) : (
                ""
              )}
            </div>
            <InputPassword
              name="password"
              type={passwordVisible}
              placeholder="new password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              togglePasswordVisibility={togglePasswordVisibility}
              passwordVisible={passwordVisible}
            />
          </div>
          <div>
            <div className="block mt-2">
              <Label htmlFor="password1" value="Confirm New password" />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <InputInfoComponent message={formik.errors.confirmPassword} />
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
              placeholder="Confirm new password"
              type="password" // Specify the type explicitly
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
          </div>

          <ButtonLong type="submit" text="Reset" onClick={() => {}} />
          <div className="text-sm mt-2 flex font-medium items-center justify-center gap-2">
            Back to
            <Link to="/login">
              <span className="text-primary cursor-pointer">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ResetPassword;

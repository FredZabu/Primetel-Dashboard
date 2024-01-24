import Layout from "./Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputInfoComponent from "../../components/InputInfoComponent";
import { Label } from "flowbite-react";
import InputAuth from "../../components/InputAuth";
import { HiMail } from "react-icons/hi";
import ButtonLong from "../../components/ButtonLong";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
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
          className="w-full flex flex-col gap-1.5 mb-8"
          onSubmit={formik.handleSubmit}
        >
          <div className=" font-bold text-4xl mt-2">Forgot Password</div>
          <div className="gap-4">
            <div className=" flex flex-col my-2.5">
              <Label htmlFor="email1" value="Email" className="mb-4" />
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
          <InputInfoComponent
            type="info"
            message="If your email exists, a Reset Password link will be sent to  your email. Please check your inbox and spam"
          />

          <ButtonLong type="submit" text="Reset" onClick={() => {}} />
          <div className="text-sm mt-4 flex font-medium items-center justify-center gap-2">
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

export default ForgotPassword;

// import React from 'react'
import Layout from "./Layout";
import { Checkbox, Label } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import ButtonLong from "../../components/ButtonLong";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputAuth from "../../components/InputAuth";
import InputPassword from "../../components/InputPassword";
import { Link, useNavigate } from "react-router-dom";
import InputInfoComponent from "../../components/InputInfoComponent";
import {useLoginMutation } from "../../store/index.js"
import { useDispatch } from "react-redux";
import { setUser} from "../../store/index.js";


  const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const nullUser = JSON.stringify({
                    role: null,
                    token: null
  })
  const user = JSON.parse(sessionStorage.getItem("user") || nullUser)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  const [login, { data, isLoading, isSuccess, isError }] = useLoginMutation();
  useEffect(() => {
   
    if (user.token) {
      dispatch(setUser(user))
      navigate("/dashboard")
    }
    if (isSuccess) {
      dispatch(setUser(data))
      navigate("/dashboard")
      toast.success('Login Successful!');
      
      console.log(data);
    } 
    if (isError) {
     
      toast.error("Invalid email or password provided!", {
        style: {
          background: 'red',
          color: 'white',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#000',
        },
      });
      
    }
    
  },[isSuccess, isError])



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    //validate form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("submit", values);
      login(values)
 
    },
  });


  return (
    <Layout>
      <div className="flex w-full items-center justify-center mt-4">
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={formik.handleSubmit}
        >
          <div className=" font-bold text-lg">
            Welcome back to <span className="text-primary">Primetel</span>
          </div>
          <div className=" font-bold text-4xl">Login</div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
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
              type="text"
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
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
              {formik.touched.password && formik.errors.password ? (
                <InputInfoComponent
                  message={formik.errors.password}
                  type="error"
                />
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
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                className="text-primary focus:outline-primary"
                id="remember"
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <div>
              <Link
                to="/forgotpassword"
                className="text-sm cursor-pointer hover:text-primary"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <ButtonLong type="submit" text="Login" isLoading= {isLoading} isLoadingText="loging in" />
          <div className="text-sm flex font-medium items-center justify-center gap-2">
            Don&apos;t have an account?
            <Link to="/getstarted">
              <span className="text-primary cursor-pointer">Get Started</span>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;

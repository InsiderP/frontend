"use client"
import Errmsg from "@/core/Errmsg";
// import useLogin from "@/libs/mutation/chef/useLogin";
import { Button, Input } from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  // const { mutate: LoginFunc, isLoading: loginLoading } = useLogin();

  const onSubmit = (formdata) => {
    // console.log(formdata);
    // LoginFunc(formdata);
  };
  // console.log("loading", loginLoading);
  return (
    <div className="flex justify-center items-center bg-submain w-full h-full p-5  bg-white mt-16">
      <Head>
        <title>Login</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="flex flex-col gap-3 justify-center items-center bg-gray-100 w-[500px] h-[500px] overflow-auto  CustomScrollbar scrollbar-none py-9  base:px-6 medium:px-16 rounded-lg">
        <div>
          <h1 className="base:text-md medium:text-xl font-bold text-main_blue text-center mt-5 ">
            Log in to your account
          </h1>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[300px]">
          <Controller
              control={control}
              rules={{
                required: "Email is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: " proper email format",
                },
              }}
              name="email"
              render={({ field: { onChange, value } }) => {
                return (
                  <div>
                    <Input
                      size={"sm"}
                      color="primary"
                      onChange={(e) => (onChange(e), trigger("email"))}
                      value={value}
                      label="Enter Your Email"
                    />
                    <Errmsg name="email" err={errors} />
                  </div>
                );
              }}
            />
          </div>

          <div>
          <Controller
              control={control}
              rules={{
                required: "Password is required",
                pattern: {
                  value: /\S/,
                  message: "Enter Valid Password",
                },
              }}
              name="password"
              render={({ field: { onChange, value } }) => {
                return (
                  <div>
                    <Input
                      size={"sm"}
                      color="primary"
                      type={showPassword ? "text" : "password"}
                      label="Enter Password"
                      onChange={(e) => (onChange(e), trigger("password"))}
                      value={value}
                      icon={
                        showPassword ? (
                          <FaEyeSlash onClick={() => setShowPassword(false)} />
                        ) : (
                          <FaEye onClick={() => setShowPassword(true)} />
                        )
                      }
                    />
                    <Errmsg name="password" err={errors} />
                  </div>
                );
              }}
            />
          </div>

          

          <div className="text-right">
            <a
              href=""
              className="text-sm font-semibold text-green-600"
            >
              Forgot Password
            </a>
          </div>
          <Button
            type="submit"
            radius="md"
            className="w-full h-12 bg-gradient-to-r from-main_blue to-[#6ba80a] text-white font-semibold mt-1"
          >
            Log In
          </Button>
        </form>


        
      </div>
    </div>
  );
};

export default Login;



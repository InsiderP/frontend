"use client"
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Avatar, Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Errmsg from "@/core/ErrMsg";
import { useRouter } from "next/navigation";
import useCreateChef from "@/libs/mutation/chef/useCreateChef";


const Signup= () => {
  const [showPassword, setShowPassword] = useState(false);  
  const router = useRouter();


const { mutate: createChef, isLoading: createChefLoading, isSuccess: Created } = useCreateChef();
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    trigger,
    reset,
  } = useForm();
  const onSubmit = async (formData) => {
    const updatedFormData = {
      ...formData
    };
    console.log(updatedFormData);
    createChef(updatedFormData);
    
  };
  useEffect(() => {
    if(Created){
      router.push('/')
      reset({
        name: "",
        email: "",
        phone: "",
        password: "",
        avatar:""
      })
    }

  },[Created])

  return (
    <div className="flex justify-center items-center bg-white w-full h-full p-5 mt-12 ">
      <div className="flex flex-col gap-3 bg-gray-100 w-[500px] h-[500px] overflow-auto py-9  px-16 rounded-lg">
        <div>
          <h1 className="text-xl md:text-2xl font-bold CustomColor text-center ">
            Sign Up 
          </h1>
        </div>

        <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col gap-2 mt-2">
          <div>
            <Controller
              control={control}
              rules={{
                required: "Name is Required",
                pattern: {
                  value: /^[a-zA-Z]+( [a-zA-Z]+)*$/,
                  message: "Enter Valid Name",
                },
              }}
              name="first_name"
              render={({ field: { onChange, value } }) => {
                return (
                  <div>
                    <Input size={"sm"} color="primary" onChange={(e) => (onChange(e), trigger("name"))} value={value} label="Enter Full Name" />
                    <Errmsg name="first_name" err={errors} />
                  </div>
                );
              }}
            />
          </div>

          <div>
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
                required: "Phone is Required",
                pattern: {
                  value: /^[0-9]{10}$/, // Validate only numbers and up to 10 digits
                  message: "phone number should be 10 digits",
                },
              }}
              name="phone_number"
              render={({ field: { onChange, value } }) => {
                return (
                  <div>
                    <Input
                      size={"sm"}
                      color="primary"
                      maxLength={10}
                      onChange={(e) => (onChange(e), trigger("phone"))}
                      value={value}
                      label="Enter Phone Number"
                    />
                    <Errmsg name="phone_number" err={errors} />
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

          

          <Button 
          isLoading={createChefLoading}
           type="submit" className="bg-gradient-to-r from-lime-400 to-blue-500 text-white font-semibold ">
            Sign Up
          </Button>
        </form>
        <hr className=" border-gray-300 w-full mt-3" />

        <p className="text-center mt-2">
          Already have an Account?{" "}
          <Link href="http://localhost:3000" className="CustomColor font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
  };

 




 


export default Signup;
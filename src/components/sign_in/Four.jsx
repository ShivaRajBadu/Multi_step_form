import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Review } from "./Review";

export const FourPage = ({ number }) => {
  const [showReview, setShowReview] = useState(false);
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setData(data);
    setShowReview(true);
  };
  return (
    <div className=" flex justify-center   items-center  bg-[#142639] py-6 ">
      <div className=" rounded-md   max-w-[35rem] bg-white  ">
        <div className="py-4 border-b-2 px-6 shadow-md  bg-gray-200 border-white flex gap-3 w-full">
          <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>
          <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>

          <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>
        </div>
        {!showReview ? (
          <div className="px-6 py-4">
            <div className="px-4">
              <h1 className="py-2 px-2 text-xl font-bold">
                Create Your Account In Badu's
              </h1>
              <p className="py-2 px-3  text-gray-600 ">
                To complete your Badu's account setup, please complete{" "}
                <span className="block"> the following:</span>
              </p>
              <div className="text-center py-2 pb-0 ">
                <h2 className="text-gray-700 text-sm">
                  YOUR REGISTERD PHONE NUMBER
                </h2>
                <p className="font-bold py-4">{number}</p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-8 ">
              <input
                className="w-full border-2 border-gray-700 py-2 placeholder:text-gary-900 px-3 my-2 rounded-md"
                type="text"
                {...register("businessName", { required: true })}
                placeholder="Name of Business"
              />
              <div className="flex  gap-3 my-2">
                <input
                  className="w-[50%]  py-2 px-3 border-2 border-gray-700 rounded-md my-2"
                  type="text"
                  {...register("firstName", { required: true })}
                  placeholder="First Name"
                />
                <input
                  className="w-[50%]  py-2 px-3 border-2 border-gray-700 rounded-md my-2"
                  type="text"
                  {...register("lastName", { required: true })}
                  placeholder="Last Name"
                />
              </div>

              <input
                {...register("email", { required: true })}
                className="w-full border-2 border-gray-700 py-2 placeholder:text-gary-900 px-3 my-2 rounded-md"
                type="email"
                placeholder="Email Address"
              />
              <div className="flex  gap-3">
                <input
                  {...register("password", { required: true })}
                  className="w-[50%] border-2 border-gray-700 py-2 placeholder:text-gary-900 px-3 my-2 rounded-md"
                  type="password"
                  placeholder="Password"
                />
                <input
                  {...register("confirmPassword", { required: true })}
                  className="w-[50%]  border-2 border-gray-700 py-2 placeholder:text-gary-900 px-3 my-2 rounded-md"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>

              <p className="my-3 text-lg px-1 font-semibold">Service address</p>
              <div className="flex gap-3 ">
                <input
                  {...register("streetNumber", { required: true })}
                  className="w-[50%] border-2 border-gray-700 py-2 placeholder:text-gary-900 px-3 my-2 rounded-md"
                  type="number"
                  placeholder="Street Number"
                />
                <input
                  {...register("streetName", { required: true })}
                  className="w-[50%] border-2 border-gray-700 py-2 placeholder:text-gary-900 px-3 my-2 rounded-md"
                  type="text"
                  placeholder="Street Name"
                />
              </div>
              <input
                {...register("optionalAddress")}
                className="w-full border-2 border-gray-700 py-2 placeholder:text-gary-900 px-3 my-2 rounded-md"
                type="text "
                placeholder="Address Line 2 (optional)"
              />
              <div className="flex gap-3">
                <input
                  {...register("city", { required: true })}
                  className="w-[50%] border-2 border-gray-700 py-2 placeholder:text-gary-900 px-3 my-2 rounded-md"
                  type="text"
                  placeholder="City"
                />
                <input
                  {...register("state", { required: true })}
                  className="w-[50%] border-2 border-gray-700 py-2 placeholder:text-gary-900 px-3 my-2 rounded-md"
                  type="text"
                  placeholder="State"
                />
              </div>
              <div className="flex gap-3">
                <input
                  {...register("zipCode", { required: true, minLength: 4 })}
                  className="w-[50%] border-2 border-gray-700 py-2 placeholder:text-gary-900  px-3 my-2 rounded-md"
                  type="number"
                  placeholder="ZIP/Postal Code"
                />
                <input
                  {...register("zipCodePluse")}
                  className="w-[50%] border-2 border-gray-700 py-2 placeholder:text-gary-900 px-3 my-2 rounded-md"
                  type="text"
                  placeholder="ZIP Plus(optional)"
                />
              </div>
              <input
                className="w-full bg-orange-600 py-3 my-8 mt-10  rounded-md text-xl text-white hover:shadow-lg hover:bg-orange-700 cursor-pointer"
                type="submit"
                value="Next"
              />
            </form>
          </div>
        ) : (
          <div className="h-full my-4">
            <Review data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

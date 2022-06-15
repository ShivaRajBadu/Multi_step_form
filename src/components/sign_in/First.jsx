import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import Second from "./Second";

export default function First() {
  const [expand, setExpand] = useState(false);
  const [data, setData] = useState({});
  const {
    control,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setData(data);
    setExpand(true);
  };
  return (
    <>
      {expand ? (
        <Second number={data.phoneNumber} />
      ) : (
        <div className="grid place-items-center bg-[#142639] h-screen w-screen">
          <div className=" rounded-md  max-w-[30rem]">
            <div className="py-4 border-b-2 px-6 shadow-md relative bg-gray-200 border-white flex gap-3">
              <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>
              <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>
              <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>
            </div>
            <form className="bg-white p-5  " onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-lg p-4 opacity-80">
                Add SMS to Your Business Line
              </h2>
              <label
                className="py-3 opacity-70 block capitalize px-2"
                htmlFor="phone">
                Enter your phone number
              </label>
              {errors.phoneNumber && (
                <p className="text-sm text-red-600">enter your phone number</p>
              )}
              <PhoneInputWithCountry
                international
                defaultCountry="NP"
                countryCallingCodeEditable={false}
                name="phoneNumber"
                control={control}
                rules={{ required: true }}
                style={{
                  backgroundColor: "lightgray",
                  border: "2px solid lightgray",
                }}
              />

              <div className=" flex gap-4 my-6">
                {errors.firstName && <p>enter your First Name</p>}

                <input
                  className=" placeholder:text-gray-600 shadow-inner border-2 border-gray-400 w-[50%] rounded-sm py-2 px-3 outline-none my-2 "
                  {...register("firstName", { required: true })}
                  type="text"
                  placeholder="First Name"
                />
                {errors.lastName && <p>enter your Last Name</p>}
                <input
                  className="placeholder:text-gray-600 shadow-inner border-2 border-gray-400 w-[50%] py-2 px-3 outline-none my-2 rounded-sm "
                  {...register("lastName", { required: true })}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-3 items-start pb-4">
                {errors.checkbox && <p>Can't be unchecked</p>}
                <input
                  className="w-10 h-5 mt-2 cursor-pointer  border-2 border-gray-400"
                  type="checkbox"
                  {...register("checkbox", { required: true })}
                />
                <p className="text-gray-600">
                  My organization is the owner of this phone number and i am
                  authorized to complete this process
                </p>
              </div>
              <input
                className="w-full bg-orange-600 text-white  hover:opacity-90 hover:shadow-2xl my-3 py-3 cursor-pointer  rounded-sm"
                type="submit"
                value="Verify Phone Number"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}

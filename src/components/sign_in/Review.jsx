import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
export const Review = ({ data }) => {
  const [isClicked, setIsClicked] = useState(true);
  console.log(data);
  return (
    <>
      {isClicked ? (
        <div className="py-4 px-8 max-w-[35rem] first-letter   ">
          <h1 className="text-lg font-semibold tracking-wide capitalize py-3">
            Review Your Information & Create Account
          </h1>
          <p className=" py-3  inline-block text-gray-600 tracking-wide ">
            Please review your information before creating your BADU's account.
          </p>
          <ul className="text-gray-700">
            <li className="uppercase py-1">
              <h3 className="text-sm">Business phone number</h3>
              <p className="text-sm px-2 text-orange-400">+977 9848992223</p>
            </li>
            <li className="py-2">
              <h3 className="uppercase text-sm ">Name of Business</h3>
              <p className="px-2 text-orange-400">{data.businessName}</p>
            </li>
            <li className="py-1">
              <h3 className="uppercase text-sm">Full name</h3>
              <p className="px-2 text-orange-400">
                {data.firstName} {data.lastName}
              </p>
            </li>
            <li className="py-1">
              <h3 className="uppercase text-sm">Email address</h3>
              <p className="px-2 text-orange-400">{data.email}</p>
            </li>
          </ul>
          <p className="text-semibold capitalize py-2 pb-1"> Service address</p>
          <p className="text-sm px-2 text-orange-400">
            {data.streetNumber} {data.streetName}
            {data.optionalAddress}
          </p>

          <p className="text-sm px-2 text-orange-400">
            {data.city} {data.state}, {data.zipCode}
          </p>
          <button
            onClick={() => setIsClicked(false)}
            className="w-full py-3 px-4 text-lg bg-orange-700 my-6 rounded-md text-white capitalize hover:shadow-3xl hover:bg-orange-600">
            create account
          </button>
        </div>
      ) : (
        <div className="text-center px-6 py-8">
          <h1 className="text-start text-2xl py-3 px-2">
            Success! Your Account is Created.
          </h1>
          <p className="text-start px-2 py-5 max-w-lg">
            Please check your email for next steps. Your phone number should be
            textable in a few minutes.
          </p>
          <div className="flex justify-center items-center py-8">
            <AiOutlineMail className="text-9xl text-red-500 " />
          </div>
          <p className="py-2">Didn't receive an Email?</p>
          <p className="">Check your SPAN folder</p>
          <p className="uppercase py-2">or</p>
          <a className="underline pb-5 block" href="/">
            Resend Email
          </a>
        </div>
      )}
    </>
  );
};

import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FourPage } from "../sign_in/Four";

export default function Third({ number }) {
  const [isVerify, setIsVerify] = useState(true);
  const [code, setCode] = useState("");
  const [next, setNext] = useState(false);

  const verifyOTP = (e) => {
    e.preventDefault();
    console.log(code);

    if (code.length === 6) {
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          setIsVerify(false);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {next ? (
        <FourPage number={number} />
      ) : (
        <div className="grid place-items-center bg-[#142639] h-screen w-screen">
          <div className=" rounded-md  max-w-[35rem] bg-white  ">
            <div className="py-5 border-b-2 px-6 shadow-md  bg-gray-200 border-white flex gap-3 w-full">
              <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>
              <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>

              <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>
            </div>
            {isVerify ? (
              <div className="mb-10">
                <div className="bg-white py-5 px-12">
                  <h1 className=" py-4 text-lg">
                    Enter 6 Digit Verification PIN Number
                  </h1>
                  {/* <p className="text-orange-600 text-sm">
            The PIN number you entered was invalid.
          </p> */}
                </div>
                <form
                  onSubmit={verifyOTP}
                  className="flex flex-wrap  items-center justify-center gap-6 px-10 max-w-[35rem] py-6 pb-8 ">
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="border-2 w-50 h-10 px-3 border-gray-600 rounded-sm"
                    type="tel"
                    min="0"
                    max="9"
                    maxLength="6"
                    required
                  />
                  {/* <input
                {...register("second", { required: true })}
                className="border-2 w-10 h-10 px-3 border-gray-600 rounded-sm "
                type="tel"
                min="0"
                max="9"
                maxLength="1"
                required
              />
              <input
                {...register("third", { required: true })}
                className="border-2 w-10 h-10 px-3 border-gray-600 rounded-sm "
                type="tel"
                min="0"
                max="9"
                maxLength="1"
              />
              <input
                {...register("fourth", { required: true })}
                className="border-2 w-10 h-10 px-3 border-gray-600 rounded-sm"
                type="tel"
                false
                required
              />
              <input
                {...register("fifth", { required: true })}
                className="border-2 w-10 h-10 px-3 border-gray-600 rounded-sm"
                type="tel"
                min="0"
                max="9"
                maxLength="1"
                required
              />
              <input
                {...register("sixth", { required: true })}
                className="border-2 w-10 h-10 px-3 border-gray-600 rounded-sm"
                type="tel"
                min="0"
                max="9"
                maxLength="1"
                required
              /> */}

                  <div className="bg-white px-7 text-center py-3">
                    <button
                      type="submit"
                      className="bg-orange-600 py-3 w-full text-white capitalize hover:shadow-2xl hover:bg-orange   rounded-sm ">
                      Submit
                    </button>

                    <a
                      className="underline py-5 pb-3 block text-gray-600"
                      href="/">
                      Re-send message
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-4 px-16 w-full max-w-[30rem] mb-8">
                <h1 className="text-lg w-full my-6 mt-4">
                  Success! Your Phone Number was Verified.
                </h1>
                <h1 className="py-4 flex items-center justify-center gap-3 text-3xl my-3 text-green-600 font-bold ">
                  <AiFillCheckCircle /> {number}
                </h1>
                <button
                  onClick={() => setNext(true)}
                  className="w-full bg-orange-600 py-3 text-xl text-white rounded-sm hover:shadow-2xl hover:bg-orange-500 my-6">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

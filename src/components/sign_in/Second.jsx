import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Third from "./Third";
export default function Second({ number }) {
  const [expand, setExpand] = useState(false);

  const generateReCapture = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };

  const sendOTP = (e) => {
    e.preventDefault();
    if (number.length >= 10) {
      setExpand(true);
      generateReCapture();
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, number, appVerifier)
        .then((confirmationResult) => {
          //sms sent to user
          console.log(confirmationResult);
          window.confirmationResult = confirmationResult;
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="grid place-items-center bg-[#142639] h-screen w-screen">
      {expand ? (
        <Third number={number} />
      ) : (
        <div className=" rounded-md  max-w-[30rem] h">
          <div className="py-4 border-b-2 px-6 shadow-md relative bg-gray-200 border-white flex gap-3">
            <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>
            <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>
            <p className=" border-2 h-7 w-7 bg-white rounded-full"></p>
          </div>
          <div className="bg-white py-5 px-6">
            <p className="firstfirst-letter:capital">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              <span className="text-orange-600">{number} </span>
              Lorem, ipsum dolor sit amet consectetur adipisicing.
              exercitationem! Lorem ipsum dolor sit amet.
              <span className="block capitalize py-5">
                you will message having OTP
              </span>
            </p>

            <button
              onClick={sendOTP}
              className="bg-orange-600 py-3 w-full text-white capitalize my-6 mt-7 rounded-sm ">
              send me message
            </button>
          </div>
        </div>
      )}

      <div id="sign-in-button"></div>
    </div>
  );
}

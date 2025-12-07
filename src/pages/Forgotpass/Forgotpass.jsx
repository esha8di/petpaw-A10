import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import {  useParams } from "react-router";
import auth from "../../firebase/firebase.init";

const Forgotpass = () => {
  const { email } = useParams();
  
  const handleonclick = (e) => {
    e.preventDefault();

    const emailfromvalue = e.target.email.value;

    console.log("forgotemail", emailfromvalue);

    sendPasswordResetEmail(auth, emailfromvalue)
      .then(() => {
        window.open('https://mail.google.com/mail/u/0/#inbox')
        
      })
      .catch((error) => {
        console.log("forgot", error);
      });
  };
  return (
    <div className="my-10 flex items-center justify-center">
      <form onSubmit={handleonclick}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <p className="text-2xl mb-2 text-green-900 font-bold">
            Reset Password
          </p>
          <label className="label ">Type the Email of your Account</label>
          <input
            defaultValue={email}
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <button className="btn bg-green-900 text-white">Send</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Forgotpass;

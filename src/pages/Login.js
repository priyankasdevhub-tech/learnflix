import React, { use, useState } from "react";
import Header from "./Header";
import InputField from "../components/InputField";
import { validateEmail, validatePassword } from "../utils/validation";
import { validateFirstName } from "../utils/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [firebaseErrMsg, setFirebaseErrMsg] = useState("");

  const runValidation = () => {
    const nameErr = !isSignInForm ? validateFirstName(firstName) : "";
    const mailErr = validateEmail(email);
    const pwdErr = validatePassword(password);

    setEmailError(mailErr);
    setFirstNameError(nameErr);
    setPasswordError(pwdErr);

    return !nameErr && !mailErr && !pwdErr;
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    // handleSubmit()
  };

  // Handle email/password sign in
  const handleSignIn = (e) => {
    e.preventDefault();

    if (runValidation()) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("✅ Signed in user:", user);
        })
        .catch((error) => {
          console.error("❌ Sign in error:", error.code, error.message);
          setFirebaseErrMsg(error.message);
        });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (runValidation()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user Sihned up sucessfully");

          // ...
        })
        .catch((error) => {
          const errorMsg = error.message;

          setFirebaseErrMsg(errorMsg);

          // const errorMessage = error.message;
          // ..
        });
    }
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;

    setFirstName(value);
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const errorMsg = validateEmail(value);
    console.log("Email validation result:", errorMsg);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header />

      {/* Background */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Centered Form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md">
        <form className="flex flex-col space-y-5 bg-black/70 rounded-lg p-10 shadow-lg">
          {/* Heading */}
          <p className="text-white font-bold text-3xl mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>

          {/* Inputs */}
          <div className="flex flex-col space-y-4">
            {!isSignInForm && (
              <InputField
                label="FullName"
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                error={firstNameError}
              />
            )}
            <InputField
              label="Email or mobile number"
              type="text"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
            />
            <InputField
              label="Passwod"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={passwordError}
            />
            {/* <InputField label="Email or mobile number" type="text" />
          <InputField label="Password" type="password" error="Your password must contain between 4 and 60 characters." /> */}
          </div>

          {/* Buttons */}
          <div
            className="flex flex-col space-y-3"
            onClick={isSignInForm ? handleSignIn : handleSignUp}
          >
            <button className="w-full p-3 rounded bg-red-600 hover:bg-red-700 text-white font-semibold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            {firebaseErrMsg !== "" && (
              <p className="flex text-red-600 text-xs">{firebaseErrMsg}</p>
            )}

            {isSignInForm && (
              <>
                {" "}
                <p className="flex justify-center text-white">OR</p>
                <button className="w-full p-3 rounded bg-white/20 hover:bg-white/30 text-white font-semibold">
                  Use a sign-in code
                </button>
              </>
            )}
          </div>

          {/* Forgot password */}
          {isSignInForm && (
            <p className="underline text-white text-sm cursor-pointer">
              Forgot password?
            </p>
          )}

          {/* Remember Me */}
          {isSignInForm && (
            <div className="flex items-center space-x-2">
              <input
                id="rememberMe"
                type="checkbox"
                className="h-4 w-4 accent-white"
                defaultChecked
              />
              <label htmlFor="rememberMe" className="text-white text-sm">
                Remember me
              </label>
            </div>
          )}

          {/* Toggle Sign Up / Sign In */}
          <div className="flex space-x-2">
            <p className=" text-white/70">
              {" "}
              {isSignInForm ? "New to Netflix?" : "Already have an account?"}
            </p>
            <button
              type="button"
              className="underline text-white font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now" : "Sign in here"}
            </button>
          </div>

          {/* Footer Text */}
          <div>
            <p className="text-xs text-white/80">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <p className="underline text-xs cursor-pointer">Learn More</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

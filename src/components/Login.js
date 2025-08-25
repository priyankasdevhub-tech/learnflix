import React, { useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import { validateEmail,validatePassword } from "../utils/validation";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");



  const toggleSignInForm = () => setSignInForm(!isSignInForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      console.log("✅ Form Submitted:", { email, password });
      // proceed with API call / auth logic
    }
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  
    const errorMsg = validateEmail(value);
    console.log("Email validation result:", errorMsg); // will show "" or error message
  
    setEmailError(errorMsg); // directly set the error ("" means no error)
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  
    const errorMsg = validatePassword(value);
    console.log("Password validation result:", errorMsg); // will show "" or error message
  
    setPasswordError(errorMsg); // directly set the error ("" means no error)
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
          <InputField
  label="Email or mobile number"
  type="text"
  value={email}
  onChange={handleEmailChange}
  error={emailError}
/>
<InputField
  label="Email or mobile number"
  type="password"
  value={password}
  onChange={handlePasswordChange}
  error={passwordError}
/>
          {/* <InputField label="Email or mobile number" type="text" />
          <InputField label="Password" type="password" error="Your password must contain between 4 and 60 characters." /> */}
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-3">
            <button className="w-full p-3 rounded bg-red-600 hover:bg-red-700 text-white font-semibold">
              Sign in
            </button>
            <p className="flex justify-center text-white">OR</p>
            <button className="w-full p-3 rounded bg-white/20 hover:bg-white/30 text-white font-semibold">
              Use a sign-in code
            </button>
          </div>

          {/* Forgot password */}
          <p className="underline text-white text-sm cursor-pointer">
            Forgot password?
          </p>



          {/* Remember Me */}
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
          

          {/* Toggle Sign Up / Sign In */}
          <div className="flex space-x-2">
            <p className=" text-white/70">New to Netflix?</p>
            <button
              type="button"
              className="underline text-white font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign up now
            </button>
          </div>

          {/* Footer Text */}
          <div >
            <p className="text-xs text-white/80">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>
            <p className="underline text-xs cursor-pointer">Learn More</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// utils/validation.js

// ✅ Email Validation
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    return "";
  };
  
  // ✅ Password Validation
  export const validatePassword = (password) => {
    if (!password) return "Password is required.";
    if (password.length < 4 || password.length > 60) {
      return "Your password must contain between 4 and 60 characters.";
    }
    return "";
  };
  
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
  
  export function validateFirstName(firstName) {
    // Trim spaces
    const value = firstName.trim();
  
    if (!value) {
      return "First name is required.";
    }
  
    // Allow only alphabets (and optional spaces/hyphens for names)
    const nameRegex = /^[A-Za-z\s-]+$/;
    if (!nameRegex.test(value)) {
      return "First name can only contain letters, spaces, or hyphens.";
    }
  
    if (value.length < 2) {
      return "First name must be at least 2 characters long.";
    }
  
    if (value.length > 30) {
      return "First name must be less than 30 characters.";
    }
  
    return ""; // no error
  }
  
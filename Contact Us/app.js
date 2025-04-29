document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".submit-button");

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll(".form-label input");
    const textarea = document.querySelector(".msg-text");
    let formValid = true;

    // Reset errors
    document.querySelectorAll(".error-message").forEach((el) => {
      el.textContent = "";
      el.style.display = "none"; // Hide the error message initially
    });
    inputs.forEach((input) => {
      input.classList.remove("error"); // Remove error class
    });
    textarea.classList.remove("error");

    // Validate inputs
    inputs.forEach((input) => {
      const errorElement = input.parentElement.querySelector(".error-message");

      // Check if input is empty
      if (input.value.trim() === "") {
        errorElement.textContent = "This field is required";
        errorElement.style.display = "block"; // Show error message
        input.classList.add("error"); // Add error class for red border
        formValid = false;
      }

      // Validate phone number
      if (input.type === "number" && input.value.trim() !== "") {
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(input.value.trim())) {
          errorElement.textContent = "Enter valid phone number (10-15 digits)";
          errorElement.style.display = "block"; // Show error message
          input.classList.add("error"); // Add error class for red border
          formValid = false;
        }
      }

      // Validate email address
      if (input.type === "email" && input.value.trim() !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          errorElement.textContent = "Enter valid email address";
          errorElement.style.display = "block"; // Show error message
          input.classList.add("error"); // Add error class for red border
          formValid = false;
        }
      }
    });

    // Validate textarea (Message field)
    const messageError = textarea.parentElement.querySelector(".error-message");
    if (textarea.value.trim() === "") {
      messageError.textContent = ""; // No error message for empty message
      messageError.style.display = "none"; // Hide the message error
      textarea.classList.remove("error"); // Remove red border from textarea
    }

    // If form is valid, show alert
    if (formValid) {
      alert("You have logged in successfully!");
    }
  });

  // Real-time field validation: When user types, remove red border and error if valid
  const inputs = document.querySelectorAll(".form-label input");
  const textarea = document.querySelector(".msg-text");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      const errorElement = input.parentElement.querySelector(".error-message");

      if (input.value.trim() !== "") {
        errorElement.textContent = "";
        errorElement.style.display = "none"; // Hide error message when valid
        input.classList.remove("error"); // Remove red border when valid
      } else {
        errorElement.textContent = "This field is required"; // Keep error message if empty
        errorElement.style.display = "block"; // Show error message
        input.classList.add("error"); // Add red border if empty
      }

      // Real-time validation for phone
      if (input.type === "number" && input.value.trim() !== "") {
        const phoneRegex = /^[0-9]{10,15}$/;
        if (phoneRegex.test(input.value.trim())) {
          errorElement.textContent = "";
          errorElement.style.display = "none"; // Hide error message for valid phone
          input.classList.remove("error"); // Remove red border for valid phone
        } else {
          errorElement.textContent = "Enter valid phone number (10-15 digits)";
          errorElement.style.display = "block"; // Show error message
          input.classList.add("error"); // Add red border for invalid phone
        }
      }

      // Real-time validation for email
      if (input.type === "email" && input.value.trim() !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(input.value.trim())) {
          errorElement.textContent = "";
          errorElement.style.display = "none"; // Hide error message for valid email
          input.classList.remove("error"); // Remove red border for valid email
        } else {
          errorElement.textContent = "Enter valid email address";
          errorElement.style.display = "block"; // Show error message
          input.classList.add("error"); // Add red border for invalid email
        }
      }
    });
  });

  // Real-time validation for textarea (Message field)
  textarea.addEventListener("input", function () {
    const messageError = textarea.parentElement.querySelector(".error-message");
    if (textarea.value.trim() !== "") {
      messageError.textContent = "";
      messageError.style.display = "none"; // Hide error message
      textarea.classList.remove("error"); // Remove red border
    }
  });
});

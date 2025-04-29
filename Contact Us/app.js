document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".submit-button");

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll(".form-label input");
    const textarea = document.querySelector(".msg-text");
    let formValid = true;

    document.querySelectorAll(".error-message").forEach((el) => {
      el.textContent = "";
      el.style.display = "none";
    });
    inputs.forEach((input) => {
      input.classList.remove("error");
    });
    textarea.classList.remove("error");

    inputs.forEach((input) => {
      const errorElement = input.parentElement.querySelector(".error-message");

      if (input.value.trim() === "") {
        errorElement.textContent = "This field is required";
        errorElement.style.display = "block";
        input.classList.add("error");
        formValid = false;
      }

      if (input.type === "number" && input.value.trim() !== "") {
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(input.value.trim())) {
          errorElement.textContent = "Enter valid phone number (10-15 digits)";
          errorElement.style.display = "block";
          input.classList.add("error");
          formValid = false;
        }
      }

      if (input.type === "email" && input.value.trim() !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          errorElement.textContent = "Enter valid email address";
          errorElement.style.display = "block";
          input.classList.add("error");
          formValid = false;
        }
      }
    });

    const messageError = textarea.parentElement.querySelector(".error-message");
    if (textarea.value.trim() === "") {
      messageError.textContent = "";
      messageError.style.display = "none";
      textarea.classList.remove("error");
    }

    if (formValid) {
      alert("You have logged in successfully!");
    }
  });

  const inputs = document.querySelectorAll(".form-label input");
  const textarea = document.querySelector(".msg-text");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      const errorElement = input.parentElement.querySelector(".error-message");

      if (input.value.trim() !== "") {
        errorElement.textContent = "";
        errorElement.style.display = "none";
        input.classList.remove("error");
      } else {
        errorElement.textContent = "This field is required";
        errorElement.style.display = "block";
        input.classList.add("error");
      }

      if (input.type === "number" && input.value.trim() !== "") {
        const phoneRegex = /^[0-9]{10,15}$/;
        if (phoneRegex.test(input.value.trim())) {
          errorElement.textContent = "";
          errorElement.style.display = "none";
          input.classList.remove("error");
        } else {
          errorElement.textContent = "Enter valid phone number (10-15 digits)";
          errorElement.style.display = "block";
          input.classList.add("error");
        }
      }

      if (input.type === "email" && input.value.trim() !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(input.value.trim())) {
          errorElement.textContent = "";
          errorElement.style.display = "none";
          input.classList.remove("error");
        } else {
          errorElement.textContent = "Enter valid email address";
          errorElement.style.display = "block";
          input.classList.add("error");
        }
      }
    });
  });

  textarea.addEventListener("input", function () {
    const messageError = textarea.parentElement.querySelector(".error-message");
    if (textarea.value.trim() !== "") {
      messageError.textContent = "";
      messageError.style.display = "none";
      textarea.classList.remove("error");
    }
  });
});

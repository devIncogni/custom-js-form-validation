const formValidator = (() => {
  const nameRegExp = /^[A-Za-z]/;
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isValidNameCountry = (nameInputField) => {
    nameInputField;
    return nameInputField.value != 0 && nameRegExp.test(nameInputField.value);
  };

  const isValidEmail = (mailInputField) => {
    return (
      mailInputField.value.length !== 0 &&
      emailRegExp.test(mailInputField.value)
    );
  };

  const isValidPost = (postInputField) => {
    return postInputField.value >= 100000 && postInputField.value <= 999999;
  };

  const isValidPassword = (passInputField) => {
    return passRegExp.test(passInputField.value);
  };

  const setInputInvalid = (inputField) => {
    inputField.className = "invalid";
  };

  const setInputValid = (inputField) => {
    inputField.className = "";
  };

  const showError = (inputField, errorMsg = "Invalid") => {
    let errorDiv = document.querySelector(`#${inputField.id}+.error`);
    errorDiv.className = "error show";
    errorDiv.textContent = errorMsg;
    console.log("Error Shown");
  };

  const hideError = (inputField) => {
    let errorDiv = document.querySelector(`#${inputField.id}+.error`);
    errorDiv.className = "error";
    console.log("Error Hidden");
  };

  const isInvalidInput = (inputField) => {
    let result = "Nothing assigned";
    switch (inputField.getAttribute("type")) {
      case "text":
        result = isValidNameCountry(inputField);
        break;
      case "number":
        result = isValidPost(inputField);
        break;
      case "email":
        result = isValidEmail(inputField);
        break;
      case "password":
        result = isValidPassword(inputField);
        break;
      default:
        break;
    }
    return !result;
  };

  return {
    isInvalidInput,
    setInputInvalid,
    setInputValid,
    showError,
    hideError,
  };
})();

const initialiseInputs = (() => {
  let inputs = [...document.querySelectorAll("input")];

  inputs
    .filter(formValidator.isInvalidInput)
    .map(formValidator.setInputInvalid);

  inputs.forEach((input) => {
    input.addEventListener(`input`, (e) => {
      if (!formValidator.isInvalidInput(input)) {
        formValidator.setInputValid(input);
        formValidator.hideError(input);
      } else {
        formValidator.setInputInvalid(input);
        formValidator.showError(input, "invalid");
      }
    });
  });
})();

const handleInputs = (() => {})();

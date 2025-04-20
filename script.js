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
    let errorDiv = document.querySelector(`${inputField}+.error`);
    errorDiv.className = "error show";
    errorDiv.textContent = errorMsg;
  };

  const hideError = (inputField) => {
    let errorDiv = document.querySelector(`${inputField}+.error`);
    errorDiv.className = "error";
  };

  const autoCheckValidity = (inputField) => {
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

  return { autoCheckValidity, setInputInvalid, setInputValid, showError, hideError };
})();

const initialiseInputs = (() => {
  let inputs = [...document.querySelectorAll("input")];

  inputs
    .filter(formValidator.autoCheckValidity)
    .map(formValidator.setInputInvalid);
})();

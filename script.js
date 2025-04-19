const formValidator = (function () {
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

  const setValidityClass = (isValid, inputField) => {
    inputField.className = isValid ? "valid" : "invalid";
  };


  const autoCheckValidity = (inputField) => {
    switch (inputField.getAttribute("type")){
        case text:
            
    }
    
  };

  return { isValidNameCountry };
})();

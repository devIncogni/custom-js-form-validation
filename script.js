const formValidator = (() => {
  const nameRegExp = /^[A-Za-z]/;
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const country_list = [
    "afghanistan",
    "albania",
    "algeria",
    "andorra",
    "angola",
    "anguilla",
    "antigua &amp; barbuda",
    "argentina",
    "armenia",
    "aruba",
    "australia",
    "austria",
    "azerbaijan",
    "bahamas",
    "bahrain",
    "bangladesh",
    "barbados",
    "belarus",
    "belgium",
    "belize",
    "benin",
    "bermuda",
    "bhutan",
    "bolivia",
    "bosnia &amp; herzegovina",
    "botswana",
    "brazil",
    "british virgin islands",
    "brunei",
    "bulgaria",
    "burkina faso",
    "burundi",
    "cambodia",
    "cameroon",
    "cape verde",
    "cayman islands",
    "chad",
    "chile",
    "china",
    "colombia",
    "congo",
    "cook islands",
    "costa rica",
    "cote d ivoire",
    "croatia",
    "cruise ship",
    "cuba",
    "cyprus",
    "czech republic",
    "denmark",
    "djibouti",
    "dominica",
    "dominican republic",
    "ecuador",
    "egypt",
    "el salvador",
    "equatorial guinea",
    "estonia",
    "ethiopia",
    "falkland islands",
    "faroe islands",
    "fiji",
    "finland",
    "france",
    "french polynesia",
    "french west indies",
    "gabon",
    "gambia",
    "georgia",
    "germany",
    "ghana",
    "gibraltar",
    "greece",
    "greenland",
    "grenada",
    "guam",
    "guatemala",
    "guernsey",
    "guinea",
    "guinea bissau",
    "guyana",
    "haiti",
    "honduras",
    "hong kong",
    "hungary",
    "iceland",
    "india",
    "indonesia",
    "iran",
    "iraq",
    "ireland",
    "isle of man",
    "israel",
    "italy",
    "jamaica",
    "japan",
    "jersey",
    "jordan",
    "kazakhstan",
    "kenya",
    "kuwait",
    "kyrgyz republic",
    "laos",
    "latvia",
    "lebanon",
    "lesotho",
    "liberia",
    "libya",
    "liechtenstein",
    "lithuania",
    "luxembourg",
    "macau",
    "macedonia",
    "madagascar",
    "malawi",
    "malaysia",
    "maldives",
    "mali",
    "malta",
    "mauritania",
    "mauritius",
    "mexico",
    "moldova",
    "monaco",
    "mongolia",
    "montenegro",
    "montserrat",
    "morocco",
    "mozambique",
    "namibia",
    "nepal",
    "netherlands",
    "netherlands antilles",
    "new caledonia",
    "new zealand",
    "nicaragua",
    "niger",
    "nigeria",
    "norway",
    "oman",
    "pakistan",
    "palestine",
    "panama",
    "papua new guinea",
    "paraguay",
    "peru",
    "philippines",
    "poland",
    "portugal",
    "puerto rico",
    "qatar",
    "reunion",
    "romania",
    "russia",
    "rwanda",
    "saint pierre &amp; miquelon",
    "samoa",
    "san marino",
    "satellite",
    "saudi arabia",
    "senegal",
    "serbia",
    "seychelles",
    "sierra leone",
    "singapore",
    "slovakia",
    "slovenia",
    "south africa",
    "south korea",
    "spain",
    "sri lanka",
    "st kitts &amp; nevis",
    "st lucia",
    "st vincent",
    "st. lucia",
    "sudan",
    "suriname",
    "swaziland",
    "sweden",
    "switzerland",
    "syria",
    "taiwan",
    "tajikistan",
    "tanzania",
    "thailand",
    "timor l'este",
    "togo",
    "tonga",
    "trinidad &amp; tobago",
    "tunisia",
    "turkey",
    "turkmenistan",
    "turks &amp; caicos",
    "uganda",
    "ukraine",
    "united arab emirates",
    "united kingdom",
    "uruguay",
    "uzbekistan",
    "venezuela",
    "vietnam",
    "virgin islands (us)",
    "yemen",
    "zambia",
    "zimbabwe",
  ];

  const isValidName = (nameInputField) => {
    return nameInputField.value != 0 && nameRegExp.test(nameInputField.value);
  };

  const isValidCountry = (countryInputField) => {
    return country_list.includes(countryInputField.value.toLowerCase());
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
  };

  const hideError = (inputField) => {
    let errorDiv = document.querySelector(`#${inputField.id}+.error`);
    errorDiv.className = "error";
  };

  const isInvalidInput = (inputField) => {
    let result = "Nothing assigned";
    switch (inputField.id) {
      case "name":
        result = isValidName(inputField);
        break;
      case "country":
        result = isValidCountry(inputField);
        break;
      case "post":
        result = isValidPost(inputField);
        break;
      case "mail":
        result = isValidEmail(inputField);
        break;
      case "password":
        result = isValidPassword(inputField);
        break;
      case "confirm-password":
        result =
          document.querySelector("#password").value === inputField.value &&
          isValidPassword(inputField);
        break;
      default:
        break;
    }
    return !result;
  };

  const getErrorMsg = (inputField) => {
    let errorMsg = "Nothing assigned";
    switch (inputField.id) {
      case "name":
        errorMsg = "Please enter a valid name";
        break;
      case "mail":
        errorMsg = "Please enter a valid email";
        break;
      case "country":
        errorMsg = "Please enter a valid country";
        break;
      case "post":
        errorMsg = "Please enter a valid postal code";
        break;
      case "password":
        errorMsg =
          "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        break;
      case "confirm-password":
        errorMsg = "Passwords don't match";
        break;
      default:
        errorMsg = "Invalid";
        break;
    }
    return errorMsg;
  };

  return {
    isInvalidInput,
    setInputInvalid,
    setInputValid,
    showError,
    hideError,
    getErrorMsg,
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
        let errorMsg = formValidator.getErrorMsg(input);
        formValidator.showError(input, errorMsg);
      }
    });
  });
})();

const handleInputs = (() => {})();

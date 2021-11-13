class ElementsAccess {
  loginButton = () => {
    return '.login';
  };

  inputEmail = () => {
    return '#email_create';
  };

  createButton = () => {
    return '#SubmitCreate > span';
  };

  radioButton = () => {
    return '#uniform-id_gender1';
  };

  inputFirstName = () => {
    return '#customer_firstname';
  };

  inputLastName = () => {
    return '#customer_lastname';
  };

  inputPassword = () => {
    return '#passwd';
  };

  inputAddressOne = () => {
    return '#address1';
  };

  inputAddressTwo = () => {
    return '#address2';
  };

  inputCity = () => {
    return '#city';
  };

  inputState = () => {
    return '#id_state';
  };

  inputZip = () => {
    return '#postcode';
  };

  inputMobileNumber = () => {
    return '#phone_mobile';
  };

  submitButton = () => {
    return '#submitAccount > span';
  };
}

export default ElementsAccess;

export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
<<<<<<< HEAD:src/scripts/validation.js
  errorClass: "modal__error",
};

const showInputError = (
  formElement,
  inputElement,
  errorMsg,
  inputErrorClass
) => {
  const errorMsgElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMsgElement.textContent = errorMsg;
  inputElement.classList.add(inputErrorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass) => {
  const errorMsgElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMsgElement.textContent = "";
  inputElement.classList.remove(inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config.inputErrorClass
    );
  } else {
    hideInputError(formElement, inputElement, config.inputErrorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
=======
  errorClass: "modal__error_visible",
>>>>>>> main:scripts/validation.js
};

const toggleButtonState = (inputList, buttonElement, config) => {
  const hasInvalidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid
  );
  if (hasInvalidInput) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

<<<<<<< HEAD:src/scripts/validation.js
export const disableButton = (buttonElement, config) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
};

export const resetValidation = (formElement, inputList) => {
  inputList.forEach((input) => {
    hideInputError(formElement, input, settings.inputErrorClass);
  });
};

=======
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

>>>>>>> main:scripts/validation.js
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

<<<<<<< HEAD:src/scripts/validation.js
export const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
=======
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
>>>>>>> main:scripts/validation.js
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

<<<<<<< HEAD:src/scripts/validation.js
// Initialize validation
enableValidation(settings);
=======
export { enableValidation, settings };
>>>>>>> main:scripts/validation.js

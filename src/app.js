/* eslint-disable */
import "bootstrap";
import "./style.css";

const card = document.querySelector("#card");
const CVC = document.querySelector("#cvc");
const amount = document.querySelector("#amount");
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const postalCode = document.querySelector("#postalCode");
const message = document.querySelector("#message");
const send = document.querySelector("#send");
const alert = document.querySelector("#alert");
const cancel = document.querySelector("#cancel");

window.onload = () => {
  isValidCard();
  isValidCVC();
  isValidAmount();
  isValidFirstName();
  isValidLastName();
  isValidCity();
  isValidState();
  isValidPostalCode();
  isValidMessage();
  cancelButton();
  sendButton();
};
const cancelButton = () => {
  cancel.addEventListener("click", event => {
    alert.classList.add("fade");
    card.classList.remove("is-valid", "is-invalid");
    CVC.classList.remove("is-valid", "is-invalid");
    amount.classList.remove("is-valid", "is-invalid");
    firstName.classList.remove("is-valid", "is-invalid");
    lastName.classList.remove("is-valid", "is-invalid");
    city.classList.remove("is-valid", "is-invalid");
    state.classList.remove("is-valid", "is-invalid");
    postalCode.classList.remove("is-valid", "is-invalid");
    message.classList.remove("is-valid", "is-invalid");
  });
};

const sendButton = () => {
  send.addEventListener("click", event => {
    event.preventDefault();
    if (
      card.value == "" ||
      CVC.value == "" ||
      amount.value == "" ||
      firstName.value == "" ||
      lastName.value == "" ||
      city.value == "" ||
      state.value == "" ||
      postalCode.value == ""
    ) {
      alert.classList.remove("fade");
    }
  });
};
const invalidInputStyle = input => {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};
const validInputStyle = input => {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

const checkOnlyString = text => {
  return /^[a-zA-Z]+$/.test(text);
};

const checkOnlyNumber = Number => {
  return /^[0-9.,]+$/.test(Number);
  //   \[\,\.]?[0-9]
};

const check16Number = Number => {
  return /^\d{16}$/.test(Number);
};

const check4Number = Number => {
  return /^\d{4}$/.test(Number);
};

/*Card*/
const isValidCard = () => {
  card.addEventListener("focusout", event => {
    check16Number(card.value) ? validInputStyle(card) : invalidInputStyle(card);
  });
};

/*CVC*/
const isValidCVC = () => {
  CVC.addEventListener("focusout", event => {
    check4Number(CVC.value) ? validInputStyle(CVC) : invalidInputStyle(CVC);
  });
};

/*Amount*/
const isValidAmount = () => {
  amount.addEventListener("focusout", event => {
    checkOnlyNumber(amount.value)
      ? validInputStyle(amount)
      : invalidInputStyle(amount);
  });
};

/*First Name*/

const isValidFirstName = () => {
  firstName.addEventListener("focusout", event => {
    checkOnlyString(firstName.value)
      ? validInputStyle(firstName)
      : invalidInputStyle(firstName);
  });
};

/*Last Name*/

const isValidLastName = () => {
  lastName.addEventListener("focusout", event => {
    checkOnlyString(lastName.value)
      ? validInputStyle(lastName)
      : invalidInputStyle(lastName);
  });
};

/*City*/
const isValidCity = () => {
  city.addEventListener("focusout", event => {
    checkOnlyString(city.value)
      ? validInputStyle(city)
      : invalidInputStyle(city);
  });
};

/*State*/
const isValidState = () => {
  exampleList.addEventListener("focusout", event => {
    checkOnlyString(exampleList.value)
      ? validInputStyle(exampleList)
      : invalidInputStyle(exampleList);
  });
};

/*Postal Code*/
const isValidPostalCode = () => {
  postalCode.addEventListener("focusout", event => {
    checkOnlyNumber(postalCode.value)
      ? validInputStyle(postalCode)
      : invalidInputStyle(postalCode);
  });
};

/*Message*/
const isValidMessage = () => {
  message.addEventListener("focusout", event => {
    checkOnlyString(message.value)
      ? validInputStyle(message)
      : invalidInputStyle(message);
  });
};

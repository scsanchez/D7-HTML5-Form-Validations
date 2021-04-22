/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*NAME*/
const NAME = document.querySelector("#NAME");
const LastName = document.querySelector("#LastName");
const inpuCity = document.querySelector("#inpuCity");
const floatingTextarea = document.querySelector("#floatingTextarea");

window.onload = () => {
  isValidName();
  isValid1();
  isValid2();
  isValid3();
  isValid4();
  isValidNum1();
  isValidNum2();
  isValidNum3();
  isValidNum4();
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
  return /^[0-9]+$/.test(Number);
};

const check16Number = Number => {
  return /^\d{16}$/.test(Number);
};

const check4Number = Number => {
  return /^\d{4}$/.test(Number);
};

/*NAME*/

const isValidName = () => {
  NAME.addEventListener("focusout", event => {
    checkOnlyString(NAME.value)
      ? validInputStyle(NAME)
      : invalidInputStyle(NAME);
  });
};

/*LastName*/

const isValid1 = () => {
  LastName.addEventListener("focusout", event => {
    checkOnlyString(LastName.value)
      ? validInputStyle(LastName)
      : invalidInputStyle(LastName);
  });
};
/*LastName*/

/*CITY*/
const isValid2 = () => {
  inputCity.addEventListener("focusout", event => {
    checkOnlyString(inputCity.value)
      ? validInputStyle(inputCity)
      : invalidInputStyle(inputCity);
  });
};
/*CITY*/

/*STATE*/
const isValid4 = () => {
  exampleList.addEventListener("focusout", event => {
    checkOnlyString(exampleList.value)
      ? validInputStyle(exampleList)
      : invalidInputStyle(exampleList);
  });
};
/*STATE*/

/*MENSAJE*/
const isValid3 = () => {
  floatingTextarea.addEventListener("focusout", event => {
    checkOnlyString(floatingTextarea.value)
      ? validInputStyle(floatingTextarea)
      : invalidInputStyle(floatingTextarea);
  });
};

/*PostalCode*/
const isValidNum1 = () => {
  postalCode.addEventListener("focusout", event => {
    checkOnlyNumber(postalCode.value)
      ? validInputStyle(postalCode)
      : invalidInputStyle(postalCode);
  });
};

/*CARD*/
const isValidNum2 = () => {
  inputcard.addEventListener("focusout", event => {
    check16Number(inputcard.value)
      ? validInputStyle(inputcard)
      : invalidInputStyle(inputcard);
  });
};

/*CVC*/
const isValidNum3 = () => {
  inputcvc.addEventListener("focusout", event => {
    check4Number(inputcvc.value)
      ? validInputStyle(inputcvc)
      : invalidInputStyle(inputcvc);
  });
};

/*AMOUNT*/
const isValidNum4 = () => {
  inputamount.addEventListener("focusout", event => {
    checkOnlyNumber(inputamount.value)
      ? validInputStyle(inputamount)
      : invalidInputStyle(inputamount);
  });
};

/*window.onload = () => {
  
  const card = this.document.querySelector("#inputcard");
  card.addEventListener("input", event => { //
   

    heckCard(event)

  });

function checkCard() {
  if (event.card == null || card.length == 0 || /^\s+$/.test(card)) {
    console.log("event.inputcard");
    return alert("Estoy escribiendo");
  }
  return false;
}*/

//if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
// return false;}

/*window.onload = () => {
  const NAME = document.querySelector("#inputfirstname");
  NAME.addEventListener("input", event => {
    // detectar cambio de valor en un evento

    let empty = checkName(event);
  });
};

function checkName(event) {
  if (event.target.value) {
    return false;
  }
  return true;
}*/

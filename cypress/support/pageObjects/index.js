// <reference types= "Cypress" />

import ElementsAccess from '../elements';
const acessaElements = new ElementsAccess();
class PageAccess {
  siteAccess() {
    cy.visit('/');
    cy.wait(200);
  }

  // To make login
  toClickButtonLogin() {
    cy.get(acessaElements.loginButton()).click();
  }

  // To input email
  toInputEmail(Email) {
    cy.get(acessaElements.inputEmail()).type(Email);
  }

  // To click the button to register
  toClickButtonCreate() {
    cy.get(acessaElements.createButton()).click();
  }

  // To get check gender
  toCheckButton() {
    cy.get(acessaElements.radioButton()).should('be.visible').click();
  }

  // To input first name
  toInputFirstName(FirstName) {
    cy.get(acessaElements.inputFirstName()).type(FirstName);
  }

  // To input second name
  toInputLastName(LastName) {
    cy.get(acessaElements.inputLastName()).type(LastName);
  }

  // To input password
  toInputPassword(Password) {
    cy.get(acessaElements.inputPassword()).type(Password);
  }

  // To input address
  toInputAddressOne(AddressOne) {
    cy.get(acessaElements.inputAddressOne()).type(AddressOne);
  }

  // To input complement address
  toInputAddressTwo(AddressTwo) {
    cy.get(acessaElements.inputAddressTwo()).type(AddressTwo);
  }

  // To input city
  toInputCity(City) {
    cy.get(acessaElements.inputCity()).type(City);
  }

  // To input state
  toInputState(State) {
    cy.get(acessaElements.inputState()).select(State);
  }

  // To input zip code
  toInputZipCode(ZipCode) {
    cy.get(acessaElements.inputZip()).type(ZipCode);
  }

  // To input mobile number
  toInputMobileNumber(Number) {
    cy.get(acessaElements.inputMobileNumber()).type(Number);
  }

  // To click submit button
  toClickSubmitButton(Number) {
    cy.get(acessaElements.submitButton()).click();
  }
}

export default PageAccess;

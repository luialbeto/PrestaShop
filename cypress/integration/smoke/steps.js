import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import PageAccess from '../../support/pageObjects';
const pageAccess = new PageAccess();

Given('I as a user wanna access the site', () => {
  cy.visit('/');
  pageAccess.toClickButtonLogin();
});

And('I wanna to fill in the fields {string}', (Email) => {
  pageAccess.toInputEmail(Email);
  cy.wait(200);
});

When('I click the button', () => {
  pageAccess.toClickButtonCreate();
});

Then('I must to check the radio button', () => {
  cy.wait(200);
  pageAccess.toCheckButton();
  cy.wait(200);
});

Then('I must to fill in the fields {string} {string} {string}', (FirstName, LastName, Password) => {
  cy.wait(200);
  pageAccess.toInputFirstName(FirstName);
  pageAccess.toInputLastName(LastName);
  pageAccess.toInputPassword(Password);

});

Then(
  'I must to fill in the fields {string} {string} {string} {string} {string}',
  (AddressOne, AddressTwo, City, State, ZipCode) => {
    cy.wait(200);
    pageAccess.toInputAddressOne(AddressOne);
	pageAccess.toInputAddressTwo(AddressTwo);
	pageAccess.toInputCity(City);
	pageAccess.toInputState(State);
	pageAccess.toInputZipCode(ZipCode);
  }
);

Then('I must to fill in the fields {string}', (Number) => {
  cy.wait(200);
  pageAccess.toInputMobileNumber(Number);
});

Then('I click submit button', () => {
	cy.wait(200);
	pageAccess.toClickSubmitButton();
  });

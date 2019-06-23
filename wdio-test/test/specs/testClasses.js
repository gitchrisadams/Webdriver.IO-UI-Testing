import assert from 'assert';
import {expect} from 'chai';
import OpenPage from '../classes/OpenPage';
import Login from '../classes/Login';

describe('Testing classes', function() {
  /* Use our classes to open the page
   * then populate the username and password fields
   * and submit the form.
   */
  it(`Should open the page using classes`, () => {
    OpenPage.open();

    Login.username.addValue('fooooooo');
    Login.password.addValue('Fuzzzzz');
    Login.submit.click();

    browser.pause(2000);
  });
});
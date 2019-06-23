import assert from 'assert';
import {expect} from 'chai';

describe('waitFor finish loading', function() {
  // Specify retries to test a failing it:
  //this.retries(2);

  before(() => {
    // Run before all tests start.
    browser.url('http://localhost:3000');
  });

  // Waits for the loading indicator to finish and 'Done Loading' is displayed.
  // it(`finished loading`, () => {
  //   $(`#done-loading`).waitForDisplayed();

  //   expect($(`#done-loading`).getText()).to.equal(`Done Loading`);
  // });

  /* Can also wait for the loading indicator to NOT be displayed, but only this
   * or the above test since above will be run before this. If set undefined, true
   * to 1000, true test will fail since timeout is set to 5000/5sec.
   */
  // it(`wait for loading indicator to NOT be displayed`, () => {
  //   $(`#loading`).waitForDisplayed(undefined, true);
  // });
});
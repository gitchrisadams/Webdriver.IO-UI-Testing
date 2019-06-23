import assert from 'assert';
import {expect} from 'chai';

describe('Checking inputs', function() {
  // Specify retries to test a failing it:
  //this.retries(2);

  before(() => {
    // Run before all tests start.
    browser.url('http://localhost:3000');
  });

  /* Test checkbox input: */
  // it(`Test checkbox inputs`, () => {
  //   // Get the firt checkbox:
  //   const checkbox_one = $(`[value="Banana"]`);
  //   expect(checkbox_one.isSelected()).to.be.false;
  //   checkbox_one.click();
  //   expect(checkbox_one.isSelected()).to.be.true;
  //   browser.pause(2000);
  //   checkbox_one.click();
  //   browser.pause(2000);
  // });

  /* Testing dropdowns */
  it(`Test dropdowns`, () => {
    $(`#dropdowns`).selectByVisibleText(`pepper`);

    expect($(`#dropdowns`).getValue()).to.equal(`pepper`);

    browser.pause(2000);
  });
});
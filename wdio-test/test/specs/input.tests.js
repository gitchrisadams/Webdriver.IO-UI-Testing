import assert from 'assert';
import {expect} from 'chai';

describe('Checking inputs', function() {

  before(() => {
    // Run before all tests start.
    browser.url('http://localhost:3000');
  });

  /* Testing dropdowns */
  it(`Test dropdowns`, () => {
    // Data expected: 
    const fruitOptionsExpected = ['Banana', 'Orange'];

    // Get the Select box and click it to open it.
    const fruitDropdownEl = $(`#fruit-select`);
    fruitDropdownEl.click();

    // Get all the dropdown items
    const allItems = $$(`.css-1ml51p6-MenuList`);
    const listSplit = allItems[0].getText().split('\n');

    // Loop through dropdown items and compare to data expected:
    listSplit.forEach((item) => {
      expect(fruitOptionsExpected.includes(item)).to.equal(true);
    });

    browser.pause(3000);
  });
});
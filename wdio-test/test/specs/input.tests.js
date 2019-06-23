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
    // $(`#dropdowns`).selectByVisibleText(`pepper`);

    // expect($(`#dropdowns`).getValue()).to.equal(`pepper`);
    const fruitDropdownEl = $(`#fruit-select`);
    fruitDropdownEl.click();
    const item1 = $('#react-select-2-option-0');
    const item2 = $('#react-select-2-option-1');


    // console.log('item1', item1.getText());
    // console.log('item2', item2.getText());

    const allItems = $$(`.css-1ml51p6-MenuList`);
    //console.log('allItems', allItems);

    const temp = allItems.map((el) => {
      // console.log('loop');
      // console.log('element: ' + el.getText());
      return el.getText();
    });
    console.log('temp', temp);

    const listSplit = temp[0].split('\n');

    console.log('listsplit', listSplit);


    browser.pause(3000);
  });
});
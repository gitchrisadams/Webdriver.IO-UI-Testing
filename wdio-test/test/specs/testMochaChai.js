import assert from 'assert';
import {expect} from 'chai';

describe('webdriver.io page', function() {
  // Specify retries to test a failing it:
  //this.retries(2);

  before(() => {
    // Run before all tests start.
    browser.url('http://localhost:3000');
  });

  beforeEach(() => {
    // Run before each test starts.
  });

  after(() => {
    // Run after all test are done.
  });

  afterEach(() => {
    // Run after each test is done.
  });

  // TESTS:
  it('should have the right title Mocha', () => {
    const title = browser.getTitle();
    // Assert equal w/ Mocha:
    assert.equal(title, 'React App');
  });

  it('should have the right title Chai', () => {
    const title = browser.getTitle();
    // Expect with chai:
    expect(title).to.equal("React App");
  });

  // Example of failing test using expect and not:
  // it('This test SHOULD fail, expects React App to not Equal React App', () => {
  //   const title = browser.getTitle();
  //   // Expect with chai:
  //   expect(title).to.not.equal("React App");
  // });

  it(`get website text`, () => {
    const title = $(`.test-app-heading`).getText();
    assert.equal(title, `Test App`);
  });

  it(`list items should be visible`, () => {
    expect($(`#fruit-list`).isDisplayed()).to.equal(true);
  });

  it(`Should grab all li elements using double $$`, () => {
    const liEl = $$('ul li');

    const fruitList = ['Bananas', 'Apples', 'Oranges', 'Pears'];

    liEl.forEach((el) => {
      expect(fruitList).to.include(el.getText());
    });
  });

  it(`Should get h1 element with specific text`, () => {
    const text = $(`h1=Test App`).getText();

    expect(text).to.equal("Test App");
  });

  // Testing Login:
  it(`Should test Login`, () => {
    $(`#input1`).addValue(`chris`);
    $(`#input2`).addValue(`password`);

    $(`[type=submit]`).click();

    // Gets the text of an alert box popup.
    console.log(browser.getAlertText());

    expect(browser.getAlertText()).to.equal("Login: chris Password: password");
  });

  // Sending to a specific link on page example:
  // it(`Should click on a specific link`, () => {
  //   $(`=Pears`).click();
  // });

  // You can add an 'x' to the it function def to skip a test:
  // xit(`get website text`, () => {
  //   const title = $(`.test-app-heading`).getText();
  //   assert.equal(title, `Test App`);
  // });
});
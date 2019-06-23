import assert from 'assert';
import {expect} from 'chai';
import axios from 'axios';

describe('Checking inputs', function() {

  before(() => {
    // Run before all tests start.
    browser.url('http://localhost:3000');
  });

  /* Example of a fake api call: */
  // it(`async call example`, () => {
  //   const output = browser.call(() => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve(`Output from fake api call has resolved...`);
  //       }, 3000);
  //     });
  //   });

  //   console.log('output: ', output);
  // });

  // Example of getting data from api:
  it(`async call example with api`, () => {
    const output = browser.call((data) => {
      return axios.get('https://swapi.co/api/people/1')
    });

    console.log('output', output.data);

    expect(output.data.name).to.equal('Luke Skywalker');
  });



});
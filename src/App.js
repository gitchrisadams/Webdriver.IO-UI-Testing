import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Select from 'react-select';

export default class App extends Component {
  state = {
    value: '',
    passwordValue: '',
    loading: false
  };

  handleChange = (event)  => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    alert(`Login: ${this.state.value} Password: ${this.state.passwordValue}`);
    event.preventDefault();
  }

  handleChangePassword = (event)  => {
    this.setState({passwordValue: event.target.value})
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: true})
    }, 5000)
  }

  onChangeFruit(e) {
    console.log('e', e);
  }


  render() {
    const fruitOptions = [
      {
        value: '1',
        label: 'Banana',
        portfolio: 'Country'
      },
      {
        value: '2',
        label: 'Orange',
        portfolio: 'Comp_Ncomp'
      }
    ];

    return (
      <div className="App">
      <h1 className="test-app-heading">Test App</h1>
      <ul id="fruit-list">
        <li>Bananas</li>
        <li>Apples</li>
        <li>Oranges</li>
        <li><a href="http://pears.com">Pears</a></li>
      </ul>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="input1">Login</label>
      <input id="input1" value={this.state.value} onChange={this.handleChange}></input>

      <label htmlFor="input2">Password</label>
      <input id="input2" type="password" value={this.state.passwordValue} onChange={this.handleChangePassword}></input>
      <input id="input-btn" type="submit" value="submit"/>
      </form>
      <input type="checkbox" name="fruits" value="Banana"></input>Banana
      <input type="checkbox" name="fruits" value="Apple"></input>Apple
      <input type="checkbox" name="fruits" value="Orange"></input>Orange
      <input type="checkbox" name="fruits" value="Pear"></input>Pear
      <br/>
      <select id="dropdowns">
        <option value="lettuce">lettuce</option>
        <option value="avocodo">avocodo</option>
        <option value="pepper">pepper</option>
        <option value="Carrot">Carrot</option>
      </select>



      <Select
        options={fruitOptions}
        onChange={this.onChangeFruit}
        isSearchable={true}
        id="fruit-select"
      />


      {
        this.state.loading ?
        <div id="done-loading">Done Loading</div> :
        <img id="loading" alt="loading" src="/images/loadingIcon.gif"></img>
      }



    </div>
    )
  }
}

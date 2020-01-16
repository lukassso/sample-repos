import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const APIKey = '5e6595efcaf37d474191d93bd3bb0ced'
class App extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      value:'',
      date: '',
      city: '',
      sunrise: '',
      sunset: '',
      temp: '',
      pressure: '',
      wind: '',
      err: false

  }
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  handleCitySubmit = e => {
    e.preventDefault()
    // console.log("dududud");
    const API = 
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("Not working")
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        err: false
      })
    })  
    .catch(err => {
    console.log(err);
    this.setState({
      err: true
      })
    })
  }
  render() {
    return (
      <div className="App">
        Weather app
        <Form value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result error={this.state.err} />
      </div>
    );
  }
}

export default App;

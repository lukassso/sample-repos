import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

const APIKey = "5e6595efcaf37d474191d93bd3bb0ced";
class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      value: "",
      date: "",
      city: "",
      sunrise: "",
      sunset: "",
      temp: "",
      pressure: "",
      wind: "",
      err: false
    };
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleCitySubmit = e => {
    e.preventDefault();
    // console.log("dududud");
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error("Not working");
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const time = new Date().toLocaleString();
        this.setState(state => ({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: data.value
        }));
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          err: true,
          city: prevState.value
        }));
      });
  };
  render() {
    return (
      <div className="App">
        Weather app
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state}  />
      </div>
    );
  }
}

export default App;

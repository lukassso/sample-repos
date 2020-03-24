import React, { Component } from "react";
import Form from "@bit/lukassso.bilkom.form";
import Result from "@bit/lukassso.bilkom.result";
import "./App.css";
import IconFirst from '@bit/mui-org.material-ui-icons.cast-connected';
import LinkApp from './components/LinkApp/LinkApp';
import RadioApp from './components/RadioApp/RadioApp';
import SliderApp from './components/SliderApp/SliderApp';
import FooterApp from './components/FooterApp/FooterApp';
import ToolbarApp from './components/ToolbarApp/ToolbarApp';
import HeroUnitApp from './components/HeroUnitApp/HeroUnitApp';

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

  componentDidMount() {
    console.log("zamontowany");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("poprzednia wartość" + prevState.value);
    // console.log("aktualna wartość" + this.state.value);
    if (this.state.value.lenght === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
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
          console.log(data);
          const time = new Date().toLocaleString();
          this.setState(state => ({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: state.value
          }));
        })
        .catch(err => {
          console.log(err);
          this.setState(prevState => ({
            err: true,
            city: prevState.value
          }));
        });
    }
  }

  // this.setState({})

  // handleCitySubmit = e => {
  //   e.preventDefault();
  //   // console.log("dududud");
  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
  //   fetch(API)
  //     .then(response => {
  //       if (response.ok) {
  //         console.log(response);
  //         return response;
  //       }
  //       throw Error("Not working");
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       const time = new Date().toLocaleString();
  //       this.setState(state => ({
  //         err: false,
  //         date: time,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //         city: state.value
  //       }));
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState(prevState => ({
  //         err: true,
  //         city: prevState.value
  //       }));
  //     });
  // };
  render() {
    return (
      <>
      <ToolbarApp />
      <HeroUnitApp />
      {/* <LinkApp />
      <IconFirst />
      <RadioApp />
      <SliderApp /> */}

      <div className="app">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          // submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
      <FooterApp />
      </>
    );
  }
}

export default App;

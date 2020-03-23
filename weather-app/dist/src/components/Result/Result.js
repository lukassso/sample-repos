"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Result = function Result(props) {
  var _props$weather = props.weather,
      date = _props$weather.date,
      city = _props$weather.city,
      sunrise = _props$weather.sunrise,
      sunset = _props$weather.sunset,
      temp = _props$weather.temp,
      pressure = _props$weather.pressure,
      wind = _props$weather.wind,
      err = _props$weather.err;
  var content = null;

  if (!err && city) {
    var sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    var sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = _react.default.createElement("div", null, _react.default.createElement("div", null, "Wyszukiwanie dla miasta ", city), _react.default.createElement("div", null, "Temperatura aktualna ".concat(temp), " \xB0C "), _react.default.createElement("div", null, " Data pomiaru: ", date), _react.default.createElement("div", null, "Wsch\xF3d s\u0142o\u0144ca: ", sunriseTime), _react.default.createElement("div", null, "Zach\xF3d s\u0142o\u0144ca: ", sunsetTime), _react.default.createElement("div", null, "Ci\u015Bnienie: ", pressure), _react.default.createElement("div", null, "Si\u0142a wiatru: ", wind));
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "result"
  }, err ? "Nie ma w bazie ".concat(city) : content));
};

var _default = Result;
exports.default = _default;

//# sourceMappingURL=Result.js.map
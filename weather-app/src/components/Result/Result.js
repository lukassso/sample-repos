import React from "react";

const Result = props => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <div>Wyszukiwanie dla miasta {city}</div>
        <div>{`Temperatura aktualna ${temp}`} &#176;C </div>
        <div> Data pomiaru: {date}</div>
        <div>Wschód słońca: {sunriseTime}</div>
        <div>Zachód słońca: {sunsetTime}</div>
        <div>Ciśnienie: {pressure}</div>
        <div>Siła wiatru: {wind}</div>
      </div>
    );
  }

  return (
    <>
      <div className="result">{err ? `Nie ma w bazie ${city}` : content}</div>
    </>
  );
};

export default Result;

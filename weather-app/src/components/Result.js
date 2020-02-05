import React from 'react'



const Result = props => {
  const {
      date,
      city,
      sunrise,
      sunset,
      temp,
      pressure,
      wind,
      err,} = props.weather;

  let content = null;

  if(!err && city) {
    content = (
      <div>{`Wyszukiwanie dla miasta ${city}`}</div>
    )
  }

  return (
    <>
    <div className="result">
      {err ? `Nie ma w bazie ${city}` : content}
    </div>
    </>
  );
}

export default Result;
import React from "react";

const Form = props => {
  return (
    <form 
    // onSubmit={props.submit} 
    className="appBody">
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="Write city"
      />
      {/* <button>Search cities</button> */}
    </form>
  );
};
export default Form;

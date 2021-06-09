// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialTodo, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialTodo state
  const [formData, setFormData] = useState(initialTodo);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <form style={{textAlign: `center`, fontSize: `18px`}} onSubmit={handleSubmisson}>
      <input
         placeholder="Title of Track"
        type="text"
        onChange={handleChange}
        value={formData.name}
        name="name"
      />
      <input
         placeholder="Name of Artist"
        type="text"
        onChange={handleChange}
        value={formData.artist}
        name="artist"
      />
           <input
           placeholder="Time of the Track"
        type="text"
        onChange={handleChange}
        value={formData.time}
        name="time"
      />
      <input type="submit"value={buttonLabel} style={{ align: `center`, backgroundColor: `black`, border: `1px solid rgba(157,70,86,255)`}}/>
    </form>
  );
};

export default Form;
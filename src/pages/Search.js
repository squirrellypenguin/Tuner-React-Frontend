// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Search = ({ searchSong }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialTodo state
  const [formData, setFormData] = useState([]);

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
    searchSong(formData);
    //push user back to main page
    // history.push("/");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <form onSubmit={handleSubmisson}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.name}
        name="name"
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;
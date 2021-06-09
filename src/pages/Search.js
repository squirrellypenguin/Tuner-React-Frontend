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
  const button = {
    backgroundColor: "white",
    color: "rgba(157,70,86,255)",
   border: "0px solid black",
   paddingTop: "10px",
   textAlign: "center",
  
  };
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
    // props.history.push("/search/results");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
      <div >
    <form className="form-inline" onSubmit={handleSubmisson}>

      <input style={{fontSize: `16px`, paddingBottom: `20px`, paddingTop: `20px`, backgroundColor: `white`}} className="form" 
        type="text"
        placeholder="Song name . . . "

        onChange={handleChange}
        value={formData.name}
        name="name"
      />
 
      <button  className="real" style={button} type="submit" value="Search">Search</button>
    </form>
    </div>
  );
};

export default Search;
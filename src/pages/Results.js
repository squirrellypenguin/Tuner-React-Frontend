import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Results = (props) => {
console.log(props.tracks.track)

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };
  const names = props.tracks.track.map((name, index) => {
    return (
        <div style={div} key={index}>
        <h1>first={name.artist}</h1>
        <h2>last={name.name}</h2>
        <button onClick={() => props.handleClick(name.name, name.artist)}>Select</button>
        </div>
    );
  });




  return (
    <div style={div}>

    {names}
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Results;
import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({ posts, match, edit, deleteTodo }) => {
  const id = parseInt(match.params.id); //get the id from url param
  const post = posts.find((post) => post.id === id);

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    backgroundColor: "rgba(157,70,86,255)",
    color: "white",
    border: "3px solid rgba(0,0,0,0.5)",
    width: "80%",
    margin: "30px auto",
  };
  const button = {
    backgroundColor: "rgba(157,70,86,255)",
    border: '1px solid black'
  
  };
  return (
    <div style={div}>
      <h1>{post.artist}</h1>
      <h2>{post.name}</h2>
      <button  style={{backgroundColor: `black`, border: `1px solid rgba(157,70,86,255)`}}  onClick={(event) => edit(post)}>Edit</button>
      <Link to="/">
        <button style={button}>Go Back</button>
      </Link>
      <button  style={{backgroundColor: `black`, border: `1px solid rgba(157,70,86,255)`}}  onClick={(event) => deleteTodo(post)}>Delete</button>
      {/* <button onClick={(event) => deleteTodo(post)}>Delete</button> */}
    </div>
  );
};

export default SinglePost;
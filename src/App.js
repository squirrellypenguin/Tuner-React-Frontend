// Import All Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
  };
  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://backendtune.herokuapp.com/playlists/"
  // State to Hold The List of Songs
  const [songs, setSongs] = useState([]);
  const nullTodo = {
    name: "",
    title: "",
    time: ""
  };

  const [targetTodo, setTargetTodo] = useState(nullTodo);

  //////////////
  // Functions
  //////////////
  const getSongs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setSongs(data);
    console.log(data)
  };
  const addSong = async (newSong) => {
    console.log(newSong)
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    });
  
    // get updated list of todos
    getSongs();
  };

  const getTargetTodo = (todo) => {
    setTargetTodo(todo);
    props.history.push("/edit");
  };
  
  // Function to edit todo on form submission
  const updateTodo = async (todo) => {
    console.log(todo)
    const response = await fetch(url + todo.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  
    // get updated list of todos
    getSongs();
  };
  // Function to edit todo on form submission
const deleteTodo = async (todo) => {
  const response = await fetch(url + todo.id, {
    method: "delete",
  });

  // get updated list of todos
  getSongs();
  props.history.push("/");
};


// useEffect to get list of todos when page loads
  useEffect(() => {
  getSongs();
              }, []);
  //////////////
  // useEffects
  //////////////

  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div>
      <h1 style={h1}>My Todo List</h1>
      <Link to="/new"><button style={button}>Add a song</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllPosts {...routerProps} posts={songs} />}
        />
        {/* <Route
          path="/post/:id"
          render={(routerProps) => (
            <SinglePost {...routerProps} posts={songs} />
          )}
        /> */}
       <Route
  path="/new"
  render={(routerProps) => (
    <Form
      {...routerProps}
      initialTodo={nullTodo}
      handleSubmit={addSong}
      buttonLabel="Add Song"
    />
  )}
/>
<Route
    path="/post/:id"
    render={(routerProps) => (
      <SinglePost {...routerProps} posts={songs} edit={getTargetTodo}   deleteTodo={deleteTodo}/>
    )}
  />
<Route
    path="/edit"
    render={(routerProps) => (
      <Form
        {...routerProps}
        initialTodo={targetTodo}
        handleSubmit={updateTodo}
        buttonLabel="update todo"
      />
    )}
  />
      </Switch>
    </div>
  );
}

export default App;
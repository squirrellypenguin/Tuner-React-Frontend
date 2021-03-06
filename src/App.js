// Import All Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import Search from "./pages/Search"
import  Results from "./pages/Results"
// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////



  const button = {
    backgroundColor: "rgba(157,70,86,255)",
    display: "block",
    margin: "auto",
  };
  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://backendtune.herokuapp.com/playlists/"
  const api = "https://ws.audioscrobbler.com/2.0/?method=track.search&track="
  const key = "&api_key=82f7419f5e079f0e81b1ffe36ca98b0e&format=json"
 
  // State to Hold The List of Songs
  const [songs, setSongs] = useState([]);
  const nullTodo = {
    name: "",
    title: "",
    time: ""
  };

  const [search, setSearch] = useState([])

  const [targetTodo, setTargetTodo] = useState(nullTodo);
  const [results, setResults] = useState([])
  //////////////
  // Functions
  //////////////
  const getSongs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setSongs(data);
    // console.log(data)
  };

  const getSearch = async (find) => {
    // console.log(search)
    let apiCall = api+find.name+key
    const richApi = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?q=track:"${find.name}"`
    const response = await fetch(richApi)
    // console.log(response)
    const data = await response.json();
    setTimeout(console.log(data), 5000)
    setResults(data) 
    // console.log(data.results.trackmatches)
    setTimeout(props.history.push("/search/results"), 4000)
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
  
  // const getSearch = (find) => {
  //   let apiCall = api+find.name+key
  // //  console.log(apiCall)
  // //  setSearch(apiCall)
  // //  console.log(search)
  // getResults(apiCall)
  // };
  
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

const handleClick = async (name, artist, time, coverart, singerart) => {
  let dbFormatter = {"artist": artist, "name": name, "time": time, "coverart": coverart, "singerart": singerart}
  console.log("im the artist",   dbFormatter)
  addSong(dbFormatter)
  alert('Track Added');
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
   
    <div className="header" ><Link to="/"><h1 className="title">TUNR.</h1></Link>
 <Link to="/new"> <div className="headline"> for <span style={{color: `rgba(157,70,86,255)`, border: `0 solid rgba(157,70,86,255)`}} ><u>ADDING</u> </span> your playlist needs</div></Link>
      <Search searchSong={getSearch}/>
   
      </div>
      {/* <Link to="/"><button style={button}>Home</button></Link> */}
      {/* <Link to="/search"><button style={button}>AFinddd a song</button></Link>
      <Route
          
          path="/search"
          render={(routerProps) => <Search {...routerProps} searchSong={getSearch} />}
        /> */}
      {/* <Search  searchSong={getSearch}/> */}
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllPosts {...routerProps} posts={songs} />}
        />
   
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
        buttonLabel="Edit Track"
      />
    )}
  />

<Route
    path="/search/results"
    render={(routerProps) => (
      <Results
        {...routerProps}
        tracks={results}
        handleClick={handleClick} 
      />
    )}
  />
      </Switch>
      
    </div>
  );
}

export default App;
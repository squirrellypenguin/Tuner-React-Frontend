import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Results = (props) => {
console.log(props.tracks.data)
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
    display: "block",
   marginTop: "10px",
  
  };
  const names = props.tracks.data.map((name, index) => {

        //   const getMBID = async () => {
            //   let getter = mburl+name.mbid
            //   console.log(getter)
            // const response = await fetch(getter);
            // const data = await response.json();
            // setSongs(data);
     
        //   getMBID()
     
    return (
        <div style={div} key={index}>
            <div className="card">
        <h1><img src={name.artist.picture_big}/> <i style={{paddingLeft:`0px`, color:`black`}}class="far fa-user-circle"></i> {name.artist.name}</h1>
        <h4><i class="fas fa-music"></i>  {name.title}</h4>
        <button style={{backgroundColor: `black`, border: `1px solid rgba(157,70,86,255)`}} onClick={() => props.handleClick(name.title, name.artist.name, name.duration, name.album.cover_big, name.artist.picture_big)}>Select</button>
        </div>
        </div>
    );
  });




  return (
    <div >
{names}
    {/* {names} */}
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Results;
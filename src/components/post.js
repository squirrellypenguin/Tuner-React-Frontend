import React from "react";
import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////

  const format = (time) => {   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
  return (
    <div>
      <Link to={`/post/${post.id}`}>

    <div className="parent" style={{ 
      height: 200, 
      backgroundRepeat: `no-repeat`,
      backgroundImage: `url(${post.coverart})` 
      }}>
        <div className="div1" ><h1 className=""></h1></div><div className="div5"><h2 style={{ paddingTop: `10px`, paddingLeft:`10px`,  fontWeight: `bold`,    textShadow: `.5px .5px .5px rgba(255,255,255, .5)`,
color:`black`}}><i class="fas fa-music"></i> {post.name}</h2><h3 ><i style={{paddingLeft:`10px`, color:`black`}}class="far fa-user-circle"></i> &nbsp;   {post.artist}</h3><h4 style={{  fontWeight: `bold`,    textShadow: `.5px .5px .5px rgba(255,255,255, .5)`,
color:`black`, paddingLeft: `10px`}} className="padding"><i class="fas fa-clock"></i> {format(post.time)} </h4></div> 
      <div className="div6"><img style={{ marginTop: `50px`, height:`100px`}} className="picture" src={post.singerart} /></div>
</div>
      </Link>
<br / >
    </div>
    
  );
};

export default Post;
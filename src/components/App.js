import video from "../data/video.js";
import Header from "./Header.js";
import CommentsSection from "./CommentsSection.js";
import { useState } from "react";

function App() {

  const [likes, setLikes]=useState(video.upvotes);
  const [dislikes, setDislikes]=useState(video.downvotes);

  function handleClick(e)
  {
    if (e.target.textContent.includes("👍"))
    {
      video.upvotes++;
      setLikes(video.upvotes);
    }
    else 
    {
      console.log('Getting closer')
    }
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header handleClick={handleClick} title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}/>
      <CommentsSection comments={video.comments}/>
    </div>
  );
}

export default App;

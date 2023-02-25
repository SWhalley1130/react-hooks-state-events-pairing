import video from "../data/video.js";
import Header from "./Header.js";
import CommentsSection from "./CommentsSection.js";
import { useState } from "react";

function App() {

  const [likes, setLikes]=useState(video.upvotes);
  const [dislikes, setDislikes]=useState(video.downvotes);
  const [isHidden, setIsHidden]=useState(false);

  function handleClick(input)
  {
    if (input === 'upvote')
    {
      video.upvotes++;
      setLikes(video.upvotes);
    }
    else if (input == 'downvote')
    {
      video.downvotes++;
      setDislikes(video.downvotes);
    } 
    else
    {
      console.log('hidden button')
      setIsHidden(!isHidden)
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
      <Header isHidden={isHidden} handleClick={handleClick} title={video.title} views={video.views} createdAt={video.createdAt} upvotes={likes} downvotes={dislikes}/>
      <CommentsSection isHidden={isHidden} comments={video.comments}/>
    </div>
  );
}

export default App;

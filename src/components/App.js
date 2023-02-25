import video from "../data/video.js";
import Header from "./Header.js";
import CommentsSection from "./CommentsSection.js";

function App() {
  console.log("Here's your data:", video);

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
      <Header title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}/>
      <CommentsSection comments={video.comments}/>
    </div>
  );
}

export default App;

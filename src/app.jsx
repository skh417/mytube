import VideoList from "./components/video-list/video-list";
import "./app.css";

function App({ videos, onVideoClick, onViewMoreClick }) {
  return (
    <main>
      <VideoList
        videos={videos}
        onVideoClick={onVideoClick}
        onViewMoreClick={onViewMoreClick}
      />
    </main>
  );
}

export default App;

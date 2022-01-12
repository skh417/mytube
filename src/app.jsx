import VideoList from "./components/video-list/video-list";
import "./app.css";

function App({ videos, onVideoClick }) {
  return (
    <main>
      <VideoList videos={videos} onVideoClick={onVideoClick} />
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video-list/video-list";
import videoList from "./mock-data/video-list.json";

function App() {
  const [videos, setVideos] = useState(videoList.items);

  useEffect(() => {
    setVideos(videoList.items);
    console.log("videos:", videos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <VideoList videos={videos} />;
}

export default App;

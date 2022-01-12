import React, { useCallback, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import App from "./app";
import VideoDetail from "./components/video-detail/video-detail";
import Nav from "./nav/nav";

const Router = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    youtube
      .getMostPopular() //
      .then((res) => setVideos(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMostPopularVideos = useCallback(() => {
    youtube
      .getMostPopular() //
      .then((res) => setVideos(res));
  }, [youtube]);

  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((results) => {
          setVideos(results);
        });
    },
    [youtube]
  );

  const onVideoClick = (video) => {
    console.log("선택된 비디오 : ", video);

    navigate(`/video/${video.id}`, { replace: false, state: video });
  };

  return (
    <>
      <Nav onSearch={search} getMostPopularVideos={getMostPopularVideos} />

      <div className="router">
        <Routes>
          <Route
            path="/"
            element={<App videos={videos} onVideoClick={onVideoClick} />}
          />
          <Route path="/video">
            <Route
              path=":id"
              element={
                <VideoDetail videos={videos} onVideoClick={onVideoClick} />
              }
            />
          </Route>
          <Route
            path="*"
            element={<App videos={videos} onVideoClick={onVideoClick} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default Router;

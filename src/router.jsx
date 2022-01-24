import React, { useCallback, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import App from "./app";
import VideoDetail from "./components/video-detail/video-detail";
import Nav from "./nav/nav";

const Router = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [userState, setUserState] = useState({});
  const [nextPageToken, setNextPageToken] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    youtube
      .getMostPopular() //
      .then((res) => {
        setVideos(res.videos);
        setNextPageToken(res.nextPageToken);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMostPopularVideos = useCallback(() => {
    youtube
      .getMostPopular() //
      .then((res) => {
        setVideos(res.videos);
        setNextPageToken(res.nextPageToken);
      });
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
    navigate(`/video/${video.id}`, { replace: false, state: video });
  };

  const onViewMoreClick = async () => {
    const response = await youtube.viewMore(nextPageToken);
    const newVideos = [...videos];

    setNextPageToken(response.data.nextPageToken);
    setVideos(newVideos.concat(response.data.items));
  };

  return (
    <>
      <Nav
        onSearch={search}
        getMostPopularVideos={getMostPopularVideos}
        userState={userState}
        setUserState={setUserState}
      />

      <div className="router">
        <Routes>
          <Route
            path="/"
            element={
              <App
                videos={videos}
                onVideoClick={onVideoClick}
                onViewMoreClick={onViewMoreClick}
              />
            }
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

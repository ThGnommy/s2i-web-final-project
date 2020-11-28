import React, { useContext, useEffect } from "react";
import { VideoDesktop } from "../VideoDesktop";
import { VideoMobile } from "../VideoMobile";
import { VideoList } from "../../../styled-component";
import { StoreContext } from "../../../StoreContext";
import { Pagination } from "../../Pagination";

export const VideoContainer = () => {
  const { videos, mediaQuery } = useContext(StoreContext);

  return (
    <>
      {videos.length > 0 ? (
        <VideoList>
          {videos.map(
            (video) =>
              (mediaQuery.isDesktop && (
                <VideoDesktop
                  photoArray={video}
                  colorStar={video}
                  id={video.id}
                  key={video.id}
                  photographer={video.user.name}
                  image={video.image}
                  downloadUrl={video.video_files[2].link}
                />
              )) ||
              (mediaQuery.isTablet && (
                <VideoMobile
                  photoArray={video}
                  colorStar={video}
                  id={video.id}
                  key={video.id}
                  photographer={video.photographer}
                  image={video.image}
                  downloadUrl={video.src.original}
                />
              ))
          )}
        </VideoList>
      ) : null}
      <Pagination />
    </>
  );
};

import React from "react";
import { VideoDesktop } from "../VideoDesktop";
import { VideoMobile } from "../VideoMobile";
import { VideoList } from "../../../styled-component";
import { Pagination } from "../../Pagination";
import { useSelector } from "react-redux";
import { mediaQuery } from "../../../utils";

export const VideoContainer = () => {
  const { videos } = useSelector((state) => state.media);

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
                  video={video.video_files[0].link}
                  downloadUrl={video.video_files[2].link}
                />
              )) ||
              (mediaQuery.isTablet && (
                <VideoMobile
                  photoArray={video}
                  colorStar={video}
                  id={video.id}
                  key={video.id}
                  photographer={video.user.name}
                  video={video.video_files[0].link}
                  downloadUrl={video.video_files[2].link}
                />
              ))
          )}
        </VideoList>
      ) : null}
      <Pagination />
    </>
  );
};
